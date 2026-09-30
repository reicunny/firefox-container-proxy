import { matchesAnyPattern, matchesPattern, normalizePatterns, parsePatternsInput } from '../../src/domain/proxyPatterns'

import { expect } from 'chai'

/* eslint-disable @typescript-eslint/no-unused-expressions */

describe('proxyPatterns', () => {
  describe('matchesPattern with exact hosts', () => {
    it('matches exact host', () => {
      expect(matchesPattern('https://subdomain.domain.com/', 'subdomain.domain.com')).to.be.true
      expect(matchesPattern('https://subdomain.domain.com/path?q=1', 'subdomain.domain.com')).to.be.true
    })

    it('does not match other hosts', () => {
      expect(matchesPattern('https://other.com/', 'subdomain.domain.com')).to.be.false
      expect(matchesPattern('https://subdomain.domain.com.evil.com/', 'subdomain.domain.com')).to.be.false
    })

    it('is case-insensitive', () => {
      expect(matchesPattern('https://EXAMPLE.COM/', 'example.com')).to.be.true
      expect(matchesPattern('https://example.com/', 'EXAMPLE.COM')).to.be.true
    })
  })

  describe('matchesPattern with leading wildcards', () => {
    it('matches base domain and subdomains for *.domain.com', () => {
      expect(matchesPattern('https://domain.com/', '*.domain.com')).to.be.true
      expect(matchesPattern('https://sub.domain.com/', '*.domain.com')).to.be.true
      expect(matchesPattern('https://a.b.domain.com/', '*.domain.com')).to.be.true
    })

    it('matches base domain and subdomains for *domain.com', () => {
      expect(matchesPattern('https://domain.com/', '*domain.com')).to.be.true
      expect(matchesPattern('https://sub.domain.com/', '*domain.com')).to.be.true
    })

    it('does not match unrelated domains', () => {
      expect(matchesPattern('https://other.com/', '*.domain.com')).to.be.false
      expect(matchesPattern('https://evildomain.com/', '*domain.com')).to.be.false
      expect(matchesPattern('https://domain.com.evil.com/', '*.domain.com')).to.be.false
    })

    it('* matches everything', () => {
      expect(matchesPattern('https://anything.example.com/path', '*')).to.be.true
    })
  })

  describe('matchesPattern with URL wildcards', () => {
    it('matches URL patterns containing /', () => {
      expect(matchesPattern('https://sub.example.com/', 'https://*.example.com/*')).to.be.true
      expect(matchesPattern('https://sub.example.com/path', 'https://*.example.com/*')).to.be.true
      expect(matchesPattern('http://sub.example.com/login', '*://*.example.com/login*')).to.be.true
    })

    it('does not match non-matching URLs', () => {
      expect(matchesPattern('https://other.com/', 'https://*.example.com/*')).to.be.false
    })
  })

  describe('matchesAnyPattern', () => {
    it('returns true when no patterns (proxy everything)', () => {
      expect(matchesAnyPattern('https://x.com/', [])).to.be.true
      expect(matchesAnyPattern('https://x.com/', ['', '  '])).to.be.true
    })

    it('returns true if any pattern matches', () => {
      expect(matchesAnyPattern('https://sub.domain.com/', ['other.com', '*domain.com'])).to.be.true
    })

    it('returns false if none matches', () => {
      expect(matchesAnyPattern('https://x.com/', ['a.com', 'b.com'])).to.be.false
    })
  })

  describe('parsePatternsInput', () => {
    it('splits on whitespace, commas and semicolons', () => {
      expect(parsePatternsInput('a.com, b.com\nc.com; d.com  e.com')).to.be.deep.equal(
        ['a.com', 'b.com', 'c.com', 'd.com', 'e.com']
      )
    })

    it('ignores empty entries', () => {
      expect(parsePatternsInput('  \n,; ')).to.be.deep.equal([])
    })
  })

  describe('normalizePatterns', () => {
    it('trims and drops empties', () => {
      expect(normalizePatterns([' a.com ', '', '  ', undefined, null])).to.be.deep.equal(['a.com'])
    })
  })
})
