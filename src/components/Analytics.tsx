import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/lib/analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path);
  }, [location.pathname, location.search, location.hash]);

  return <VercelAnalytics />;
};

export default Analytics;
