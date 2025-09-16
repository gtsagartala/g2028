import { useEffect } from 'react';

export function usePerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // Log performance metrics if available
      console.log('Performance monitoring enabled');
    }

    // Monitor LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Fallback if observer is not supported
      console.log('Performance Observer not supported');
    }

    return () => {
      observer.disconnect();
    };
  }, []);
}