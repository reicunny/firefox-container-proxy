import { toASCII } from 'punycode/'

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

export function parsePatternsInput (raw: string): string[] {
  return raw
    .split(/[\s,;]+/)
    .map(p => p.trim())
    .filter(p => p.length > 0)
}

export function normalizePatterns (patterns: Array<string | null | undefined>): string[] {
  return patterns
    .map(p => (p ?? '').trim())
    .filter(p => p.length > 0)
}

export function matchesAnyPattern (urlString: string, patterns: Array<string | null | undefined>): boolean {
  const normalized = normalizePatterns(patterns)
  if (normalized.length === 0) {
    return true
  }
  return normalized.some(pattern => matchesPattern(urlString, pattern))
}

export function matchesPattern (urlString: string, rawPattern: string): boolean {
  const pattern = rawPattern.trim()
  if (pattern === '') {
    return false
  }
  if (pattern === '*') {
    return true
  }

  if (pattern.includes('/')) {
    return matchesUrlWildcard(urlString, pattern)
  }

  return matchesHostPattern(urlString, pattern)
}

function matchesUrlWildcard (urlString: string, pattern: string): boolean {
  try {
    const regex = new RegExp('^' + wildcardToRegexBody(pattern) + '$', 'i')
    return regex.test(urlString)
  } catch (e) {
    console.error(e)
    return false
  }
}

function matchesHostPattern (urlString: string, pattern: string): boolean {
  let hostname: string
  try {
    hostname = new URL(urlString).hostname
  } catch (e) {
    // To be on a safe side: proxy requests with unparsable URLs
    // (consistent with BackgroundMain behaviour for invalid URLs).
    console.error(e)
    return true
  }

  const normalizedHost = normalizeHost(hostname)
  const normalizedPattern = normalizeHost(pattern)

  if (normalizedPattern === '*') {
    return true
  }

  if (normalizedPattern.startsWith('*')) {
    let base = normalizedPattern.slice(1)
    if (base.startsWith('.')) {
      base = base.slice(1)
    }
    if (base === '' || base === '*') {
      return true
    }
    if (base.includes('*')) {
      // e.g. `*.ex*ample.com` — fall back to generic wildcard match
      return wildcardMatches(normalizedHost, normalizedPattern)
    }
    return normalizedHost === base || normalizedHost.endsWith('.' + base)
  }

  if (normalizedPattern.includes('*')) {
    return wildcardMatches(normalizedHost, normalizedPattern)
  }

  return normalizedHost === normalizedPattern
}

function normalizeHost (host: string): string {
  const lower = host.trim().toLowerCase()
  try {
    return toASCII(lower)
  } catch (e) {
    return lower
  }
}

function wildcardMatches (value: string, pattern: string): boolean {
  try {
    const regex = new RegExp('^' + wildcardToRegexBody(pattern) + '$', 'i')
    return regex.test(value)
  } catch (e) {
    console.error(e)
    return false
  }
}

function wildcardToRegexBody (pattern: string): string {
  // Escape every regex special char except `*`, then `*` -> `.*`
  return pattern
    .split('*')
    .map(escapeRegExp)
    .join('.*')
}

function escapeRegExp (s: string): string {
  return s.replace(/[.+?^${}()|[\]\\]/g, '\\$&')
}
