import { useEffect } from 'react';

/**
 * useSEO — Comprehensive per-page SEO hook.
 *
 * Sets <title>, meta description, canonical URL, OG tags,
 * and injects JSON-LD structured data (breadcrumbs, FAQ, service, etc.).
 *
 * @param {Object}   options
 * @param {string}   options.title          - Page title (brand suffix auto-appended)
 * @param {string}   options.description    - Meta description (max ~155 chars for CTR)
 * @param {string}   [options.canonical]    - Full canonical URL
 * @param {string}   [options.ogImage]      - OG image URL
 * @param {string}   [options.ogType]       - OG type (default: "website")
 * @param {string}   [options.keywords]     - Page-specific keywords
 * @param {Array}    [options.breadcrumbs]  - Array of { name, url } for BreadcrumbList schema
 * @param {Array}    [options.jsonLd]       - Array of JSON-LD objects to inject into <head>
 */
const useSEO = ({
  title,
  description,
  canonical,
  ogImage = 'https://www.zenitech.in/Logo.png',
  ogType = 'website',
  keywords,
  breadcrumbs,
  jsonLd,
}) => {
  useEffect(() => {
    const BRAND = 'Zenitech';
    const fullTitle = BRAND;
    const url = canonical || window.location.href;

    // ── Title ───────────────────────────────────────
    document.title = fullTitle;

    // ── Helpers ─────────────────────────────────────
    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.includes('[name') ? 'name' : 'property';
        const val = selector.match(/["']([^"']+)["']/)?.[1];
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Primary Meta ────────────────────────────────
    if (description) {
      setMeta('meta[name="description"]', description);
    }
    if (keywords) {
      setMeta('meta[name="keywords"]', keywords);
    }

    // ── Canonical ───────────────────────────────────
    setLink('canonical', url);

    // ── Open Graph ──────────────────────────────────
    setMeta('meta[property="og:title"]', fullTitle);
    if (description) setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:site_name"]', 'Zenitech Technologies');
    setMeta('meta[property="og:locale"]', 'en_IN');

    // ── JSON-LD Injection ───────────────────────────
    // Clean up previously injected JSON-LD from this hook
    document.querySelectorAll('script[data-seo-hook]').forEach(el => el.remove());

    const injectJsonLd = (data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-hook', 'true');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // ── BreadcrumbList Schema ───────────────────────
    if (breadcrumbs && breadcrumbs.length > 0) {
      injectJsonLd({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }

    // ── Custom JSON-LD (FAQ, Service, Person, etc.) ─
    if (jsonLd && Array.isArray(jsonLd)) {
      jsonLd.forEach(data => injectJsonLd(data));
    }

    // ── Cleanup ─────────────────────────────────────
    return () => {
      document.querySelectorAll('script[data-seo-hook]').forEach(el => el.remove());
    };
  }, [title, description, canonical, ogImage, ogType, keywords, breadcrumbs, jsonLd]);
};

export default useSEO;
