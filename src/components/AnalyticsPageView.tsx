import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { trackEvent } from '../lib/analytics';

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export default function AnalyticsPageView() {
  const location = useLocation();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const pagePath = `${location.pathname}${location.search}${location.hash}`;

    if (previousPathRef.current === null) {
      previousPathRef.current = pagePath;
      return;
    }

    if (previousPathRef.current === pagePath) return;

    previousPathRef.current = pagePath;

    const pageLocation = window.location.href;
    const pageTitle = document.title;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_path: pagePath,
      page_location: pageLocation,
      page_title: pageTitle,
    });

    if (gaMeasurementId && typeof window.gtag === 'function') {
      window.gtag('config', gaMeasurementId, {
        page_path: pagePath,
        page_location: pageLocation,
        page_title: pageTitle,
      });
    }
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>('[data-analytics-event]')
        : null;

      if (!target) return;

      trackEvent(target.dataset.analyticsEvent || 'cta_click', {
        event_category: target.dataset.analyticsCategory || 'cta',
        event_label: target.dataset.analyticsLabel || target.textContent?.trim() || undefined,
        destination: target.dataset.analyticsDestination || target.getAttribute('href') || undefined,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
