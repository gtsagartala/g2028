import { useEffect } from 'react';

interface SEOOptions {
  title?: string;
  ogTitle?: string;
  twitterTitle?: string;
  description?: string;
  ogDescription?: string;
  twitterDescription?: string;
  keywords?: string;
  image?: string;
  ogImage?: string;
  twitterImage?: string;
  url?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export function useSEO(options: SEOOptions = {}) {
  useEffect(() => {
    // Update document title
    if (options.title) {
      document.title = options.title;
    }

    // Update meta description
    if (options.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', options.description);
    }

    // Update meta keywords
    if (options.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', options.keywords);
    }

    // Update Open Graph title
    if (options.ogTitle) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', options.ogTitle);
    }

    // Update Open Graph description
    if (options.ogDescription) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', options.ogDescription);
    }

    // Update Open Graph image
    if (options.image || options.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', options.ogImage || options.image || '');
    }

    // Update canonical URL
    if (options.url || options.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', options.canonicalUrl || options.url || '');
    }

    // Update structured data
    if (options.structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(options.structuredData);
    }
  }, [options.title, options.ogTitle, options.description, options.ogDescription, options.keywords, options.image, options.ogImage, options.url, options.canonicalUrl, options.structuredData]);
}