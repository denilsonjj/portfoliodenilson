import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      const pageData = {
        path: window.location.pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent,
      };
      
      console.log('Page View Tracked:', pageData);
      
      // You can send this to your analytics service
      // For now, we're just logging it
    };

    trackPageView();

    // Track scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > maxScroll) {
        maxScroll = Math.round(scrollPercent);
        console.log('Scroll Depth:', maxScroll + '%');
      }
    };

    window.addEventListener('scroll', trackScroll);

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      console.log('Time on Page:', timeSpent + 's');
    };

    const timeInterval = setInterval(trackTimeOnPage, 30000); // Log every 30 seconds

    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearInterval(timeInterval);
      trackTimeOnPage(); // Final log
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;