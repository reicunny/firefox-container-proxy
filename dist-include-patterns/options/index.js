/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/api.js"
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/api.js ***!
  \**********************************************************************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/getUrl.js"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*************************************************************************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*****************************************************************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/.pnpm/css-modules-typescript-loader@4.0.1/node_modules/css-modules-typescript-loader/index.js!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.105.0_webpack@5.111.1/node_modules/sass-loader/dist/cjs.js!./src/options/ProxyForm/ProxyForm.module.scss"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-modules-typescript-loader@4.0.1/node_modules/css-modules-typescript-loader/index.js!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.105.0_webpack@5.111.1/node_modules/sass-loader/dist/cjs.js!./src/options/ProxyForm/ProxyForm.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/DuckDuckGo_logo.v107.min.svg */ "./src/options/icons/DuckDuckGo_logo.v107.min.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__connectionSettings--N4y4X {
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__hostInput--e1S5F {
  flex-grow: 1;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__portInput--X_dix {
  flex-basis: 4em;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__separator--VzaCn {
  color: var(--grey-50);
  align-self: end;
  padding: 4px;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__credentials--hhXf7 {
  display: flex;
  margin-bottom: 8px;
  justify-content: stretch;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__credentials--hhXf7 > * {
  flex-grow: 1;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__credentials--hhXf7 > :first-child {
  padding-right: 4px;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__advanced--NTmno {
  display: flex;
  margin-bottom: 8px;
  justify-content: stretch;
  flex-direction: column;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__advanced--NTmno > * {
  flex-grow: 1;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__advanced--NTmno > :first-child {
  padding-right: 4px;
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__actions--NdFFx > *:not(:first-child) {
  margin-left: var(--baseline-grid);
}
.ProxyForm-module__ProxyForm--CRReN .ProxyForm-module__duckduckgo-attribution--iXc6E {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat no-repeat;
  background-position: 100%;
  background-size: contain;
  padding-right: 1.3em;
  font-size: 80%;
}`, "",{"version":3,"sources":["webpack://./src/options/ProxyForm/ProxyForm.module.scss"],"names":[],"mappings":"AACI;EACI,aAAA;EACA,eAAA;EACA,kBAAA;AAAR;AAGI;EACI,YAAA;AADR;AAII;EACI,eAAA;AAFR;AAKI;EACI,qBAAA;EACA,eAAA;EACA,YAAA;AAHR;AAMI;EACI,aAAA;EACA,kBAAA;EACA,wBAAA;AAJR;AAOI;EACI,YAAA;AALR;AAQI;EACI,kBAAA;AANR;AASI;EACI,aAAA;EACA,kBAAA;EACA,wBAAA;EACA,sBAAA;AAPR;AAUI;EACI,YAAA;AARR;AAWI;EACI,kBAAA;AATR;AAYI;EACI,iCAAA;AAVR;AAaI;EACI,yDAAA;EACA,sCAAA;EACA,yBAAA;EACA,wBAAA;EACA,oBAAA;EAEA,cAAA;AAZR","sourcesContent":[".ProxyForm {\n    .connectionSettings {\n        display: flex;\n        margin-top: 8px;\n        margin-bottom: 8px;\n    }\n\n    .hostInput {\n        flex-grow: 1;\n    }\n\n    .portInput {\n        flex-basis: 4em;\n    }\n\n    .separator {\n        color: var(--grey-50);\n        align-self: end;\n        padding: 4px;\n    }\n\n    .credentials {\n        display: flex;\n        margin-bottom: 8px;\n        justify-content: stretch;\n    }\n\n    .credentials > * {\n        flex-grow: 1;\n    }\n\n    .credentials > :first-child {\n        padding-right: 4px;\n    }\n\n    .advanced {\n        display: flex;\n        margin-bottom: 8px;\n        justify-content: stretch;\n        flex-direction: column;\n    }\n\n    .advanced > * {\n        flex-grow: 1;\n    }\n\n    .advanced > :first-child {\n        padding-right: 4px;\n    }\n\n    .actions > *:not(:first-child) {\n        margin-left: var(--baseline-grid);\n    }\n\n    .duckduckgo-attribution {\n        background-image: url(\"../icons/DuckDuckGo_logo.v107.min.svg\");\n        background-repeat: no-repeat no-repeat;\n        background-position: 100%;\n        background-size: contain;\n        padding-right: 1.3em;\n\n        font-size: 80%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ProxyForm": `ProxyForm-module__ProxyForm--CRReN`,
	"connectionSettings": `ProxyForm-module__connectionSettings--N4y4X`,
	"hostInput": `ProxyForm-module__hostInput--e1S5F`,
	"portInput": `ProxyForm-module__portInput--X_dix`,
	"separator": `ProxyForm-module__separator--VzaCn`,
	"credentials": `ProxyForm-module__credentials--hhXf7`,
	"advanced": `ProxyForm-module__advanced--NTmno`,
	"actions": `ProxyForm-module__actions--NdFFx`,
	"duckduckgo-attribution": `ProxyForm-module__duckduckgo-attribution--iXc6E`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/.pnpm/css-modules-typescript-loader@4.0.1/node_modules/css-modules-typescript-loader/index.js!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.105.0_webpack@5.111.1/node_modules/sass-loader/dist/cjs.js!./src/options/nav/Navigation.module.scss"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-modules-typescript-loader@4.0.1/node_modules/css-modules-typescript-loader/index.js!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.105.0_webpack@5.111.1/node_modules/sass-loader/dist/cjs.js!./src/options/nav/Navigation.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Top Sites.svg */ "./src/options/nav/Top Sites.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Secure.svg */ "./src/options/nav/Secure.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! Help.svg */ "./src/options/nav/Help.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/filter.svg */ "./src/options/icons/filter.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___, { hash: "#fill" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Navigation-module__nav--OhvkZ {
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  -moz-appearance: none;
  background-color: initial;
  border-width: 0;
  width: 240px;
  padding: 1px;
}
.Navigation-module__nav--OhvkZ .Navigation-module__main--hpAbs {
  flex-grow: 1;
  font-size: var(--title-20);
  --item-height: 48px;
}
.Navigation-module__nav--OhvkZ .Navigation-module__item--ptlQY {
  --color: var(--text-color);
  color: var(--color);
  min-height: var(--item-height);
  -moz-appearance: none;
  margin-inline-start: 34px;
  padding-inline-end: 10px;
  padding-inline-start: 10px;
  transition: background-color 150ms;
  display: flex;
  text-decoration: none;
}
.Navigation-module__nav--OhvkZ .Navigation-module__item--ptlQY.Navigation-module__assign--cA0KU {
  --nav-icon:url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.Navigation-module__nav--OhvkZ .Navigation-module__item--ptlQY.Navigation-module__proxies--DexuD {
  --nav-icon:url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.Navigation-module__nav--OhvkZ .Navigation-module__item--ptlQY.Navigation-module__help--PaQ1E {
  --nav-icon:url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.Navigation-module__nav--OhvkZ .Navigation-module__item--ptlQY .Navigation-module__item-icon--FcT9c {
  width: 1.43em; /*24px*/
  background-image: var(--nav-icon);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 4px;
  fill: var(--color);
  filter: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.Navigation-module__nav--OhvkZ .Navigation-module__item--ptlQY:hover {
  background-color: var(--in-content-category-background-hover);
  border-radius: 2px;
}
.Navigation-module__nav--OhvkZ .Navigation-module__item--ptlQY.Navigation-module__active--L8aZ4 {
  --color: var(--in-content-category-text-selected);
}
.Navigation-module__nav--OhvkZ .Navigation-module__item-label--e2fRg {
  align-self: center;
  line-height: 1.4em;
  padding-bottom: 2px;
  padding-inline-start: 9px;
  margin: 0;
  -moz-user-select: none;
  margin-inline-start: 6px;
  margin-inline-end: 5px;
}
.Navigation-module__nav--OhvkZ .Navigation-module__support--SB9cD {
  font-size: 0.9em;
  --item-height: 36px;
  margin-bottom: 36px;
}`, "",{"version":3,"sources":["webpack://./src/options/nav/Navigation.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EAEA,qBAAA;EACA,yBAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;AAAJ;AAGI;EACI,YAAA;EACA,0BAAA;EAEA,mBAAA;AAFR;AAOI;EACI,0BAAA;EACA,mBAAA;EAEA,8BAAA;EACA,qBAAA;EACA,yBAAA;EACA,wBAAA;EACA,0BAAA;EACA,kCAAA;EACA,aAAA;EACA,qBAAA;AANR;AASI;EACI,kDAAA;AAPR;AASI;EACI,kDAAA;AAPR;AASI;EACI,kDAAA;AAPR;AAUI;EACI,aAAA,EAAA,OAAA;EAEA,iCAAA;EACA,wBAAA;EACA,4BAAA;EACA,kCAAA;EAEA,iBAAA;EAEA,kBAAA;EACA,+CAAA;AAXR;AAcI;EACI,6DAAA;EACA,kBAAA;AAZR;AAeI;EACI,iDAAA;AAbR;AAgBI;EACI,kBAAA;EAEA,kBAAA;EACA,mBAAA;EACA,yBAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,sBAAA;AAfR;AAmBI;EACI,gBAAA;EACA,mBAAA;EACA,mBAAA;AAjBR","sourcesContent":[".nav {\n    overflow-x: hidden;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n\n    -moz-appearance: none;\n    background-color: initial;\n    border-width: 0;\n    width: 240px;\n    padding: 1px;\n\n\n    .main {\n        flex-grow: 1;\n        font-size: var(--title-20);\n\n        --item-height: 48px;\n    }\n\n\n\n    .item {\n        --color: var(--text-color);\n        color: var(--color);\n\n        min-height: var(--item-height);\n        -moz-appearance: none;\n        margin-inline-start: 34px;\n        padding-inline-end: 10px;\n        padding-inline-start: 10px;\n        transition: background-color 150ms;\n        display: flex;\n        text-decoration: none;\n    }\n\n    .item.assign {\n        --nav-icon:url(\"Top Sites.svg\");\n    }\n    .item.proxies {\n        --nav-icon:url(\"Secure.svg\");\n    }\n    .item.help {\n        --nav-icon:url(\"Help.svg\");\n    }\n\n    .item .item-icon {\n        width: 1.43em; /*24px*/\n\n        background-image: var(--nav-icon);\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center center;\n\n        margin-right: 4px;\n\n        fill: var(--color);\n        filter: url(\"../icons/filter.svg#fill\");\n    }\n\n    .item:hover {\n        background-color: var(--in-content-category-background-hover);\n        border-radius: 2px;\n    }\n\n    .item.active {\n        --color: var(--in-content-category-text-selected);\n    }\n\n    .item-label {\n        align-self: center;\n\n        line-height: 1.4em;\n        padding-bottom: 2px;\n        padding-inline-start: 9px;\n        margin: 0;\n        -moz-user-select: none;\n        margin-inline-start: 6px;\n        margin-inline-end: 5px;\n\n    }\n\n    .support {\n        font-size: .9em;\n        --item-height: 36px;\n        margin-bottom: 36px;\n    }\n\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"nav": `Navigation-module__nav--OhvkZ`,
	"main": `Navigation-module__main--hpAbs`,
	"item": `Navigation-module__item--ptlQY`,
	"assign": `Navigation-module__assign--cA0KU`,
	"proxies": `Navigation-module__proxies--DexuD`,
	"help": `Navigation-module__help--PaQ1E`,
	"item-icon": `Navigation-module__item-icon--FcT9c`,
	"active": `Navigation-module__active--L8aZ4`,
	"item-label": `Navigation-module__item-label--e2fRg`,
	"support": `Navigation-module__support--SB9cD`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/api/mount-redraw.js"
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/api/mount-redraw.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js")

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var pending = false
	var offset = -1

	function sync() {
		for (offset = 0; offset < subscriptions.length; offset += 2) {
			try { render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		offset = -1
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount expects a component, not a vnode.")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			if (index <= offset) offset -= 2
			render(root, [])
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/api/router.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/api/router.js ***!
  \*****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js")
var hyperscript = __webpack_require__(/*! ../render/hyperscript */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/hyperscript.js")

var decodeURIComponentSafe = __webpack_require__(/*! ../util/decodeURIComponentSafe */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/decodeURIComponentSafe.js")
var buildPathname = __webpack_require__(/*! ../pathname/build */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/build.js")
var parsePathname = __webpack_require__(/*! ../pathname/parse */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/parse.js")
var compileTemplate = __webpack_require__(/*! ../pathname/compileTemplate */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/compileTemplate.js")
var censor = __webpack_require__(/*! ../util/censor */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/censor.js")

module.exports = function($window, mountRedraw) {
	var p = Promise.resolve()

	var scheduled = false

	var ready = false
	var hasBeenResolved = false

	var dom, compiled, fallbackRoute

	var currentResolver, component, attrs, currentPath, lastUpdate

	var RouterRoot = {
		onremove: function() {
			ready = hasBeenResolved = false
			$window.removeEventListener("popstate", fireAsync, false)
		},
		view: function() {
			// The route has already been resolved.
			// Therefore, the following early return is not needed.
			// if (!hasBeenResolved) return

			var vnode = Vnode(component, attrs.key, attrs)
			if (currentResolver) return currentResolver.render(vnode)
			// Wrap in a fragment to preserve existing key semantics
			return [vnode]
		},
	}

	var SKIP = route.SKIP = {}

	function resolveRoute() {
		scheduled = false
		// Consider the pathname holistically. The prefix might even be invalid,
		// but that's not our problem.
		var prefix = $window.location.hash
		if (route.prefix[0] !== "#") {
			prefix = $window.location.search + prefix
			if (route.prefix[0] !== "?") {
				prefix = $window.location.pathname + prefix
				if (prefix[0] !== "/") prefix = "/" + prefix
			}
		}
		var path = decodeURIComponentSafe(prefix).slice(route.prefix.length)
		var data = parsePathname(path)

		Object.assign(data.params, $window.history.state)

		function reject(e) {
			console.error(e)
			route.set(fallbackRoute, null, {replace: true})
		}

		loop(0)
		function loop(i) {
			for (; i < compiled.length; i++) {
				if (compiled[i].check(data)) {
					var payload = compiled[i].component
					var matchedRoute = compiled[i].route
					var localComp = payload
					var update = lastUpdate = function(comp) {
						if (update !== lastUpdate) return
						if (comp === SKIP) return loop(i + 1)
						component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
						attrs = data.params, currentPath = path, lastUpdate = null
						currentResolver = payload.render ? payload : null
						if (hasBeenResolved) mountRedraw.redraw()
						else {
							hasBeenResolved = true
							mountRedraw.mount(dom, RouterRoot)
						}
					}
					// There's no understating how much I *wish* I could
					// use `async`/`await` here...
					if (payload.view || typeof payload === "function") {
						payload = {}
						update(localComp)
					}
					else if (payload.onmatch) {
						p.then(function () {
							return payload.onmatch(data.params, path, matchedRoute)
						}).then(update, path === fallbackRoute ? null : reject)
					}
					else update(/* "div" */)
					return
				}
			}

			if (path === fallbackRoute) {
				throw new Error("Could not resolve default route " + fallbackRoute + ".")
			}
			route.set(fallbackRoute, null, {replace: true})
		}
	}

	function fireAsync() {
		if (!scheduled) {
			scheduled = true
			// TODO: just do `mountRedraw.redraw()` here and elide the timer
			// dependency. Note that this will muck with tests a *lot*, so it's
			// not as easy of a change as it sounds.
			setTimeout(resolveRoute)
		}
	}

	function route(root, defaultRoute, routes) {
		if (!root) throw new TypeError("DOM element being rendered to does not exist.")

		compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a '/'.")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		fallbackRoute = defaultRoute
		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes.")
			}
		}
		dom = root

		$window.addEventListener("popstate", fireAsync, false)

		ready = true

		// The RouterRoot component is mounted when the route is first resolved.
		resolveRoute()
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null

		path = buildPathname(path, data)
		if (ready) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			// Omit the used parameters from the rendered element - they are
			// internal. Also, censor the various lifecycle methods.
			//
			// We don't strip the other parameters because for convenience we
			// let them be specified in the selector as well.
			var child = hyperscript(
				vnode.attrs.selector || "a",
				censor(vnode.attrs, ["options", "params", "selector", "onclick"]),
				vnode.children
			)
			var options, onclick, href

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want add `onclick` on a disabled link, use
				// an `oncreate` hook to add it.
			} else {
				options = vnode.attrs.options
				onclick = vnode.attrs.onclick
				// Easier to build it now to keep it isomorphic.
				href = buildPathname(child.attrs.href, vnode.attrs.params)
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/hyperscript.js"
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/hyperscript.js ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./render/hyperscript */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/hyperscript.js")

hyperscript.trust = __webpack_require__(/*! ./render/trust */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/trust.js")
hyperscript.fragment = __webpack_require__(/*! ./render/fragment */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/fragment.js")

module.exports = hyperscript


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js"
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js ***!
  \************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./hyperscript */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/hyperscript.js")
var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/mount-redraw.js")
var request = __webpack_require__(/*! ./request */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/request.js")
var router = __webpack_require__(/*! ./route */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/route.js")

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.Fragment = "["
m.mount = mountRedraw.mount
m.route = router
m.render = __webpack_require__(/*! ./render */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render.js")
m.redraw = mountRedraw.redraw
m.request = request.request
m.parseQueryString = __webpack_require__(/*! ./querystring/parse */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/querystring/parse.js")
m.buildQueryString = __webpack_require__(/*! ./querystring/build */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/querystring/build.js")
m.parsePathname = __webpack_require__(/*! ./pathname/parse */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/parse.js")
m.buildPathname = __webpack_require__(/*! ./pathname/build */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/build.js")
m.vnode = __webpack_require__(/*! ./render/vnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js")
m.censor = __webpack_require__(/*! ./util/censor */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/censor.js")
m.domFor = __webpack_require__(/*! ./render/domFor */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/domFor.js")

module.exports = m


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/mount-redraw.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/mount-redraw.js ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var render = __webpack_require__(/*! ./render */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render.js")

module.exports = __webpack_require__(/*! ./api/mount-redraw */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/api/mount-redraw.js")(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null)


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/build.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/build.js ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var buildQueryString = __webpack_require__(/*! ../querystring/build */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/querystring/build.js")

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	Object.assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/compileTemplate.js"
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/compileTemplate.js ***!
  \*******************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var parsePathname = __webpack_require__(/*! ./parse */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/parse.js")

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "\\/?$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/parse.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/parse.js ***!
  \*********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var parseQueryString = __webpack_require__(/*! ../querystring/parse */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/querystring/parse.js")

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/querystring/build.js"
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/querystring/build.js ***!
  \************************************************************************************/
(module) {

"use strict";


module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/querystring/parse.js"
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/querystring/parse.js ***!
  \************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var decodeURIComponentSafe = __webpack_require__(/*! ../util/decodeURIComponentSafe */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/decodeURIComponentSafe.js")

module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponentSafe(entry[0])
		var value = entry.length === 2 ? decodeURIComponentSafe(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render.js"
/*!*************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render.js ***!
  \*************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./render/render */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/render.js")()


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/cachedAttrsIsStaticMap.js"
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/cachedAttrsIsStaticMap.js ***!
  \************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var emptyAttrs = __webpack_require__(/*! ./emptyAttrs */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/emptyAttrs.js")

// This Map manages the following:
// - Whether an attrs is cached attrs generated by compileSelector().
// - Whether the cached attrs is "static", i.e., does not contain any form attributes.
// These information will be useful to skip updating attrs in render().
//
// Since the attrs used as keys in this map are not released from the selectorCache object,
// there is no risk of memory leaks. Therefore, Map is used here instead of WeakMap.
module.exports = new Map([[emptyAttrs, true]])


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/delayedRemoval.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/delayedRemoval.js ***!
  \****************************************************************************************/
(module) {

"use strict";


module.exports = new WeakMap


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/domFor.js"
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/domFor.js ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var delayedRemoval = __webpack_require__(/*! ./delayedRemoval */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/delayedRemoval.js")

function *domFor(vnode) {
	// To avoid unintended mangling of the internal bundler,
	// parameter destructuring is not used here.
	var dom = vnode.dom
	var domSize = vnode.domSize
	var generation = delayedRemoval.get(dom)
	if (dom != null) do {
		var nextSibling = dom.nextSibling

		if (delayedRemoval.get(dom) === generation) {
			yield dom
			domSize--
		}

		dom = nextSibling
	}
	while (domSize)
}

module.exports = domFor


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/emptyAttrs.js"
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/emptyAttrs.js ***!
  \************************************************************************************/
(module) {

"use strict";


// This is an attrs object that is used by default when attrs is undefined or null.
module.exports = {}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/fragment.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/fragment.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/hyperscriptVnode.js")

module.exports = function(attrs, ...children) {
	var vnode = hyperscriptVnode(attrs, children)

	if (vnode.attrs == null) vnode.attrs = {}
	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/hyperscript.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/hyperscript.js ***!
  \*************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js")
var hyperscriptVnode = __webpack_require__(/*! ./hyperscriptVnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/hyperscriptVnode.js")
var hasOwn = __webpack_require__(/*! ../util/hasOwn */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/hasOwn.js")
var emptyAttrs = __webpack_require__(/*! ./emptyAttrs */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/emptyAttrs.js")
var cachedAttrsIsStaticMap = __webpack_require__(/*! ./cachedAttrsIsStaticMap */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/cachedAttrsIsStaticMap.js")

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = Object.create(null)

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function isFormAttributeKey(key) {
	return key === "value" || key === "checked" || key === "selectedIndex" || key === "selected"
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}, isStatic = true
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else {
				attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
				if (isFormAttributeKey(match[4])) isStatic = false
			}
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	if (isEmpty(attrs)) attrs = emptyAttrs
	else cachedAttrsIsStaticMap.set(attrs, isStatic)
	return selectorCache[selector] = {tag: tag, attrs: attrs, is: attrs.is}
}

function execSelector(state, vnode) {
	vnode.tag = state.tag

	var attrs = vnode.attrs
	if (attrs == null) {
		vnode.attrs = state.attrs
		vnode.is = state.is
		return vnode
	}

	if (hasOwn.call(attrs, "class")) {
		if (attrs.class != null) attrs.className = attrs.class
		attrs.class = null
	}

	if (state.attrs !== emptyAttrs) {
		var className = attrs.className
		attrs = Object.assign({}, state.attrs, attrs)

		if (state.attrs.className != null) attrs.className =
			className != null
				? String(state.attrs.className) + " " + String(className)
				: state.attrs.className
	}

	// workaround for #2622 (reorder keys in attrs to set "type" first)
	// The DOM does things to inputs based on the "type", so it needs set first.
	// See: https://github.com/MithrilJS/mithril.js/issues/2622
	if (state.tag === "input" && hasOwn.call(attrs, "type")) {
		attrs = Object.assign({type: attrs.type}, attrs)
	}

	// This reduces the complexity of the evaluation of "is" within the render function.
	vnode.is = attrs.is

	vnode.attrs = attrs

	return vnode
}

function hyperscript(selector, attrs, ...children) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode(attrs, children)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	if (vnode.attrs == null) vnode.attrs = {}
	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/hyperscriptVnode.js"
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/hyperscriptVnode.js ***!
  \******************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js")

// Note: the processing of variadic parameters is perf-sensitive.
//
// In native ES6, it might be preferable to define hyperscript and fragment
// factories with a final ...args parameter and call hyperscriptVnode(...args),
// since modern engines can optimize spread calls.
//
// However, benchmarks showed this was not faster. As a result, spread is used
// only in the parameter lists of hyperscript and fragment, while an array is
// passed to hyperscriptVnode.
module.exports = function(attrs, children) {
	if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
		if (children.length === 1 && Array.isArray(children[0])) children = children[0]
	} else {
		children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
		attrs = undefined
	}

	return Vnode("", attrs && attrs.key, attrs, children)
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/render.js"
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/render.js ***!
  \********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ./vnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js")
var delayedRemoval = __webpack_require__(/*! ./delayedRemoval */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/delayedRemoval.js")
var domFor = __webpack_require__(/*! ./domFor */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/domFor.js")
var cachedAttrsIsStaticMap = __webpack_require__(/*! ./cachedAttrsIsStaticMap */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/cachedAttrsIsStaticMap.js")

module.exports = function() {
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	var currentRedraw
	var currentRender

	function getDocument(dom) {
		return dom.ownerDocument;
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("'vnode.state' must not be modified.")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement(dom) {
		try {
			return getDocument(dom).activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = getDocument(parent).createTextNode(vnode.children)
		insertDOM(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = getDocument(parent).createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = getDocument(parent).createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertDOM(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = getDocument(parent).createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertDOM(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = vnode.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? getDocument(parent).createElementNS(ns, tag, {is: is}) : getDocument(parent).createElementNS(ns, tag) :
			is ? getDocument(parent).createElement(tag, {is: is}) : getDocument(parent).createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertDOM(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveDOM(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveDOM(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveDOM(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag && old.is === vnode.is) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeDOM(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
		}
		vnode.domSize = domSize
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (old.attrs != vnode.attrs || (vnode.attrs != null && !cachedAttrsIsStaticMap.get(vnode.attrs))) {
			updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		}
		if (!maybeSetContentEditable(vnode)) {
			updateNodes(element, old.children, vnode.children, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else {
			if (old.instance != null) removeNode(parent, old.instance)
			vnode.domSize = 0
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequence
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This handles fragments with zombie children (removed from vdom, but persisted in DOM through onbeforeremove)
	function moveDOM(parent, vnode, nextSibling) {
		if (vnode.dom != null) {
			var target
			if (vnode.domSize == null || vnode.domSize === 1) {
				// don't allocate for the common case
				target = vnode.dom
			} else {
				target = getDocument(parent).createDocumentFragment()
				for (var dom of domFor(vnode)) target.appendChild(dom)
			}
			insertDOM(parent, target, nextSibling)
		}
	}

	function insertDOM(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted.")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function tryBlockRemove(parent, vnode, source, counter) {
		var original = vnode.state
		var result = callHook.call(source.onbeforeremove, vnode)
		if (result == null) return

		var generation = currentRender
		for (var dom of domFor(vnode)) delayedRemoval.set(dom, generation)
		counter.v++

		Promise.resolve(result).finally(function () {
			checkState(vnode, original)
			tryResumeRemove(parent, vnode, counter)
		})
	}
	function tryResumeRemove(parent, vnode, counter) {
		if (--counter.v === 0) {
			onremove(vnode)
			removeDOM(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var counter = {v: 1}
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") tryBlockRemove(parent, vnode, vnode.state, counter)
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") tryBlockRemove(parent, vnode, vnode.attrs, counter)
		tryResumeRemove(parent, vnode, counter)
	}
	function removeDOM(parent, vnode) {
		if (vnode.dom == null) return
		if (vnode.domSize == null || vnode.domSize === 1) {
			parent.removeChild(vnode.dom)
		} else {
			for (var dom of domFor(vnode)) parent.removeChild(dom)
		}
	}

	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			if (vnode.events != null) vnode.events._ = null
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns)
		}
	}
	function setAttr(vnode, key, old, value, ns) {
		if (key === "key" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				//setting input[type=file][value] to same value causes an error to be generated if it's non-empty
				//minlength/maxlength validation isn't performed on script-set values(#2256)
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				//setting input[type=file][value] to different value is an error if it's non-empty
				// Not ideal, but it at least works around the most common source of uncaught exceptions for now.
				if (vnode.tag === "input" && vnode.attrs.type === "file" && "" + value !== "") { console.error("`value` is read-only on file inputs!"); return }
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value)
			else vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n") updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& key !== "title" // creates "null" as title
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement(vnode.dom)
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		// Some attributes may NOT be case-sensitive (e.g. data-***),
		// so removal should be done first to prevent accidental removal for newly setting values.
		var val
		if (old != null) {
			if (old === attrs && !cachedAttrsIsStaticMap.has(attrs)) {
				console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
			}
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
		if (attrs != null) {
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns)
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && (vnode.dom === activeElement(vnode.dom) || vnode.tag === "option" && vnode.dom.parentNode === activeElement(vnode.dom))
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) {
					if (key.includes("-")) element.style.setProperty(key, String(value))
					else element.style[key] = String(value)
				}
			}
		} else {
			// Both old & new are (different) objects.
			// Remove style properties that no longer exist
			// Style properties may have two cases(dash-case and camelCase),
			// so removal should be done first to prevent accidental removal for newly setting values.
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					if (key.includes("-")) element.style.removeProperty(key)
					else element.style[key] = ""
				}
			}
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					if (key.includes("-")) element.style.setProperty(key, value)
					else element.style[key] = value
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		var self = this
		if (self._ != null) {
			if (ev.redraw !== false) (0, self._)()
			if (result != null && typeof result.then === "function") {
				Promise.resolve(result).then(function () {
					if (self._ != null && ev.redraw !== false) (0, self._)()
				})
			}
		}
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			vnode.events._ = currentRedraw
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	var currentDOM

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("DOM element being rendered to does not exist.")
		if (currentDOM != null && dom.contains(currentDOM)) {
			throw new TypeError("Node is currently being rendered to and thus is locked.")
		}
		var prevRedraw = currentRedraw
		var prevDOM = currentDOM
		var hooks = []
		var active = activeElement(dom)
		var namespace = dom.namespaceURI

		currentDOM = dom
		currentRedraw = typeof redraw === "function" ? redraw : undefined
		currentRender = {}
		try {
			// First time rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = ""
			vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
			dom.vnodes = vnodes
			// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
			if (active != null && activeElement(dom) !== active && typeof active.focus === "function") active.focus()
			for (var i = 0; i < hooks.length; i++) hooks[i]()
		} finally {
			currentRedraw = prevRedraw
			currentDOM = prevDOM
		}
	}
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/trust.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/trust.js ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js")

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/render/vnode.js ***!
  \*******************************************************************************/
(module) {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, is: undefined, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	// Preallocate the array length (initially holey) and fill every index immediately in order.
	// Benchmarking shows better performance on V8.
	var children = new Array(input.length)
	// Count the number of keyed normalized vnodes for consistency check.
	// Note: this is a perf-sensitive check.
	// Fun fact: merging the loop like this is somehow faster than splitting
	// the check within updateNodes(), noticeably so.
	var numKeyed = 0
	for (var i = 0; i < input.length; i++) {
		children[i] = Vnode.normalize(input[i])
		if (children[i] !== null && children[i].key != null) numKeyed++
	}
	if (numKeyed !== 0 && numKeyed !== input.length) {
		throw new TypeError(children.includes(null)
			? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole."
			: "In fragments, vnodes must either all have keys or none have keys."
		)
	}
	return children
}

module.exports = Vnode


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/request.js"
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/request.js ***!
  \**************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./request/request */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/request/request.js")(typeof window !== "undefined" ? window : null, mountRedraw.redraw)


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/request/request.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/request/request.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var buildPathname = __webpack_require__(/*! ../pathname/build */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/pathname/build.js")
var hasOwn = __webpack_require__(/*! ../util/hasOwn */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/hasOwn.js")

module.exports = function($window, oncompletion) {
	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	function makeRequest(url, args) {
		return new Promise(function(resolve, reject) {
			url = buildPathname(url, args.params)
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false, isTimeout = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, "content-type")) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, "accept")) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if (hasOwn.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") {
								// Handle no-content which will not parse.
								try { response = JSON.parse(ev.target.responseText) }
								catch (e) { response = null }
							}
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}

						if (success) {
							if (typeof args.type === "function") {
								if (Array.isArray(response)) {
									for (var i = 0; i < response.length; i++) {
										response[i] = new args.type(response[i])
									}
								}
								else response = new args.type(response)
							}
							resolve(response)
						}
						else {
							var completeErrorResponse = function() {
								try { message = ev.target.responseText }
								catch (e) { message = response }
								var error = new Error(message)
								error.code = ev.target.status
								error.response = response
								reject(error)
							}

							if (xhr.status === 0) {
								// Use setTimeout to push this code block onto the event queue
								// This allows `xhr.ontimeout` to run in the case that there is a timeout
								// Without this setTimeout, `xhr.ontimeout` doesn't have a chance to reject
								// as `xhr.onreadystatechange` will run before it
								setTimeout(function() {
									if (isTimeout) return
									completeErrorResponse()
								})
							} else completeErrorResponse()
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			xhr.ontimeout = function (ev) {
				isTimeout = true
				var error = new Error("Request timed out")
				error.code = ev.target.status
				reject(error)
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		})
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if (hasOwn.call(args.headers, key) && key.toLowerCase() === name) return true
		}
		return false
	}

	return {
		request: function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = makeRequest(url, args)
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/route.js"
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/route.js ***!
  \************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var mountRedraw = __webpack_require__(/*! ./mount-redraw */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/mount-redraw.js")

module.exports = __webpack_require__(/*! ./api/router */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/api/router.js")(typeof window !== "undefined" ? window : null, mountRedraw)


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/censor.js"
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/censor.js ***!
  \******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


// Note: this is mildly perf-sensitive.
//
// It does *not* use `delete` - dynamic `delete`s usually cause objects to bail
// out into dictionary mode and just generally cause a bunch of optimization
// issues within engines.
//
// Ideally, I would've preferred to do this, if it weren't for the optimization
// issues:
//
// ```js
// const hasOwn = require("./hasOwn")
// const magic = [
//     "key", "oninit", "oncreate", "onbeforeupdate", "onupdate",
//     "onbeforeremove", "onremove",
// ]
// module.exports = (attrs, extras) => {
//     const result = Object.assign(Object.create(null), attrs)
//     for (const key of magic) delete result[key]
//     if (extras != null) for (const key of extras) delete result[key]
//     return result
// }
// ```

var hasOwn = __webpack_require__(/*! ./hasOwn */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/hasOwn.js")
var magic = /^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$/

module.exports = function(attrs, extras) {
	var result = {}

	if (extras != null) {
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) {
				result[key] = attrs[key]
			}
		}
	} else {
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && !magic.test(key)) {
				result[key] = attrs[key]
			}
		}
	}

	return result
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/decodeURIComponentSafe.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/decodeURIComponentSafe.js ***!
  \**********************************************************************************************/
(module) {

"use strict";


/*
Percent encodings encode UTF-8 bytes, so this regexp needs to match that.
Here's how UTF-8 encodes stuff:
- `00-7F`: 1-byte, for U+0000-U+007F
- `C2-DF 80-BF`: 2-byte, for U+0080-U+07FF
- `E0-EF 80-BF 80-BF`: 3-byte, encodes U+0800-U+FFFF
- `F0-F4 80-BF 80-BF 80-BF`: 4-byte, encodes U+10000-U+10FFFF
In this, there's a number of invalid byte sequences:
- `80-BF`: Continuation byte, invalid as start
- `C0-C1 80-BF`: Overlong encoding for U+0000-U+007F
- `E0 80-9F 80-BF`: Overlong encoding for U+0080-U+07FF
- `ED A0-BF 80-BF`: Encoding for UTF-16 surrogate U+D800-U+DFFF
- `F0 80-8F 80-BF 80-BF`: Overlong encoding for U+0800-U+FFFF
- `F4 90-BF`: RFC 3629 restricted UTF-8 to only code points UTF-16 could encode.
- `F5-FF`: RFC 3629 restricted UTF-8 to only code points UTF-16 could encode.
So in reality, only the following sequences can encode are valid characters:
- 00-7F
- C2-DF 80-BF
- E0    A0-BF 80-BF
- E1-EC 80-BF 80-BF
- ED    80-9F 80-BF
- EE-EF 80-BF 80-BF
- F0    90-BF 80-BF 80-BF
- F1-F3 80-BF 80-BF 80-BF
- F4    80-8F 80-BF 80-BF

The regexp just tries to match this as compactly as possible.
*/
var validUtf8Encodings = /%(?:[0-7]|(?!c[01]|e0%[89]|ed%[ab]|f0%8|f4%[9ab])(?:c|d|(?:e|f[0-4]%[89ab])[\da-f]%[89ab])[\da-f]%[89ab])[\da-f]/gi

module.exports = function(str) {
	return String(str).replace(validUtf8Encodings, decodeURIComponent)
}


/***/ },

/***/ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/hasOwn.js"
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/util/hasOwn.js ***!
  \******************************************************************************/
(module) {

"use strict";
// This exists so I'm only saving it once.


module.exports = {}.hasOwnProperty


/***/ },

/***/ "./node_modules/.pnpm/preact@10.29.8/node_modules/preact/dist/preact.module.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/preact@10.29.8/node_modules/preact/dist/preact.module.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ C),
/* harmony export */   Fragment: () => (/* binding */ S),
/* harmony export */   cloneElement: () => (/* binding */ W),
/* harmony export */   createContext: () => (/* binding */ X),
/* harmony export */   createElement: () => (/* binding */ k),
/* harmony export */   createRef: () => (/* binding */ M),
/* harmony export */   h: () => (/* binding */ k),
/* harmony export */   hydrate: () => (/* binding */ U),
/* harmony export */   isValidElement: () => (/* binding */ t),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ R),
/* harmony export */   toChildArray: () => (/* binding */ F)
/* harmony export */ });
var n,l,u,t,i,r,o,e,f,c,a,s,h,p,v,y,d={},w=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,g=Array.isArray;function m(n,l){for(var u in l)n[u]=l[u];return n}function b(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function k(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===e[o]&&(e[o]=l.defaultProps[o]);return x(l,e,i,r,null)}function x(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u:o,__i:-1,__u:0};return null==o&&null!=l.vnode&&l.vnode(e),e}function M(){return{current:null}}function S(n){return n.children}function C(n,l){this.props=n,this.context=l}function $(n,l){if(null==l)return n.__?$(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?$(n):null}function I(n){if(n.__P&&n.__d){var u=n.__v,t=u.__e,i=[],r=[],o=m({},u);o.__v=u.__v+1,l.vnode&&l.vnode(o),q(n.__P,o,u,n.__n,n.__P.namespaceURI,32&u.__u?[t]:null,i,null==t?$(u):t,!!(32&u.__u),r),o.__v=u.__v,o.__.__k[o.__i]=o,D(i,o,r),u.__e=u.__=null,o.__e!=t&&P(o)}}function P(n){if(null!=(n=n.__)&&null!=n.__c)return n.__e=n.__c.base=null,n.__k.some(function(l){if(null!=l&&null!=l.__e)return n.__e=n.__c.base=l.__e}),P(n)}function A(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!H.__r++||r!=l.debounceRendering)&&((r=l.debounceRendering)||o)(H)}function H(){try{for(var n,l=1;i.length;)i.length>l&&i.sort(e),n=i.shift(),l=i.length,I(n)}finally{i.length=H.__r=0}}function L(n,l,u,t,i,r,o,e,f,c,a){var s,h,p,v,y,_,g=t&&t.__k||w,m=l.length;for(f=T(u,l,g,f,m),s=0;s<m;s++)null!=(p=u.__k[s])&&(h=-1!=p.__i&&g[p.__i]||d,p.__i=s,_=q(n,p,h,i,r,o,e,f,c,a),v=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&J(h.ref,null,p),a.push(p.ref,p.__c||v,p)),null==y&&null!=v&&(y=v),4&p.__u?(f=j(p,f,n),h.__e&&(h.__e=null)):"function"==typeof p.type&&void 0!==_?f=_:v&&(f=v.nextSibling),p.__u&=-7);return u.__e=y,f}function T(n,l,u,t,i){var r,o,e,f,c,a=u.length,s=a,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=n.__k[r]=x(null,o,null,null,null):g(o)?o=n.__k[r]=x(S,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?o=n.__k[r]=x(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,f=r+h,o.__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=O(o,u,f,s))&&(s--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>a?h--:i<a&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(s)for(r=0;r<a;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=$(e)),K(e,e));return t}function j(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=j(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!l.parentNode&&(l=$(n)),l=u.insertBefore(n.__e,l||null));do{l=l&&l.nextSibling}while(null!=l&&8==l.nodeType);return l}function F(n,l){return l=l||[],null==n||"boolean"==typeof n||(g(n)?n.some(function(n){F(n,l)}):l.push(n)),l}function O(n,l,u,t){var i,r,o,e=n.key,f=n.type,c=l[u],a=null!=c&&0==(2&c.__u);if(null===c&&null==e||a&&e==c.key&&f==c.type)return u;if(t>(a?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;)if(null!=(c=l[o=i>=0?i--:r++])&&0==(2&c.__u)&&e==c.key&&f==c.type)return o;return-1}function z(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||_.test(l)?u:u+"px"}function N(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||z(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||z(n.style,l,u[l])}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(s,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u[a]=t[a]:(u[a]=h,n.addEventListener(l,r?v:p,r)):n.removeEventListener(l,r?v:p,r);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function V(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u[c])u[c]=h++;else if(u[c]<t[a])return;return t(l.event?l.event(u):u)}}}function q(n,u,t,i,r,o,e,f,c,a){var s,h,p,v,y,d,_,k,x,M,I,P,A,H,T,j,F=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(s=l.__b)&&s(u);n:if("function"==typeof F){h=e.length;try{if(x=u.props,M=F.prototype&&F.prototype.render,I=(s=F.contextType)&&i[s.__c],P=s?I?I.props.value:s.__:i,t.__c?k=(p=u.__c=t.__c).__=p.__E:(M?u.__c=p=new F(x,P):(u.__c=p=new C(x,P),p.constructor=F,p.render=Q),I&&I.sub(p),p.state||(p.state={}),p.__n=i,v=p.__d=!0,p.__h=[],p._sb=[]),M&&null==p.__s&&(p.__s=p.state),M&&null!=F.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=m({},p.__s)),m(p.__s,F.getDerivedStateFromProps(x,p.__s))),y=p.props,d=p.state,p.__v=u,v)M&&null==F.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),M&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(M&&null==F.getDerivedStateFromProps&&x!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(x,P),u.__v==t.__v||!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(x,p.__s,P)){u.__v!=t.__v&&(p.props=x,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),w.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&e.push(p),f=$(t);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(x,p.__s,P),M&&null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(y,d,_)})}if(p.context=P,p.props=x,p.__P=n,p.__e=!1,A=l.__r,H=0,M)p.state=p.__s,p.__d=!1,A&&A(u),s=p.render(p.props,p.state,p.context),w.push.apply(p.__h,p._sb),p._sb=[];else do{p.__d=!1,A&&A(u),s=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++H<25);p.state=p.__s,null!=p.getChildContext&&(i=m(m({},i),p.getChildContext())),M&&!v&&null!=p.getSnapshotBeforeUpdate&&(_=p.getSnapshotBeforeUpdate(y,d)),T=null!=s&&s.type===S&&null==s.key?E(s.props.children):s,f=L(n,g(T)?T:[T],u,t,i,r,o,e,f,c,a),p.base=u.__e,u.__u&=-161,p.__h.length&&e.push(p),k&&(p.__E=p.__=null)}catch(n){if(e.length=h,u.__v=null,c||null!=o){if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;null!=o&&(o[o.indexOf(f)]=null),u.__e=f}else if(null!=o)for(j=o.length;j--;)b(o[j])}else u.__e=t.__e;null==u.__k&&(u.__k=t.__k||[]),n.then||B(u),l.__e(n,u,t)}}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=G(t.__e,u,t,i,r,o,e,c,a);return(s=l.diffed)&&s(u),128&u.__u?void 0:f}function B(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(B))}function D(n,u,t){for(var i=0;i<t.length;i++)J(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function E(n){return"object"!=typeof n||null==n||n.__b>0?n:g(n)?n.map(E):void 0!==n.constructor?null:m({},n)}function G(u,t,i,r,o,e,f,c,a){var s,h,p,v,y,w,_,m=i.props||d,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(s=0;s<e.length;s++)if((y=e[s])&&"setAttribute"in y==!!x&&(x?y.localName==x:3==y.nodeType)){u=y,e[s]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l.__m&&l.__m(t,e),c=!1),e=null}if(null==x)m===k||c&&u.data==k||(u.data=k);else{if(e="textarea"==x&&null!=k.defaultValue?null:e&&n.call(u.childNodes),!c&&null!=e)for(m={},s=0;s<u.attributes.length;s++)m[(y=u.attributes[s]).name]=y.value;for(s in m)y=m[s],"dangerouslySetInnerHTML"==s?p=y:"children"==s||s in k||"value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k||N(u,s,null,y,o);for(s in k)y=k[s],"children"==s?v=y:"dangerouslySetInnerHTML"==s?h=y:"value"==s?w=y:"checked"==s?_=y:c&&"function"!=typeof y||m[s]===y||N(u,s,y,m[s],o);if(h)c||p&&(h.__html==p.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(p&&(u.innerHTML=""),L("template"==t.type?u.content:u,g(v)?v:[v],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&$(i,0),c,a),null!=e)for(s=e.length;s--;)b(e[s]);c&&"textarea"!=x||(s="value","progress"==x&&null==w?u.removeAttribute("value"):null!=w&&(w!==u[s]||"progress"==x&&!w||"option"==x&&w!=m[s])&&N(u,s,w,m[s],o),s="checked",null!=_&&_!=u[s]&&N(u,s,_,m[s],o))}return u}function J(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function K(n,u,t){var i,r;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||J(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=i.__n=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&K(i[r],u,t||"function"!=typeof n.type);t||b(n.__e),n.__c=n.__=n.__e=void 0}function Q(n,l,u){return this.constructor(n,u)}function R(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l.__&&l.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],q(t,u=(!r&&i||t).__k=k(S,null,[u]),o||d,d,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?n.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),D(e,u,f),u.props.children=null}function U(n,l){R(n,l,U)}function W(l,u,t){var i,r,o,e,f=m({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&null!=e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),x(l.type,f,i||l.key,r||l.ref,null)}function X(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!=n.value&&u.forEach(function(n){n.__e=!0,A(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}return l.__c="__cC"+y++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}n=w.slice,l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&void 0===n.constructor},C.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=m({},this.state),"function"==typeof n&&(n=n(m({},u),this.props)),n&&m(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),A(this))},C.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),A(this))},C.prototype.render=S,i=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e=function(n,l){return n.__v.__b-l.__v.__b},H.__r=0,f=Math.random().toString(8),c="__d"+f,a="__a"+f,s=/(PointerCapture)$|Capture$/i,h=0,p=V(!1),v=V(!0),y=0;
//# sourceMappingURL=preact.module.js.map


/***/ },

/***/ "./node_modules/.pnpm/preact@10.29.8/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/preact@10.29.8/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   jsx: () => (/* binding */ u),
/* harmony export */   jsxAttr: () => (/* binding */ l),
/* harmony export */   jsxDEV: () => (/* binding */ u),
/* harmony export */   jsxEscape: () => (/* binding */ s),
/* harmony export */   jsxTemplate: () => (/* binding */ a),
/* harmony export */   jsxs: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/.pnpm/preact@10.29.8/node_modules/preact/dist/preact.module.js");
var t=/["&<]/;function n(r){if(0===r.length||!1===t.test(r))return r;for(var e=0,n=0,o="",f="";n<r.length;n++){switch(r.charCodeAt(n)){case 34:f="&quot;";break;case 38:f="&amp;";break;case 60:f="&lt;";break;default:continue}n!==e&&(o+=r.slice(e,n)),o+=f,e=n+1}return n!==e&&(o+=r.slice(e,n)),o}var o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=0,i=Array.isArray;function u(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(l),l}function a(r){var t=u(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,{tpl:r,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var c={},p=/[A-Z]/g;function l(e,t){if(preact__WEBPACK_IMPORTED_MODULE_0__.options.attr){var f=preact__WEBPACK_IMPORTED_MODULE_0__.options.attr(e,t);if("string"==typeof f)return f}if(t=function(r){return null!==r&&"object"==typeof r&&"function"==typeof r.valueOf?r.valueOf():r}(t),"ref"===e||"key"===e)return"";if("style"===e&&"object"==typeof t){var i="";for(var u in t){var a=t[u];if(null!=a&&""!==a){var l="-"==u[0]?u:c[u]||(c[u]=u.replace(p,"-$&").toLowerCase()),s=";";"number"!=typeof a||l.startsWith("--")||o.test(l)||(s="px;"),i=i+l+":"+a+s}}return e+'="'+n(i)+'"'}return null==t||!1===t||"function"==typeof t||"object"==typeof t?"":!0===t?e:e+'="'+n(""+t)+'"'}function s(r){if(null==r||"boolean"==typeof r||"function"==typeof r)return null;if("object"==typeof r){if(void 0===r.constructor)return r;if(i(r)){for(var e=0;e<r.length;e++)r[e]=s(r[e]);return r}}return n(""+r)}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ },

/***/ "./node_modules/.pnpm/punycode@2.3.1/node_modules/punycode/punycode.es6.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/punycode@2.3.1/node_modules/punycode/punycode.es6.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./src/options/ProxyForm/ProxyForm.module.scss"
/*!*****************************************************!*\
  !*** ./src/options/ProxyForm/ProxyForm.module.scss ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/css-modules-typescript-loader@4.0.1/node_modules/css-modules-typescript-loader/index.js!../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/.pnpm/sass-loader@12.6.0_sass@1.105.0_webpack@5.111.1/node_modules/sass-loader/dist/cjs.js!./ProxyForm.module.scss */ "./node_modules/.pnpm/css-modules-typescript-loader@4.0.1/node_modules/css-modules-typescript-loader/index.js!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.105.0_webpack@5.111.1/node_modules/sass-loader/dist/cjs.js!./src/options/ProxyForm/ProxyForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/options/nav/Navigation.module.scss"
/*!************************************************!*\
  !*** ./src/options/nav/Navigation.module.scss ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/css-modules-typescript-loader@4.0.1/node_modules/css-modules-typescript-loader/index.js!../../../node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../node_modules/.pnpm/sass-loader@12.6.0_sass@1.105.0_webpack@5.111.1/node_modules/sass-loader/dist/cjs.js!./Navigation.module.scss */ "./node_modules/.pnpm/css-modules-typescript-loader@4.0.1/node_modules/css-modules-typescript-loader/index.js!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.111.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/sass-loader@12.6.0_sass@1.105.0_webpack@5.111.1/node_modules/sass-loader/dist/cjs.js!./src/options/nav/Navigation.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_3_3_4_webpack_5_111_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_modules_typescript_loader_4_0_1_node_modules_css_modules_typescript_loader_index_js_node_modules_pnpm_css_loader_6_11_0_webpack_5_111_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_sass_loader_12_6_0_sass_1_105_0_webpack_5_111_1_node_modules_sass_loader_dist_cjs_js_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \**************************************************************************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \****************************************************************************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \****************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*********************************************************************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.4_webpack@5.111.1/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \***************************************************************************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/domain/ProxySettings.ts"
/*!*************************************!*\
  !*** ./src/domain/ProxySettings.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/options/ContainerListView.ts"
/*!******************************************!*\
  !*** ./src/options/ContainerListView.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerListView: () => (/* binding */ ContainerListView)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

class ContainerListModel {
    constructor() {
        this.containers = [];
        this.proxies = [];
        this.proxiesById = {};
        this.relations = new Map();
        this.enableIncognito = false;
    }
    async loadAll() {
        var _a;
        this.containers = await browser.contextualIdentities.query({});
        const store = window.store;
        this.proxies = await store.getAllProxies();
        this.proxies.forEach(p => {
            this.proxiesById[p.id] = p;
        });
        const result = await browser.storage.local.get('relations');
        this.relations = new Map(Object.entries((_a = result.relations) !== null && _a !== void 0 ? _a : {}));
        this.enableIncognito = await browser.extension.isAllowedIncognitoAccess();
        mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
    }
    async saveRelations() {
        await browser.storage.local.set({ relations: Object.fromEntries(this.relations) });
    }
}
class ContainerListView {
    constructor() {
        this.model = new ContainerListModel();
    }
    async oninit() {
        await this.model.loadAll();
        mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
    }
    view() {
        if (this.model.containers === undefined) {
            return null;
        }
        const items = this.model.containers.map((i) => this.renderContainerItem(i));
        const defaultContainer = this.renderContainerItem({
            cookieStoreId: 'firefox-default',
            name: browser.i18n.getMessage('ContainerList_defaultContainerName'),
            color: '',
            colorCode: '',
            icon: 'default',
            iconUrl: ''
        });
        const privateContainer = this.model.enableIncognito ? this.renderContainerItem({
            cookieStoreId: 'firefox-private',
            name: browser.i18n.getMessage('ContainerList_privateBrowsingContainerName'),
            color: '',
            colorCode: '',
            icon: 'private-browsing',
            iconUrl: ''
        }) : [];
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.containers', [...items, defaultContainer, privateContainer]);
    }
    renderSelectProxy(cookieStoreId, proxyId) {
        const proxyOptions = this.model.proxies.map(p => mithril__WEBPACK_IMPORTED_MODULE_0___default()('option', {
            value: p.id,
            selected: p.id === proxyId
        }, p.title !== '' ? p.title : p.url));
        const defaultOption = mithril__WEBPACK_IMPORTED_MODULE_0___default()('option', {
            value: '',
            selected: proxyId === ''
        }, browser.i18n.getMessage('ContainerList_proxyDisabled'));
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('select', {
            oninput: async (e) => {
                const proxyId = e.target.value;
                if (proxyId === '') {
                    this.model.relations.delete(cookieStoreId);
                }
                else {
                    this.model.relations.set(cookieStoreId, [proxyId]);
                }
                await this.model.saveRelations();
            }
        }, [defaultOption, ...proxyOptions]);
    }
    renderContainerItem(container) {
        var _a;
        const proxies = (_a = this.model.relations.get(container.cookieStoreId)) !== null && _a !== void 0 ? _a : [];
        const classes = `identity-color-${container.color} identity-icon-${container.icon}`;
        const icon = mithril__WEBPACK_IMPORTED_MODULE_0___default()('.container-icon');
        const name = mithril__WEBPACK_IMPORTED_MODULE_0___default()('.container-name', container.name);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.container-item', { class: classes }, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('.container-label', [icon, name]),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('.attached-proxies', [
                this.renderSelectProxy(container.cookieStoreId, proxies[0])
            ])
        ]);
    }
}


/***/ },

/***/ "./src/options/Layout.ts"
/*!*******************************!*\
  !*** ./src/options/Layout.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Layout: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/Navigation */ "./src/options/nav/Navigation.ts");


class Layout {
    view(vnode) {
        const title = mithril__WEBPACK_IMPORTED_MODULE_0___default()('h1', browser.runtime.getManifest().name);
        const desc = mithril__WEBPACK_IMPORTED_MODULE_0___default()('p.header-description', browser.i18n.getMessage('General_extensionDescription'));
        const logo = mithril__WEBPACK_IMPORTED_MODULE_0___default()('.logo');
        const headerText = mithril__WEBPACK_IMPORTED_MODULE_0___default()('.header-text', [title, desc]);
        const header = mithril__WEBPACK_IMPORTED_MODULE_0___default()('header', [logo, headerText]);
        const main = mithril__WEBPACK_IMPORTED_MODULE_0___default()('main', [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(_nav_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"]),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('section.content', vnode.children)
        ]);
        return [header, main];
    }
}


/***/ },

/***/ "./src/options/MithrilPreactAdapter.tsx"
/*!**********************************************!*\
  !*** ./src/options/MithrilPreactAdapter.tsx ***!
  \**********************************************/
() {

throw new Error("Module build failed (from ./node_modules/.pnpm/ts-loader@9.6.2_loader-utils@2.0.4_typescript@4.9.5_webpack@5.111.1/node_modules/ts-loader/index.js):\nError: TypeScript emitted no output for /workspaces/firefox-container-proxy/src/options/MithrilPreactAdapter.tsx.\n    at makeSourceMapAndFinish (./node_modules/.pnpm/ts-loader@9.6.2_loader-utils@2.0.4_typescript@4.9.5_webpack@5.111.1/node_modules/ts-loader/dist/index.js:98:18)\n    at successLoader (./node_modules/.pnpm/ts-loader@9.6.2_loader-utils@2.0.4_typescript@4.9.5_webpack@5.111.1/node_modules/ts-loader/dist/index.js:85:5)\n    at Object.loader (./node_modules/.pnpm/ts-loader@9.6.2_loader-utils@2.0.4_typescript@4.9.5_webpack@5.111.1/node_modules/ts-loader/dist/index.js:66:5)");

/***/ },

/***/ "./src/options/ProxyForm/HostInput.ts"
/*!********************************************!*\
  !*** ./src/options/ProxyForm/HostInput.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HostInput)
/* harmony export */ });
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../predicates */ "./src/options/predicates.ts");
/* harmony import */ var _ui_components_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui-components/inputs */ "./src/options/ui-components/inputs.ts");


class HostInput extends _ui_components_inputs__WEBPACK_IMPORTED_MODULE_1__.TrimmedTextInput {
    checkForError(v) {
        const isIPv4 = (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isIpV4Address)(v);
        const isIPv6 = (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isIpV6Address)(v);
        const isDomain = (0,_predicates__WEBPACK_IMPORTED_MODULE_0__.isDomainName)(v);
        if (!isIPv4 && !isIPv6 && !isDomain) {
            return browser.i18n.getMessage('ProxyForm_incorrectServerError');
        }
        return null;
    }
}


/***/ },

/***/ "./src/options/ProxyForm/PortInput.ts"
/*!********************************************!*\
  !*** ./src/options/ProxyForm/PortInput.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortNumberInput)
/* harmony export */ });
/* harmony import */ var _ui_components_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui-components/inputs */ "./src/options/ui-components/inputs.ts");

class PortNumberInput extends _ui_components_inputs__WEBPACK_IMPORTED_MODULE_0__.BaseInput {
    constructor(props) {
        super(props);
        this.min = 1;
        this.max = 65535;
        this.props = { min: this.min, max: this.max };
    }
    get type() {
        return 'number';
    }
    extractValueFromEvent(event) {
        var _a;
        const value = event.target.value;
        return (_a = Number.parseInt(value, 10)) !== null && _a !== void 0 ? _a : this.min;
    }
    normalizeValue(value) {
        let result = value;
        if (result < this.min) {
            result = this.min;
        }
        else if (result > this.max) {
            result = this.max;
        }
        return result;
    }
}


/***/ },

/***/ "./src/options/ProxyForm/ProxyForm.ts"
/*!********************************************!*\
  !*** ./src/options/ProxyForm/ProxyForm.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProxyForm)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/options/util.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/options/constants.ts");
/* harmony import */ var _testProxySettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testProxySettings */ "./src/options/ProxyForm/testProxySettings.ts");
/* harmony import */ var _ui_components_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui-components/inputs */ "./src/options/ui-components/inputs.ts");
/* harmony import */ var _PortInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PortInput */ "./src/options/ProxyForm/PortInput.ts");
/* harmony import */ var _HostInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HostInput */ "./src/options/ProxyForm/HostInput.ts");
/* harmony import */ var _TestResultBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TestResultBlock */ "./src/options/ProxyForm/TestResultBlock.ts");
/* harmony import */ var _ui_components_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui-components/Select */ "./src/options/ui-components/Select.ts");
/* harmony import */ var _domain_ProxySettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domain/ProxySettings */ "./src/domain/ProxySettings.ts");
/* harmony import */ var _domain_ProxyType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../domain/ProxyType */ "./src/domain/ProxyType.ts");
/* harmony import */ var _domain_proxyPatterns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../domain/proxyPatterns */ "./src/domain/proxyPatterns.ts");
/* harmony import */ var _ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProxyForm.module.scss */ "./src/options/ProxyForm/ProxyForm.module.scss");










var tryFromDao = _domain_ProxySettings__WEBPACK_IMPORTED_MODULE_9__.ProxySettings.tryFromDao;



const t = browser.i18n.getMessage;
const tid = (s) => ({ 'data-testid': s });
const NEW_PROXY = {
    id: 'new',
    title: '',
    type: '',
    host: '',
    port: 1080,
    username: '',
    password: '',
    proxyDNS: true,
    doNotProxyLocal: true,
    includePatterns: []
};
class ProxyModel {
    constructor() {
        this.current = { ...NEW_PROXY };
    }
    async load(id) {
        var _a;
        const newProxy = { ...NEW_PROXY };
        if (id === 'new') {
            this.current = newProxy;
            mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
            return;
        }
        const store = window.store;
        const settings = await store.getProxyById(id);
        if (settings !== null) {
            this.current = { ...NEW_PROXY, ...settings.asDao(), includePatterns: (_a = settings.asDao().includePatterns) !== null && _a !== void 0 ? _a : [] };
        }
        else {
            this.current = newProxy;
        }
        mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
    }
    async save() {
        if (this.current.id === 'new') {
            this.current.id = (0,_util__WEBPACK_IMPORTED_MODULE_1__.uuidv4)();
        }
        const store = window.store;
        const settings = tryFromDao(this.current);
        if (settings === undefined) {
            return false;
        }
        else {
            await store.putProxy(settings);
            return true;
        }
    }
    accessProperty(property) {
        return {
            getValue: () => this.current[property],
            setValue: (v) => {
                this.current[property] = v;
            },
            ...tid(property)
        };
    }
    getSettings() {
        const { type, host, port, username, password } = this.current;
        return { type, host, port, username, password };
    }
    async testSettings() {
        const settings = this.getSettings();
        if (settings.type === 'http') {
            alert('Testing HTTP proxies is not supported for now');
            return null;
        }
        return await (0,_testProxySettings__WEBPACK_IMPORTED_MODULE_3__.testProxySettings)(settings);
    }
}
class ProxyForm {
    constructor() {
        const model = new ProxyModel();
        this.model = model;
        this.lastTestResultBlock = null;
        this.titleInput = new _ui_components_inputs__WEBPACK_IMPORTED_MODULE_4__.TrimmedTextInput({ title: t('ProxyForm_titleFieldLabel'), ...model.accessProperty('title') });
        this.hostInput = new _HostInput__WEBPACK_IMPORTED_MODULE_6__["default"]({
            title: t('ProxyForm_serverFieldLabel'),
            ...model.accessProperty('host'),
            required: true
        });
        this.portInput = new _PortInput__WEBPACK_IMPORTED_MODULE_5__["default"]({
            title: t('ProxyForm_portFieldLabel'),
            ...model.accessProperty('port'),
            required: true
        });
        // TODO Add username/password pair validation
        this.usernameInput = new _ui_components_inputs__WEBPACK_IMPORTED_MODULE_4__.TrimmedTextInput({ title: t('ProxyForm_usernameFieldLabel'), ...model.accessProperty('username') });
        this.passwordInput = new _ui_components_inputs__WEBPACK_IMPORTED_MODULE_4__.PasswordInput({ title: t('ProxyForm_passwordFieldLabel'), ...model.accessProperty('password') });
        const protocolOptions = _constants__WEBPACK_IMPORTED_MODULE_2__.proxyTypes.map(v => ({ value: v, label: v === 'socks' ? 'SOCKS5' : v.toUpperCase() }));
        this.protocolSelect = new _ui_components_Select__WEBPACK_IMPORTED_MODULE_8__["default"]({
            title: t('ProxyForm_protocolFieldLabel'),
            required: true,
            ...model.accessProperty('type'),
            options: protocolOptions
        });
        this.doNotProxyLocalCheckbox = new _ui_components_inputs__WEBPACK_IMPORTED_MODULE_4__.CheckboxInput({
            title: t('ProxyForm_doNotProxyLocalFieldLabel'),
            ...model.accessProperty('doNotProxyLocal')
        });
        this.proxyDNSCheckbox = new _ui_components_inputs__WEBPACK_IMPORTED_MODULE_4__.CheckboxInput({
            title: t('ProxyForm_proxyDnsFieldLabel'),
            ...model.accessProperty('proxyDNS')
        });
    }
    async oninit(vnode) {
        await this.model.load(vnode.attrs.id);
    }
    view() {
        var _a;
        const testResultBlock = [];
        if (this.lastTestResultBlock !== null) {
            const lastTestResultBlock1 = this.lastTestResultBlock;
            testResultBlock.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()(lastTestResultBlock1));
        }
        const isSocks = this.model.current.type === _domain_ProxyType__WEBPACK_IMPORTED_MODULE_10__.ProxyType.Socks4 || this.model.current.type === _domain_ProxyType__WEBPACK_IMPORTED_MODULE_10__.ProxyType.Socks5;
        const isSocks4 = this.model.current.type === _domain_ProxyType__WEBPACK_IMPORTED_MODULE_10__.ProxyType.Socks4;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('form', { ...tid('ProxyForm'), class: _ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].ProxyForm }, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('div', [mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.titleInput, { class: 'ProxyForm__titleInput' })]),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(`div.${_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].connectionSettings}`, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.protocolSelect),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(`span.${_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].separator}`, '://'),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.hostInput, { class: _ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].hostInput }),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(`span.${_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].separator}`, ':'),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.portInput, { class: _ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].portInput })
            ]),
            (isSocks4
                ? [] : mithril__WEBPACK_IMPORTED_MODULE_0___default()(`div.${_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].credentials}`, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.usernameInput),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.passwordInput)
            ])),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(`div.${_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].advanced}`, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.doNotProxyLocalCheckbox), (isSocks ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.proxyDNSCheckbox) : []),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()('div.input', [
                    mithril__WEBPACK_IMPORTED_MODULE_0___default()('label.input__label', { for: 'includePatterns' }, t('ProxyForm_proxyOnlyForFieldLabel')),
                    mithril__WEBPACK_IMPORTED_MODULE_0___default()('textarea.input__field', {
                        id: 'includePatterns',
                        'data-testid': 'includePatterns',
                        rows: 3,
                        placeholder: t('ProxyForm_proxyOnlyForFieldPlaceholder'),
                        title: t('ProxyForm_proxyOnlyForFieldHelp'),
                        value: ((_a = this.model.current.includePatterns) !== null && _a !== void 0 ? _a : []).join('\n'),
                        oninput: (e) => {
                            this.model.current.includePatterns = (0,_domain_proxyPatterns__WEBPACK_IMPORTED_MODULE_11__.parsePatternsInput)(e.target.value);
                        }
                    }),
                    mithril__WEBPACK_IMPORTED_MODULE_0___default()('div', { style: 'font-size: 80%; opacity: 0.8' }, t('ProxyForm_proxyOnlyForFieldHelp'))
                ])
            ]),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(`div.${_ProxyForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].actions}`, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()('button[type=button]', {
                    ...tid('testSettings'),
                    onclick: async () => {
                        const confirmed = confirm(t('ProxyForm_testProxySettingsConfirmationText'));
                        if (!confirmed) {
                            return;
                        }
                        this.lastTestResultBlock = null;
                        const result = await this.model.testSettings();
                        if (result === null) {
                            return;
                        }
                        this.lastTestResultBlock = new _TestResultBlock__WEBPACK_IMPORTED_MODULE_7__["default"](result);
                        mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
                    }
                }, t('ProxyForm_testProxySettingsLabel') + ' β'),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()('button[type=button]', {
                    ...tid('save'),
                    onclick: async () => {
                        const success = await this.model.save();
                        if (success) {
                            mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set('/proxies');
                        }
                    }
                }, t('ProxyForm_save')),
                ...testResultBlock
            ])
        ]);
    }
}


/***/ },

/***/ "./src/options/ProxyForm/TestResultBlock.ts"
/*!**************************************************!*\
  !*** ./src/options/ProxyForm/TestResultBlock.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestResultBlock)
/* harmony export */ });
/* harmony import */ var _testProxySettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testProxySettings */ "./src/options/ProxyForm/testProxySettings.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);


const t = browser.i18n.getMessage;
class TestResultBlock {
    constructor(testResult) {
        this.testResult = testResult;
    }
    view() {
        // TODO Add localization
        // TODO Add ru translations
        // TODO Improve design
        const result = this.testResult;
        let text = 'Unexpected error';
        const directBlock = [];
        const proxiedBlock = [];
        const direct = (v) => mithril__WEBPACK_IMPORTED_MODULE_1___default()('span[data-testid=directResult]', [v]);
        const proxied = (v) => mithril__WEBPACK_IMPORTED_MODULE_1___default()('span[data-testid=proxiedResult]', [v]);
        if (result instanceof _testProxySettings__WEBPACK_IMPORTED_MODULE_0__.SuccessfulTestResult) {
            text = t('ProxySettingsTestResult_settingsAreCorrect');
            directBlock.push(mithril__WEBPACK_IMPORTED_MODULE_1___default()('b', ['Your real IP: ']), direct(result.direct.ip));
            proxiedBlock.push(mithril__WEBPACK_IMPORTED_MODULE_1___default()('b', ['Proxied IP: ']), proxied(result.proxied.ip));
        }
        else if (result instanceof _testProxySettings__WEBPACK_IMPORTED_MODULE_0__.ConnectionIssueResult) {
            text = t('ProxySettingsTestResult_notConnectedToTheInternet');
            directBlock.push(mithril__WEBPACK_IMPORTED_MODULE_1___default()('b', ['Direct request error: ']), direct(result.directError.message));
            proxiedBlock.push(mithril__WEBPACK_IMPORTED_MODULE_1___default()('b', ['Proxied request error: ']), proxied(result.proxiedError.message));
        }
        else if (result instanceof _testProxySettings__WEBPACK_IMPORTED_MODULE_0__.NoDirectConnectionResult) {
            text = t('ProxySettingsTestResult_noDirectConnection');
            directBlock.push(mithril__WEBPACK_IMPORTED_MODULE_1___default()('b', ['Direct request error: ']), direct(result.directError.message));
            proxiedBlock.push(mithril__WEBPACK_IMPORTED_MODULE_1___default()('b', ['Proxied IP: ']), proxied(result.proxied.ip));
        }
        else if (result instanceof _testProxySettings__WEBPACK_IMPORTED_MODULE_0__.SettingsErrorResult) {
            text = t('ProxySettingsTestResult_incorrectSettings');
            directBlock.push(mithril__WEBPACK_IMPORTED_MODULE_1___default()('b', ['Your real IP: ']), direct(result.direct.ip));
            proxiedBlock.push(mithril__WEBPACK_IMPORTED_MODULE_1___default()('b', ['Proxied request error: ']), proxied(result.proxiedError.message));
        }
        else {
            throw new Error('Unknown result type');
        }
        return mithril__WEBPACK_IMPORTED_MODULE_1___default()('.proxyFormTestResult', {}, [
            text,
            mithril__WEBPACK_IMPORTED_MODULE_1___default()('div', directBlock),
            mithril__WEBPACK_IMPORTED_MODULE_1___default()('div', proxiedBlock),
            mithril__WEBPACK_IMPORTED_MODULE_1___default()('div', [
                mithril__WEBPACK_IMPORTED_MODULE_1___default()('p', [
                    mithril__WEBPACK_IMPORTED_MODULE_1___default()('a.ProxyForm__duckduckgo-attribution', { href: 'https://duckduckgo.com/?q=ip' }, t('ProxyForm_duckduckgoAttribution'))
                ])
            ])
        ]);
    }
}


/***/ },

/***/ "./src/options/ProxyForm/testProxySettings.ts"
/*!****************************************************!*\
  !*** ./src/options/ProxyForm/testProxySettings.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionIssueResult: () => (/* binding */ ConnectionIssueResult),
/* harmony export */   NoDirectConnectionResult: () => (/* binding */ NoDirectConnectionResult),
/* harmony export */   SettingsErrorResult: () => (/* binding */ SettingsErrorResult),
/* harmony export */   SuccessfulTestResult: () => (/* binding */ SuccessfulTestResult),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   testProxySettings: () => (/* binding */ testProxySettings)
/* harmony export */ });
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/Store */ "./src/store/Store.ts");

/**
 *
 * @param settings
 * @return {Promise<TestResult>}
 */
async function testProxySettings(settings) {
    // TODO Refine user interaction according to https://extensionworkshop.com/documentation/publish/add-on-policies-2019-12/
    let directIpQuery;
    let directError;
    try {
        directIpQuery = await fetchDirectIpData();
    }
    catch (e) {
        directError = e;
    }
    let proxiedIpQuery;
    let proxiedError;
    try {
        proxiedIpQuery = await fetchProxiedIpData(settings);
    }
    catch (e) {
        // @ts-expect-error
        proxiedError = e;
    }
    if (directIpQuery === undefined) {
        if (proxiedIpQuery === undefined) {
            // @ts-expect-error
            return new ConnectionIssueResult({ directError, proxiedError });
        }
        else {
            // @ts-expect-error
            return new NoDirectConnectionResult({ directError, proxied: proxiedIpQuery });
        }
    }
    else {
        if (proxiedIpQuery === undefined) {
            // @ts-expect-error
            return new SettingsErrorResult({ directIpQuery, proxiedError });
        }
        else {
            return new SuccessfulTestResult({ direct: directIpQuery, proxied: proxiedIpQuery });
        }
    }
}
const ipDataUrl = 'https://api.duckduckgo.com/?q=ip&no_html=1&format=json&t=firefox-container-proxy-extension';
function toQueryResponse(response) {
    var _a;
    if (response.AnswerType === 'ip') {
        return new IpQueryResponse({ ip: response.Answer });
    }
    else {
        throw new Error(`Unexpected response type: ${(_a = response.AnswerType) !== null && _a !== void 0 ? _a : '<empty>'}`);
    }
}
async function fetchDirectIpData() {
    return await fetchIpData(ipDataUrl);
}
async function fetchProxiedIpData(proxyConfig) {
    const proxiedUrl = ipDataUrl;
    const filter = { urls: [proxiedUrl] };
    const proxyInfo = _store_Store__WEBPACK_IMPORTED_MODULE_0__.ProxyDao.toProxyInfo(proxyConfig);
    if (proxyInfo === undefined) {
        throw new Error('Invalid proxy config');
    }
    return await new Promise((resolve, reject) => {
        const listener = () => {
            // TODO Add support for HTTP
            browser.proxy.onRequest.removeListener(listener);
            return proxyInfo;
        };
        const errorListener = (error) => {
            browser.proxy.onRequest.removeListener(listener);
            reject(error);
        };
        browser.proxy.onRequest.addListener(listener, filter);
        browser.proxy.onError.addListener(errorListener);
        const proxiedResultPromise = fetchIpData(proxiedUrl);
        proxiedResultPromise.then(r => {
            resolve(r);
        }).catch(e => {
            reject(e);
        });
    });
}
const ttlMs = 5000;
async function fetchIpData(url) {
    const fetchParameters = {
        cache: 'no-cache',
        credentials: 'omit',
        redirect: 'error',
        referrer: 'no-referrer',
        headers: {
            Accept: 'application/json',
            'Accept-Language': 'en-US,en' // Blur the fingerprint a bit
        }
    };
    // TODO Cancel fetch request on timeout
    const ipResponsePromise = fetch(url, fetchParameters);
    const timeout = timeoutPromise(ttlMs);
    const result = Promise.race([ipResponsePromise, timeout]);
    const response = (await (await result).json());
    return toQueryResponse(response);
}
async function timeoutPromise(value) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new TimeoutError(value));
        }, value);
    });
}
class TimeoutError extends Error {
    constructor(timeoutValue) {
        super(`Reached timeout of ${timeoutValue} ms`);
        this.timeoutValue = timeoutValue;
    }
}
class IpQueryResponse {
    constructor({ ip }) {
        this.ip = ip;
    }
}
class SuccessfulTestResult {
    constructor({ direct, proxied }) {
        this.direct = direct;
        this.proxied = proxied;
    }
    get ipsMatch() {
        return this.direct.ip === this.proxied.ip;
    }
}
/**
 * Proxy settings are incorrect
 */
class SettingsErrorResult {
    constructor({ directIpQuery, proxiedError }) {
        this.direct = directIpQuery;
        this.proxiedError = proxiedError;
    }
}
class ConnectionIssueResult {
    constructor({ directError, proxiedError }) {
        this.directError = directError;
        this.proxiedError = proxiedError;
    }
}
/**
 * Probably, not allowed to access internet directly
 */
class NoDirectConnectionResult {
    constructor({ directError, proxied }) {
        this.directError = directError;
        this.proxied = proxied;
    }
}


/***/ },

/***/ "./src/options/ProxyList.ts"
/*!**********************************!*\
  !*** ./src/options/ProxyList.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyList: () => (/* binding */ ProxyList)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

class ProxyListModel {
    constructor() {
        this.list = [];
    }
    async loadList() {
        const store = window.store;
        this.list = await store.getAllProxies();
    }
    async delete(id) {
        const store = window.store;
        await store.deleteProxyById(id);
        await this.loadList();
    }
}
class ProxyList {
    constructor() {
        this.model = new ProxyListModel();
    }
    async oninit() {
        await this.model.loadList();
        mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
    }
    view() {
        const items = this.model.list.map(this.renderProxyItem.bind(this));
        const actions = mithril__WEBPACK_IMPORTED_MODULE_0___default()('div.ProxyList__list-actions', [
            // TODO: Finish import features
            // m('.proxy-button', [
            //   m('a[href=/proxies/import]', { oncreate: m.route.link, class: 'button' }, 'Import')
            // ]),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('.proxy-button', [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()('a[href=#!/proxies/new]', { class: 'button button--primary' }, '+')
            ])
        ]);
        return [...items, actions];
    }
    renderProxyItem(p) {
        const text = mithril__WEBPACK_IMPORTED_MODULE_0___default()('div.proxy-name', [(p.title !== '') ? p.title : p.url]);
        const editButton = mithril__WEBPACK_IMPORTED_MODULE_0___default()('a.button.edit', {
            href: '#!/proxies/' + p.id
        }, browser.i18n.getMessage('ProxyList_edit'));
        const deleteButton = mithril__WEBPACK_IMPORTED_MODULE_0___default()('button.delete[type=button]', {
            onclick: async () => {
                await this.model.delete(p.id);
                mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
            }
        }, browser.i18n.getMessage('ProxyList_delete'));
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.proxy-list-item', [text, mithril__WEBPACK_IMPORTED_MODULE_0___default()('.ProxyList__item-actions', [editButton, deleteButton])]);
    }
}


/***/ },

/***/ "./src/options/constants.ts"
/*!**********************************!*\
  !*** ./src/options/constants.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proxyTypes: () => (/* binding */ proxyTypes),
/* harmony export */   style: () => (/* binding */ style)
/* harmony export */ });
const style = {
    navItem: 'item item-label',
    textInput: 'input'
};
const proxyTypes = ['http', 'https', 'socks', 'socks4'];


/***/ },

/***/ "./src/options/import/FoxyProxyConverter.ts"
/*!**************************************************!*\
  !*** ./src/options/import/FoxyProxyConverter.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FoxyProxyConverter)
/* harmony export */ });
const typeMapping = {
    1: 'http',
    2: 'https',
    3: 'socks',
    4: 'socks4'
};
class FoxyProxyConverter {
    // @ts-expect-error
    convert(config) {
        // TODO: Add verification that config has a valid structure
        const proxiesToImport = Object.entries(config)
            // @ts-expect-error
            .filter(([_key, value]) => typeMapping[value.type]);
        // @ts-ignore
        return proxiesToImport.map(([id, p]) => {
            // @ts-expect-error
            const type = typeMapping[p.type];
            const result = {
                id: id,
                type: type,
                // @ts-expect-error
                title: p.title,
                // @ts-expect-error
                host: p.address,
                // @ts-expect-error
                port: p.port,
                // @ts-expect-error
                username: p.username,
                // @ts-expect-error
                password: p.password,
                failoverTimeout: 5,
                doNotProxyLocal: true, // TODO: Check if can be imported
            };
            if (type === 'socks') {
                // @ts-expect-error
                result.proxyDNS = true;
            }
            return result;
        });
    }
}


/***/ },

/***/ "./src/options/import/ImportPage.ts"
/*!******************************************!*\
  !*** ./src/options/import/ImportPage.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImportPage)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FoxyProxyConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoxyProxyConverter */ "./src/options/import/FoxyProxyConverter.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/options/util.ts");



const t = browser.i18n.getMessage;
class ImportPage {
    constructor({ store }) {
        this.proxiesToImport = [];
        this.store = store;
        this.foxyProxyFileInput = new FileInput({
            title: t('ImportPage_foxyProxyInputLabel'),
            onChange: this.onChooseFile.bind(this)
        });
    }
    onChooseFile(event) {
        var _a;
        this.proxiesToImport = [];
        const input = event.target;
        this.cleanUp = () => {
            input.value = '';
        };
        const files = (_a = input.files) !== null && _a !== void 0 ? _a : [];
        if (files.length === 0) {
            return;
        }
        const file = files[0];
        if (file.size > 1000000) {
            return;
        }
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (evt) => {
            // @ts-expect-error
            const fileContents = evt.target.result; // TODO: `target` might be null, needs verification
            const converter = new _FoxyProxyConverter__WEBPACK_IMPORTED_MODULE_1__["default"]();
            this.proxiesToImport = converter.convert(JSON.parse(fileContents));
            mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
        };
        reader.onerror = function (evt) {
            console.error(evt);
        };
    }
    async doImport() {
        console.log('Importing: ', this.proxiesToImport);
        for (const proxy of this.proxiesToImport) {
            // @ts-expect-error
            await this.store.putProxy(proxy);
        }
        mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set('/proxies');
        this.reset();
    }
    reset() {
        this.proxiesToImport = [];
        if (this.cleanUp !== undefined) {
            this.cleanUp();
        }
        mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
    }
    view() {
        let text = t('ImportPage_importButtonNoFileSelected');
        const canImport = this.proxiesToImport.length > 0;
        if (canImport) {
            text = t('ImportPage_importButtonDoImport', this.proxiesToImport.length);
        }
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('section', [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('h2', t('ImportPage_heading')),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('form', [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.foxyProxyFileInput),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()('button.button.button--primary', {
                    disabled: !canImport,
                    onclick: async () => {
                        await this.doImport();
                    }
                }, text)
            ])
        ]);
    }
}
class FileInput {
    constructor({ title, onChange }) {
        this.title = title;
        this.id = (0,_util__WEBPACK_IMPORTED_MODULE_2__.uuidv4)();
        this.onChange = onChange;
    }
    view({ attrs: { class: className = '' } }) {
        const inputClasses = ['input__field'];
        // TODO Add error handling
        const topClasses = ['input', className];
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: topClasses.join(' ') }, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('label', { class: 'input__label', for: this.id }, this.title),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('input', {
                id: this.id,
                type: 'file',
                class: inputClasses.join(' '),
                onchange: this.onChange
            })
        ]);
    }
}


/***/ },

/***/ "./src/options/nav/Navigation.ts"
/*!***************************************!*\
  !*** ./src/options/nav/Navigation.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.module.scss */ "./src/options/nav/Navigation.module.scss");


class Navigation {
    view() {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('nav', { class: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].nav }, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('section', { class: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].main }, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(NavItem, {
                    href: '/containers',
                    text: 'OptionsNavigation_assign',
                    classes: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].assign,
                    testId: 'assign'
                }),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(NavItem, {
                    href: '/proxies',
                    testId: 'proxies',
                    text: 'OptionsNavigation_proxies',
                    classes: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].proxies
                })
            ]),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('section', { class: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].support }, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()(NavItem, {
                    href: '/support',
                    text: 'OptionsNavigation_support',
                    classes: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].help,
                    testId: 'support'
                })
            ])
        ]);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);
const NavItem = () => {
    const t = browser.i18n.getMessage;
    return {
        view: ({ attrs: { href, text, classes, testId } }) => {
            const path = mithril__WEBPACK_IMPORTED_MODULE_0___default().route.get();
            const active = path === href;
            classes = classes + (active ? ' ' + _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active : '');
            href = '#!' + href;
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()('a', { class: [_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].item, classes].join(' '), href, 'test-id': testId }, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['item-icon'] }),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"]['item-label'] }, [t(text)])
            ]);
        }
    };
};


/***/ },

/***/ "./src/options/pages/SupportPage.tsx"
/*!*******************************************!*\
  !*** ./src/options/pages/SupportPage.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/.pnpm/preact@10.29.8/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _MithrilPreactAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MithrilPreactAdapter */ "./src/options/MithrilPreactAdapter.tsx");
/* harmony import */ var _MithrilPreactAdapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MithrilPreactAdapter__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_MithrilPreactAdapter__WEBPACK_IMPORTED_MODULE_1__.MithrilPreactAdapter)(SupportPagePreact));
const gitterLink = 'https://gitter.im/firefox-container-proxy/community';
function SupportPagePreact() {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [browser.i18n.getMessage('SupportPage_gitterInvite') + ' ', (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: gitterLink, children: "Container Proxy community" })] }));
}


/***/ },

/***/ "./src/options/predicates.ts"
/*!***********************************!*\
  !*** ./src/options/predicates.ts ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDomainName: () => (/* binding */ isDomainName),
/* harmony export */   isIpV4Address: () => (/* binding */ isIpV4Address),
/* harmony export */   isIpV6Address: () => (/* binding */ isIpV6Address),
/* harmony export */   isNotEmpty: () => (/* binding */ isNotEmpty)
/* harmony export */ });
/* harmony import */ var punycode___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! punycode/ */ "./node_modules/.pnpm/punycode@2.3.1/node_modules/punycode/punycode.es6.js");

function isNotEmpty(value) {
    return value !== '';
}
// TODO: Can we join IP and domain predicates and use URL object to validate if it is locatable?
function isIpV4Address(value) {
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;
    return regex.test(value);
}
function isIpV6Address(value) {
    const lowerCase = value.toLowerCase();
    // Taken from https://community.helpsystems.com/forums/intermapper/miscellaneous-topics/5acc4fcf-fa83-e511-80cf-0050568460e4
    const regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    return regex.test(lowerCase);
}
function isDomainName(value) {
    const punicodedDomain = (0,punycode___WEBPACK_IMPORTED_MODULE_0__.toASCII)(value).toLowerCase();
    const regex = /^(:?[a-z][a-z0-9\-_]*|xn--[a-z0-9]+)(:?\.(:?[a-z][a-z0-9\-_]*|xn--[a-z0-9]+))*$/;
    return regex.test(punicodedDomain);
}


/***/ },

/***/ "./src/options/ui-components/Select.ts"
/*!*********************************************!*\
  !*** ./src/options/ui-components/Select.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/options/util.ts");


class Select {
    constructor({ title, required, getValue, setValue, options, id }) {
        this.title = title;
        this.required = required;
        this.getValue = getValue;
        this.setValue = setValue;
        this.options = options;
        this.id = id !== null && id !== void 0 ? id : (0,_util__WEBPACK_IMPORTED_MODULE_1__.uuidv4)();
        this.props = {};
        this.valid = true;
    }
    validate(v) {
        if (this.required && v === '') {
            this.valid = false;
        }
        else {
            this.valid = true;
        }
    }
    onChange(v) {
        this.validate(v);
        this.setValue(v);
        mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
    }
    view() {
        const selectClasses = ['input__field'];
        if (!this.valid) {
            selectClasses.push('input--error__field');
        }
        const value = this.getValue();
        const options = this.options.map(({ value, label }) => {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()('option', { value: value }, label);
        });
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.select', [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('label.input__label', { for: this.id }, this.title),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('select', {
                ...this.props,
                class: selectClasses.join(' '),
                id: this.id,
                required: this.required,
                value: value,
                onchange: (e) => this.onChange(e.target.value),
                onfocusout: (e) => this.onChange(e.target.value)
            }, [
                ...options
            ])
        ]);
    }
}


/***/ },

/***/ "./src/options/ui-components/inputs.ts"
/*!*********************************************!*\
  !*** ./src/options/ui-components/inputs.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseInput: () => (/* binding */ BaseInput),
/* harmony export */   CheckboxInput: () => (/* binding */ CheckboxInput),
/* harmony export */   PasswordInput: () => (/* binding */ PasswordInput),
/* harmony export */   TextInput: () => (/* binding */ TextInput),
/* harmony export */   TrimmedTextInput: () => (/* binding */ TrimmedTextInput)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/options/util.ts");


class BaseInput {
    constructor({ title, required = false, getValue, setValue, id, ...rest }) {
        this.title = title;
        this.required = Boolean(required);
        this.getValue = getValue;
        this.setValue = setValue;
        this.id = id !== null && id !== void 0 ? id : (0,_util__WEBPACK_IMPORTED_MODULE_1__.uuidv4)();
        this.props = {};
        this.testId = rest['data-testid'];
        this.errorText = null;
    }
    normalizeValue(v) {
        return v;
    }
    onChange(v) {
        const normalizedValue = this.normalizeValue(v);
        this.errorText = this.checkForError(normalizedValue);
        this.setValue(normalizedValue);
        mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
    }
    get valid() {
        return this.errorText === null;
    }
    /**
     * @param v Value
     * @return {string|null}
     */
    checkForError(v) {
        return null;
    }
    view({ attrs: { class: className = '', ...rest } }) {
        const inputClasses = ['input__field'];
        if (!this.valid) {
            inputClasses.push('input--error__field');
        }
        const testId = this.testId !== undefined ? { 'data-testid': this.testId } : {};
        const topClasses = ['input', className];
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: topClasses.join(' ') }, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('label', { class: 'input__label', for: this.id }, this.title),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('input', {
                ...this.props,
                ...rest,
                ...testId,
                id: this.id,
                type: this.type,
                class: inputClasses.join(' '),
                required: this.required,
                title: this.errorText,
                value: this.getValue(),
                oninput: (e) => this.setValue(this.extractValueFromEvent(e)),
                onchange: (e) => this.onChange(this.extractValueFromEvent(e)),
                onfocusout: (e) => this.onChange(this.extractValueFromEvent(e))
            })
        ]);
    }
}
class TextInput extends BaseInput {
    get type() {
        return 'text';
    }
    extractValueFromEvent(event) {
        return event.target.value;
    }
}
class TrimmedTextInput extends TextInput {
    normalizeValue(v) {
        return v.trim();
    }
}
class PasswordInput extends TextInput {
    get type() {
        return 'password';
    }
}
class CheckboxInput extends BaseInput {
    get type() {
        return 'checkbox';
    }
    extractValueFromEvent(event) {
        return event.target.checked;
    }
    view({ attrs: { class: className = '', disabled = false, ...rest } }) {
        const inputClasses = ['checkbox'];
        if (!this.valid) {
            inputClasses.push('input--error__field');
        }
        const topClasses = ['checkbox-top', className];
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('div', { class: topClasses.join(' ') }, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('input', {
                ...this.props,
                ...rest,
                id: this.id,
                type: 'checkbox',
                class: inputClasses.join(' '),
                required: this.required,
                title: this.errorText,
                disabled,
                checked: this.getValue(),
                oninput: (e) => this.setValue(this.extractValueFromEvent(e)),
                onchange: (e) => this.onChange(this.extractValueFromEvent(e)),
                onfocusout: (e) => this.onChange(this.extractValueFromEvent(e))
            }),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()('label', { class: `input__label ${disabled ? 'checkbox--disabled__label__text' : ''}`, for: this.id, style: 'display: inline' }, this.title)
        ]);
    }
}


/***/ },

/***/ "./src/options/util.ts"
/*!*****************************!*\
  !*** ./src/options/util.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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


/***/ },

/***/ "./src/options/icons/DuckDuckGo_logo.v107.min.svg"
/*!********************************************************!*\
  !*** ./src/options/icons/DuckDuckGo_logo.v107.min.svg ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "01a8cd521e072a6d1532.svg";

/***/ },

/***/ "./src/options/icons/filter.svg"
/*!**************************************!*\
  !*** ./src/options/icons/filter.svg ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "808ec26dcf54936fdb68.svg";

/***/ },

/***/ "./src/options/nav/Help.svg"
/*!**********************************!*\
  !*** ./src/options/nav/Help.svg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "94d9417854d9b4c6e4af.svg";

/***/ },

/***/ "./src/options/nav/Secure.svg"
/*!************************************!*\
  !*** ./src/options/nav/Secure.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "dfd25d4a4613ce74939e.svg";

/***/ },

/***/ "./src/options/nav/Top Sites.svg"
/*!***************************************!*\
  !*** ./src/options/nav/Top Sites.svg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f78e21f4f025af24e7c9.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/options/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Store */ "./src/store/Store.ts");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "./node_modules/.pnpm/mithril@2.3.8/node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/options/Layout.ts");
/* harmony import */ var _ContainerListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContainerListView */ "./src/options/ContainerListView.ts");
/* harmony import */ var _ProxyList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProxyList */ "./src/options/ProxyList.ts");
/* harmony import */ var _ProxyForm_ProxyForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProxyForm/ProxyForm */ "./src/options/ProxyForm/ProxyForm.ts");
/* harmony import */ var _pages_SupportPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/SupportPage */ "./src/options/pages/SupportPage.tsx");
/* harmony import */ var _import_ImportPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import/ImportPage */ "./src/options/import/ImportPage.ts");








const store = new _store_Store__WEBPACK_IMPORTED_MODULE_0__.Store();
globalThis.store = store;
const containerListView = new _ContainerListView__WEBPACK_IMPORTED_MODULE_3__.ContainerListView();
const proxyForm = new _ProxyForm_ProxyForm__WEBPACK_IMPORTED_MODULE_5__["default"]();
const importPage = new _import_ImportPage__WEBPACK_IMPORTED_MODULE_7__["default"]({ store });
mithril__WEBPACK_IMPORTED_MODULE_1___default().route(document.body, '/containers', {
    '/containers': {
        render: () => mithril__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, mithril__WEBPACK_IMPORTED_MODULE_1___default()(containerListView))
    },
    '/proxies': {
        render: () => mithril__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, [mithril__WEBPACK_IMPORTED_MODULE_1___default()(_ProxyList__WEBPACK_IMPORTED_MODULE_4__.ProxyList)])
    },
    '/proxies/import': {
        render: vnode => mithril__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, mithril__WEBPACK_IMPORTED_MODULE_1___default()(importPage, { ...vnode.attrs }))
    },
    '/proxies/:id': {
        render: vnode => mithril__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, mithril__WEBPACK_IMPORTED_MODULE_1___default()(proxyForm, vnode.attrs))
    },
    '/support': {
        render: () => {
            return mithril__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, mithril__WEBPACK_IMPORTED_MODULE_1___default()(_pages_SupportPage__WEBPACK_IMPORTED_MODULE_6__["default"]));
        }
    }
});
document.title = globalThis.browser.i18n.getMessage('OptionsPage_browserTabTitle');

})();

/******/ })()
;
//# sourceMappingURL=index.js.map