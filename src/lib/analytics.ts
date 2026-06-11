type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export function trackEvent(eventName: string, properties: AnalyticsProperties = {}) {
  if (typeof window === 'undefined') return;

  const cleanProperties = Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined && value !== null && value !== '')
  );

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...cleanProperties,
  });

  if (gaMeasurementId && typeof window.gtag === 'function') {
    window.gtag('event', eventName, cleanProperties);
  }
}
