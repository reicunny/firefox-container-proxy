/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/punycode@2.3.1/node_modules/punycode/punycode.es6.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/punycode@2.3.1/node_modules/punycode/punycode.es6.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   encode: () => (/* binding */ encode),
/* harmony export */   toASCII: () => (/* binding */ toASCII),
/* harmony export */   toUnicode: () => (/* binding */ toUnicode),
/* harmony export */   ucs2decode: () => (/* binding */ ucs2decode),
/* harmony export */   ucs2encode: () => (/* binding */ ucs2encode)
/* harmony export */ });


/** Highest positive signed 32-bit float value */
const maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128; // 0x80
const delimiter = '-'; // '\x2D'

/** Regular expressions */
const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7F]/; // Note: U+007F DEL is excluded too.
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
const errors = {
	'overflow': 'Overflow: input needs wider integers to process',
	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
	'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error(type) {
	throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, callback) {
	const result = [];
	let length = array.length;
	while (length--) {
		result[length] = callback(array[length]);
	}
	return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {String} A new string of characters returned by the callback
 * function.
 */
function mapDomain(domain, callback) {
	const parts = domain.split('@');
	let result = '';
	if (parts.length > 1) {
		// In email addresses, only the domain name should be punycoded. Leave
		// the local part (i.e. everything up to `@`) intact.
		result = parts[0] + '@';
		domain = parts[1];
	}
	// Avoid `split(regex)` for IE8 compatibility. See #17.
	domain = domain.replace(regexSeparators, '\x2E');
	const labels = domain.split('.');
	const encoded = map(labels, callback).join('.');
	return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
	const output = [];
	let counter = 0;
	const length = string.length;
	while (counter < length) {
		const value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// It's a high surrogate, and there is a next character.
			const extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
const ucs2encode = codePoints => String.fromCodePoint(...codePoints);

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
const basicToDigit = function(codePoint) {
	if (codePoint >= 0x30 && codePoint < 0x3A) {
		return 26 + (codePoint - 0x30);
	}
	if (codePoint >= 0x41 && codePoint < 0x5B) {
		return codePoint - 0x41;
	}
	if (codePoint >= 0x61 && codePoint < 0x7B) {
		return codePoint - 0x61;
	}
	return base;
};

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
const digitToBasic = function(digit, flag) {
	//  0..25 map to ASCII a..z or A..Z
	// 26..35 map to ASCII 0..9
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
const adapt = function(delta, numPoints, firstTime) {
	let k = 0;
	delta = firstTime ? floor(delta / damp) : delta >> 1;
	delta += floor(delta / numPoints);
	for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
		delta = floor(delta / baseMinusTMin);
	}
	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */
const decode = function(input) {
	// Don't use UCS-2.
	const output = [];
	const inputLength = input.length;
	let i = 0;
	let n = initialN;
	let bias = initialBias;

	// Handle the basic code points: let `basic` be the number of input code
	// points before the last delimiter, or `0` if there is none, then copy
	// the first basic code points to the output.

	let basic = input.lastIndexOf(delimiter);
	if (basic < 0) {
		basic = 0;
	}

	for (let j = 0; j < basic; ++j) {
		// if it's not a basic code point
		if (input.charCodeAt(j) >= 0x80) {
			error('not-basic');
		}
		output.push(input.charCodeAt(j));
	}

	// Main decoding loop: start just after the last delimiter if any basic code
	// points were copied; start at the beginning otherwise.

	for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

		// `index` is the index of the next character to be consumed.
		// Decode a generalized variable-length integer into `delta`,
		// which gets added to `i`. The overflow checking is easier
		// if we increase `i` as we go, then subtract off its starting
		// value at the end to obtain `delta`.
		const oldi = i;
		for (let w = 1, k = base; /* no condition */; k += base) {

			if (index >= inputLength) {
				error('invalid-input');
			}

			const digit = basicToDigit(input.charCodeAt(index++));

			if (digit >= base) {
				error('invalid-input');
			}
			if (digit > floor((maxInt - i) / w)) {
				error('overflow');
			}

			i += digit * w;
			const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

			if (digit < t) {
				break;
			}

			const baseMinusT = base - t;
			if (w > floor(maxInt / baseMinusT)) {
				error('overflow');
			}

			w *= baseMinusT;

		}

		const out = output.length + 1;
		bias = adapt(i - oldi, out, oldi == 0);

		// `i` was supposed to wrap around from `out` to `0`,
		// incrementing `n` each time, so we'll fix that now:
		if (floor(i / out) > maxInt - n) {
			error('overflow');
		}

		n += floor(i / out);
		i %= out;

		// Insert `n` at position `i` of the output.
		output.splice(i++, 0, n);

	}

	return String.fromCodePoint(...output);
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
const encode = function(input) {
	const output = [];

	// Convert the input in UCS-2 to an array of Unicode code points.
	input = ucs2decode(input);

	// Cache the length.
	const inputLength = input.length;

	// Initialize the state.
	let n = initialN;
	let delta = 0;
	let bias = initialBias;

	// Handle the basic code points.
	for (const currentValue of input) {
		if (currentValue < 0x80) {
			output.push(stringFromCharCode(currentValue));
		}
	}

	const basicLength = output.length;
	let handledCPCount = basicLength;

	// `handledCPCount` is the number of code points that have been handled;
	// `basicLength` is the number of basic code points.

	// Finish the basic string with a delimiter unless it's empty.
	if (basicLength) {
		output.push(delimiter);
	}

	// Main encoding loop:
	while (handledCPCount < inputLength) {

		// All non-basic code points < n have been handled already. Find the next
		// larger one:
		let m = maxInt;
		for (const currentValue of input) {
			if (currentValue >= n && currentValue < m) {
				m = currentValue;
			}
		}

		// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
		// but guard against overflow.
		const handledCPCountPlusOne = handledCPCount + 1;
		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
			error('overflow');
		}

		delta += (m - n) * handledCPCountPlusOne;
		n = m;

		for (const currentValue of input) {
			if (currentValue < n && ++delta > maxInt) {
				error('overflow');
			}
			if (currentValue === n) {
				// Represent delta as a generalized variable-length integer.
				let q = delta;
				for (let k = base; /* no condition */; k += base) {
					const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
					if (q < t) {
						break;
					}
					const qMinusT = q - t;
					const baseMinusT = base - t;
					output.push(
						stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
					);
					q = floor(qMinusT / baseMinusT);
				}

				output.push(stringFromCharCode(digitToBasic(q, 0)));
				bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
				delta = 0;
				++handledCPCount;
			}
		}

		++delta;
		++n;

	}
	return output.join('');
};

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */
const toUnicode = function(input) {
	return mapDomain(input, function(string) {
		return regexPunycode.test(string)
			? decode(string.slice(4).toLowerCase())
			: string;
	});
};

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
const toASCII = function(input) {
	return mapDomain(input, function(string) {
		return regexNonASCII.test(string)
			? 'xn--' + encode(string)
			: string;
	});
};

/*--------------------------------------------------------------------------*/

/** Define the public API */
const punycode = {
	/**
	 * A string representing the current Punycode.js version number.
	 * @memberOf punycode
	 * @type String
	 */
	'version': '2.3.1',
	/**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */
	'ucs2': {
		'decode': ucs2decode,
		'encode': ucs2encode
	},
	'decode': decode,
	'encode': encode,
	'toASCII': toASCII,
	'toUnicode': toUnicode
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (punycode);


/***/ },

/***/ "./src/background/BackgroundMain.ts"
/*!******************************************!*\
  !*** ./src/background/BackgroundMain.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackgroundMain),
/* harmony export */   doNotProxy: () => (/* binding */ doNotProxy)
/* harmony export */ });
/* harmony import */ var _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/ProxyType */ "./src/domain/ProxyType.ts");
/* harmony import */ var _domain_proxyPatterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/proxyPatterns */ "./src/domain/proxyPatterns.ts");


const localhosts = new Set(['localhost', '127.0.0.1', '[::1]']);
const doNotProxy = [];
const emergencyBreak = {
    type: _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Socks5,
    host: 'emergency-break-proxy.localhost',
    port: 1,
    failoverTimeout: 1,
    username: 'nonexistent user',
    password: 'dummy password',
    proxyDNS: true
};
class BackgroundMain {
    constructor({ store }) {
        this.store = store;
    }
    initializeAuthListener(cookieStoreId, proxy) {
        const listener = (details) => {
            if (!details.isProxy)
                return {};
            if (details.cookieStoreId !== cookieStoreId)
                return {};
            // TODO: Fix in @types/firefox-webext-browser
            // @ts-expect-error
            const info = details.proxyInfo;
            if (info.host !== proxy.host || info.port !== proxy.port || info.type !== proxy.type)
                return {};
            const result = { authCredentials: { username: proxy.username, password: proxy.password } };
            browser.webRequest.onAuthRequired.removeListener(listener);
            return result;
        };
        browser.webRequest.onAuthRequired.addListener(listener, { urls: ['<all_urls>'] }, ['blocking']);
    }
    openPreferences(browser) {
        return () => {
            browser.runtime.openOptionsPage();
        };
    }
    // TODO: Fix in @types/firefox-webext-browser
    async onRequest(requestDetails) {
        var _a;
        try {
            const cookieStoreId = (_a = requestDetails.cookieStoreId) !== null && _a !== void 0 ? _a : '';
            if (cookieStoreId === '') {
                console.error('cookieStoreId is not defined', requestDetails);
                return doNotProxy;
            }
            const proxies = await this.store.getProxiesForContainer(cookieStoreId);
            if (proxies.length > 0) {
                proxies.forEach(p => {
                    if (p.type === _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Http || p.type === _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Https) {
                        this.initializeAuthListener(cookieStoreId, p);
                    }
                });
                const result = proxies.filter((p) => {
                    try {
                        const documentUrl = new URL(requestDetails.url);
                        const isLocalhost = localhosts.has(documentUrl.hostname);
                        if (isLocalhost && p.doNotProxyLocal) {
                            return false;
                        }
                    }
                    catch (e) {
                        console.error(e);
                    }
                    if (p.includePatterns !== undefined && p.includePatterns.length > 0) {
                        if (!(0,_domain_proxyPatterns__WEBPACK_IMPORTED_MODULE_1__.matchesAnyPattern)(requestDetails.url, p.includePatterns)) {
                            return false;
                        }
                    }
                    return true;
                }).map(p => p.asProxyInfo());
                if (result.length === 0) {
                    return doNotProxy;
                }
                return result;
            }
            return doNotProxy;
        }
        catch (e) {
            console.error(`Error in onRequest listener: ${e}`);
            return [emergencyBreak];
        }
    }
    run(browser) {
        const filter = { urls: ['<all_urls>'] };
        browser.proxy.onRequest.addListener(this.onRequest.bind(this), filter);
        browser.browserAction.onClicked.addListener(this.openPreferences(browser));
        browser.proxy.onError.addListener((e) => {
            console.error('Proxy error', e);
        });
    }
}


/***/ },

/***/ "./src/domain/ProxySettings.ts"
/*!*************************************!*\
  !*** ./src/domain/ProxySettings.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpProxySettings: () => (/* binding */ HttpProxySettings),
/* harmony export */   HttpsProxySettings: () => (/* binding */ HttpsProxySettings),
/* harmony export */   ProxySettings: () => (/* binding */ ProxySettings),
/* harmony export */   Socks4ProxySettings: () => (/* binding */ Socks4ProxySettings),
/* harmony export */   Socks5ProxySettings: () => (/* binding */ Socks5ProxySettings)
/* harmony export */ });
/* harmony import */ var _ProxyType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyType */ "./src/domain/ProxyType.ts");
/* harmony import */ var _options_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/util */ "./src/options/util.ts");


const failoverTimeout = 5;
var ProxySettings;
(function (ProxySettings) {
    function tryFromDao(dao) {
        switch (dao.type) {
            case 'socks':
                return new Socks5ProxySettings(dao);
            case 'socks4':
                return new Socks4ProxySettings(dao);
            case 'http':
                return new HttpProxySettings(dao);
            case 'https':
                return new HttpsProxySettings(dao);
            default:
                return undefined;
        }
    }
    ProxySettings.tryFromDao = tryFromDao;
})(ProxySettings || (ProxySettings = {}));
class ProxySettingsBase {
    constructor(dao) {
        var _a;
        this.id = dao.id;
        this.title = dao.title;
        this.host = dao.host;
        this.port = dao.port;
        this.doNotProxyLocal = dao.doNotProxyLocal;
        this.includePatterns = (_a = dao.includePatterns) !== null && _a !== void 0 ? _a : [];
    }
    get url() {
        return `${this.type}://${this.host}:${this.port}`;
    }
    baseDao() {
        return {
            id: this.id,
            title: this.title,
            type: this.type,
            host: this.host,
            port: this.port,
            doNotProxyLocal: this.doNotProxyLocal,
            includePatterns: this.includePatterns
        };
    }
}
class Socks5ProxySettings extends ProxySettingsBase {
    constructor(dao) {
        var _a;
        super(dao);
        this.username = dao.username;
        this.password = dao.password;
        this.proxyDNS = (_a = dao.proxyDNS) !== null && _a !== void 0 ? _a : true;
    }
    get type() {
        return _ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Socks5;
    }
    asProxyInfo() {
        var _a, _b;
        return {
            type: this.type,
            host: this.host,
            port: this.port,
            username: (_a = this.username) !== null && _a !== void 0 ? _a : '',
            password: (_b = this.password) !== null && _b !== void 0 ? _b : '',
            proxyDNS: this.proxyDNS,
            failoverTimeout
        };
    }
    asDao() {
        return { ...super.baseDao(), username: this.username, password: this.password, proxyDNS: this.proxyDNS };
    }
}
class Socks4ProxySettings extends ProxySettingsBase {
    constructor(dao) {
        var _a;
        super(dao);
        this.proxyDNS = (_a = dao.proxyDNS) !== null && _a !== void 0 ? _a : true;
    }
    get type() {
        return _ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Socks4;
    }
    asProxyInfo() {
        return {
            type: this.type,
            host: this.host,
            port: this.port,
            proxyDNS: this.proxyDNS,
            failoverTimeout
        };
    }
    asDao() {
        return { ...super.baseDao(), proxyDNS: this.proxyDNS };
    }
}
class HttpBasedProxySettings extends ProxySettingsBase {
    constructor(dao) {
        super(dao);
        this.username = dao.username;
        this.password = dao.password;
    }
    asDao() {
        return { ...super.baseDao(), username: this.username, password: this.password };
    }
}
class HttpsProxySettings extends HttpBasedProxySettings {
    get type() {
        return _ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Https;
    }
    asProxyInfo() {
        var _a, _b;
        return {
            type: this.type,
            host: this.host,
            port: this.port,
            proxyAuthorizationHeader: (0,_options_util__WEBPACK_IMPORTED_MODULE_1__.generateAuthorizationHeader)((_a = this.username) !== null && _a !== void 0 ? _a : '', (_b = this.password) !== null && _b !== void 0 ? _b : ''),
            failoverTimeout
        };
    }
}
class HttpProxySettings extends HttpBasedProxySettings {
    get type() {
        return _ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Http;
    }
    asProxyInfo() {
        return {
            type: this.type,
            host: this.host,
            port: this.port,
            failoverTimeout
        };
    }
}


/***/ },

/***/ "./src/domain/ProxyType.ts"
/*!*********************************!*\
  !*** ./src/domain/ProxyType.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyType: () => (/* binding */ ProxyType)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-namespace,no-redeclare,import/export */
var ProxyType;
(function (ProxyType) {
    ProxyType["Socks5"] = "socks";
    ProxyType["Socks4"] = "socks4";
    ProxyType["Http"] = "http";
    ProxyType["Https"] = "https";
})(ProxyType || (ProxyType = {}));
(function (ProxyType) {
    function tryFromString(s) {
        switch (s) {
            case 'socks':
                return ProxyType.Socks5;
            case 'socks4':
                return ProxyType.Socks4;
            case 'http':
                return ProxyType.Http;
            case 'https':
                return ProxyType.Https;
            default:
                return undefined;
        }
    }
    ProxyType.tryFromString = tryFromString;
})(ProxyType || (ProxyType = {}));


/***/ },

/***/ "./src/domain/proxyPatterns.ts"
/*!*************************************!*\
  !*** ./src/domain/proxyPatterns.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchesAnyPattern: () => (/* binding */ matchesAnyPattern),
/* harmony export */   matchesPattern: () => (/* binding */ matchesPattern),
/* harmony export */   normalizePatterns: () => (/* binding */ normalizePatterns),
/* harmony export */   parsePatternsInput: () => (/* binding */ parsePatternsInput)
/* harmony export */ });
/* harmony import */ var punycode___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! punycode/ */ "./node_modules/.pnpm/punycode@2.3.1/node_modules/punycode/punycode.es6.js");

// Patterns controlling when a container's proxy is used.
// Empty list means "proxy everything" (current behaviour).
// Supported syntax (case-insensitive for hosts):
//   example.com             exact host
//   subdomain.example.com   exact host
//   *.example.com           example.com + all subdomains
//   *example.com            same as *.example.com (leading dot is optional)
//   sub*.example.com        generic host wildcard (`*` matches any chars)
//   *                       match everything
// If a pattern contains `/` it is treated as a URL wildcard, e.g.:
//   https://*.example.com/*
//   *://*.example.com/login*
// `*` in URL patterns matches any characters. Matching is case-insensitive.
function parsePatternsInput(raw) {
    return raw
        .split(/[\s,;]+/)
        .map(p => p.trim())
        .filter(p => p.length > 0);
}
function normalizePatterns(patterns) {
    return patterns
        .map(p => (p !== null && p !== void 0 ? p : '').trim())
        .filter(p => p.length > 0);
}
function matchesAnyPattern(urlString, patterns) {
    const normalized = normalizePatterns(patterns);
    if (normalized.length === 0) {
        return true;
    }
    return normalized.some(pattern => matchesPattern(urlString, pattern));
}
function matchesPattern(urlString, rawPattern) {
    const pattern = rawPattern.trim();
    if (pattern === '') {
        return false;
    }
    if (pattern === '*') {
        return true;
    }
    if (pattern.includes('/')) {
        return matchesUrlWildcard(urlString, pattern);
    }
    return matchesHostPattern(urlString, pattern);
}
function matchesUrlWildcard(urlString, pattern) {
    try {
        const regex = new RegExp('^' + wildcardToRegexBody(pattern) + '$', 'i');
        return regex.test(urlString);
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
function matchesHostPattern(urlString, pattern) {
    let hostname;
    try {
        hostname = new URL(urlString).hostname;
    }
    catch (e) {
        // To be on a safe side: proxy requests with unparsable URLs
        // (consistent with BackgroundMain behaviour for invalid URLs).
        console.error(e);
        return true;
    }
    const normalizedHost = normalizeHost(hostname);
    const normalizedPattern = normalizeHost(pattern);
    if (normalizedPattern === '*') {
        return true;
    }
    if (normalizedPattern.startsWith('*')) {
        let base = normalizedPattern.slice(1);
        if (base.startsWith('.')) {
            base = base.slice(1);
        }
        if (base === '' || base === '*') {
            return true;
        }
        if (base.includes('*')) {
            // e.g. `*.ex*ample.com` — fall back to generic wildcard match
            return wildcardMatches(normalizedHost, normalizedPattern);
        }
        return normalizedHost === base || normalizedHost.endsWith('.' + base);
    }
    if (normalizedPattern.includes('*')) {
        return wildcardMatches(normalizedHost, normalizedPattern);
    }
    return normalizedHost === normalizedPattern;
}
function normalizeHost(host) {
    const lower = host.trim().toLowerCase();
    try {
        return (0,punycode___WEBPACK_IMPORTED_MODULE_0__.toASCII)(lower);
    }
    catch (e) {
        return lower;
    }
}
function wildcardMatches(value, pattern) {
    try {
        const regex = new RegExp('^' + wildcardToRegexBody(pattern) + '$', 'i');
        return regex.test(value);
    }
    catch (e) {
        console.error(e);
        return false;
    }
}
function wildcardToRegexBody(pattern) {
    // Escape every regex special char except `*`, then `*` -> `.*`
    return pattern
        .split('*')
        .map(escapeRegExp)
        .join('.*');
}
function escapeRegExp(s) {
    return s.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
}


/***/ },

/***/ "./src/options/util.ts"
/*!*****************************!*\
  !*** ./src/options/util.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateAuthorizationHeader: () => (/* binding */ generateAuthorizationHeader),
/* harmony export */   uuidv4: () => (/* binding */ uuidv4)
/* harmony export */ });
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, character => {
        const random = Math.random() * 16 | 0;
        const v = character === 'x' ? random : (random & 0x3 | 0x8);
        return v.toString(16);
    });
}
function generateAuthorizationHeader(username, password) {
    return 'Basic ' + btoa(`${username}:${password}`);
}


/***/ },

/***/ "./src/store/Store.ts"
/*!****************************!*\
  !*** ./src/store/Store.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyDao: () => (/* binding */ ProxyDao),
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/ProxyType */ "./src/domain/ProxyType.ts");
/* harmony import */ var _options_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/util */ "./src/options/util.ts");
/* harmony import */ var _domain_ProxySettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/ProxySettings */ "./src/domain/ProxySettings.ts");



var tryFromDao = _domain_ProxySettings__WEBPACK_IMPORTED_MODULE_2__.ProxySettings.tryFromDao;
var ProxyDao;
(function (ProxyDao) {
    function toProxyInfo(proxy) {
        var _a, _b, _c, _d, _e, _f;
        const type = _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.tryFromString(proxy.type);
        if (type === undefined) {
            return;
        }
        const base = {
            host: proxy.host,
            port: proxy.port,
            failoverTimeout: 5
        };
        switch (type) {
            case _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Socks5:
                return {
                    type,
                    ...base,
                    username: (_a = proxy.username) !== null && _a !== void 0 ? _a : '',
                    password: (_b = proxy.password) !== null && _b !== void 0 ? _b : '',
                    proxyDNS: (_c = proxy.proxyDNS) !== null && _c !== void 0 ? _c : true
                };
            case _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Socks4:
                return {
                    type,
                    ...base,
                    proxyDNS: (_d = proxy.proxyDNS) !== null && _d !== void 0 ? _d : true
                };
            case _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Http:
                return {
                    type,
                    ...base
                };
            case _domain_ProxyType__WEBPACK_IMPORTED_MODULE_0__.ProxyType.Https:
                return {
                    type,
                    ...base,
                    proxyAuthorizationHeader: (0,_options_util__WEBPACK_IMPORTED_MODULE_1__.generateAuthorizationHeader)((_e = proxy.username) !== null && _e !== void 0 ? _e : '', (_f = proxy.password) !== null && _f !== void 0 ? _f : '')
                };
        }
    }
    ProxyDao.toProxyInfo = toProxyInfo;
})(ProxyDao || (ProxyDao = {}));
class Store {
    async getAllProxies() {
        const proxyDaos = await this.getAllProxyDaos();
        const result = proxyDaos.map(tryFromDao).filter(p => p !== undefined);
        return result;
    }
    async getProxyById(id) {
        const proxies = await this.getAllProxies();
        const index = proxies.findIndex(p => p.id === id);
        if (index === -1) {
            return null;
        }
        else {
            return proxies[index];
        }
    }
    async putProxy(proxy) {
        const proxies = await this.getAllProxyDaos();
        const index = proxies.findIndex(p => p.id === proxy.id);
        if (index !== -1) {
            proxies[index] = proxy.asDao();
        }
        else {
            proxies.push(proxy.asDao());
        }
        await this.saveProxyDaos(proxies);
    }
    async deleteProxyById(id) {
        const proxies = await this.getAllProxyDaos();
        const index = proxies.findIndex(p => p.id === id);
        if (index !== -1) {
            proxies.splice(index, 1);
            await this.saveProxyDaos(proxies);
        }
    }
    async getRelations() {
        var _a;
        const result = await browser.storage.local.get('relations');
        return (_a = result.relations) !== null && _a !== void 0 ? _a : {};
    }
    async setContainerProxyRelation(cookieStoreId, proxyId) {
        const relations = await this.getRelations();
        relations[cookieStoreId] = [proxyId];
        await browser.storage.local.set({ relations: relations });
    }
    async getProxiesForContainer(cookieStoreId) {
        var _a;
        const relations = await this.getRelations();
        const proxyIds = (_a = relations[cookieStoreId]) !== null && _a !== void 0 ? _a : [];
        if (proxyIds.length === 0) {
            return [];
        }
        const proxies = await this.getAllProxies();
        const proxyById = {};
        proxies.forEach(function (p) { proxyById[p.id] = p; });
        return proxyIds.map(pId => proxyById[pId])
            .filter(p => p !== undefined)
            .map(fillInDefaults)
            .map(tryFromDao)
            .filter(p => p !== undefined);
    }
    async saveProxyDaos(p) {
        await browser.storage.local.set({ proxies: p });
    }
    async getAllProxyDaos() {
        var _a;
        const fetched = await browser.storage.local.get('proxies');
        const proxies = (_a = fetched.proxies) !== null && _a !== void 0 ? _a : [];
        const proxyDaoList = proxies.map(fillInDefaults);
        return proxyDaoList;
    }
}
function fillInDefaults(proxy) {
    if (proxy.title === undefined) {
        proxy.title = '';
    }
    if (typeof proxy.doNotProxyLocal === 'undefined') {
        proxy.doNotProxyLocal = true;
    }
    if (proxy.includePatterns === undefined) {
        proxy.includePatterns = [];
    }
    if (typeof proxy.proxyDNS === 'undefined') {
        if (proxy.type === 'socks' || proxy.type === 'socks4') {
            proxy.proxyDNS = true;
        }
    }
    return proxy;
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/background/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");
/* harmony import */ var _BackgroundMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackgroundMain */ "./src/background/BackgroundMain.ts");


console.log('Background script started');
// const browser = browser
const store = new _store_Store__WEBPACK_IMPORTED_MODULE_0__.Store();
const backgroundListener = new _BackgroundMain__WEBPACK_IMPORTED_MODULE_1__["default"]({ store });
backgroundListener.run(browser);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map