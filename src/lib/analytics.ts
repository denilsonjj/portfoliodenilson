type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

const canTrack = () => typeof window !== "undefined" && Boolean(GA_MEASUREMENT_ID);

let isInitialized = false;

export const initAnalytics = () => {
  if (!canTrack() || isInitialized || !GA_MEASUREMENT_ID) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer.push(args);
  };

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  isInitialized = true;
};

export const trackPageView = (path: string) => {
  if (!canTrack() || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (!canTrack() || !window.gtag) return;

  window.gtag("event", eventName, params);
};

export const openTrackedLink = (url: string, eventName: string, params: AnalyticsParams = {}) => {
  trackEvent(eventName, { destination: url, ...params });
  window.open(url, "_blank", "noopener,noreferrer");
};

