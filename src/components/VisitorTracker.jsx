import { useEffect } from "react";

const VisitorTracker = () => {
  useEffect(() => {
    const existingData = localStorage.getItem('steelGalaxyAnalytics');
    let analytics = existingData ? JSON.parse(existingData) : {
      totalVisitors: 0,
      todayVisitors: 0,
      countries: {},
      lastVisit: '',
      currentVisitor: null
    };

    const isNewVisitor = !sessionStorage.getItem('visited');
    if (!isNewVisitor) return;

    const today = new Date().toDateString();
    const lastVisit = analytics.lastVisit ? new Date(analytics.lastVisit).toDateString() : '';
    analytics.totalVisitors += 1;
    analytics.todayVisitors = today !== lastVisit ? 1 : (analytics.todayVisitors + 1);

    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        const country = data.country_name || "Unknown";
        analytics.countries[country] = (analytics.countries[country] || 0) + 1;
        analytics.currentVisitor = {
          country,
          timestamp: new Date().toISOString()
        };
        analytics.lastVisit = new Date().toISOString();
        localStorage.setItem('steelGalaxyAnalytics', JSON.stringify(analytics));
        sessionStorage.setItem('visited', 'true');
      })
      .catch(() => {
        analytics.countries["Unknown"] = (analytics.countries["Unknown"] || 0) + 1;
        analytics.currentVisitor = {
          country: "Unknown",
          timestamp: new Date().toISOString()
        };
        analytics.lastVisit = new Date().toISOString();
        localStorage.setItem('steelGalaxyAnalytics', JSON.stringify(analytics));
        sessionStorage.setItem('visited', 'true');
      });
  }, []);

  return null; // no visible output
};

export default VisitorTracker;
 