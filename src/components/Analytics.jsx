import React, { useState, useEffect } from 'react';
import { Users, Globe, Eye, TrendingUp, MapPin, Calendar } from 'lucide-react';
import logo from '../img/Other/logo.png';

const Analytics = () => {
  const [visitorData, setVisitorData] = useState({
    totalVisitors: 0,
    todayVisitors: 0,
    countries: {},
    lastVisit: '',
    currentVisitor: null
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        // Get existing visitor data from localStorage
        const existingData = localStorage.getItem('steelGalaxyAnalytics');
        let analytics = existingData ? JSON.parse(existingData) : {
          totalVisitors: 0,
          todayVisitors: 0,
          countries: {},
          lastVisit: '',
          currentVisitor: null
        };

        // Check if this is a new visitor (using sessionStorage)
        const isNewVisitor = !sessionStorage.getItem('visited');
        
        if (isNewVisitor) {
          // Increment visitor count
          analytics.totalVisitors += 1;
          
          // Check if it's a new day for today's count
          const today = new Date().toDateString();
          const lastVisitDate = analytics.lastVisit ? new Date(analytics.lastVisit).toDateString() : '';
          
          if (today !== lastVisitDate) {
            analytics.todayVisitors = 1;
          } else {
            analytics.todayVisitors += 1;
          }

          // Try to get visitor's country using IP geolocation
          try {
            const response = await fetch('https://ipapi.co/json/');
            const locationData = await response.json();
            
            const country = locationData.country_name || 'Unknown';
            
            // Update country statistics
            analytics.countries[country] = (analytics.countries[country] || 0) + 1;
            
            // Set current visitor info
            analytics.currentVisitor = {
              country: country,
              timestamp: new Date().toISOString()
            };
          } catch (error) {
            // Fallback if geolocation fails
            analytics.countries['Unknown'] = (analytics.countries['Unknown'] || 0) + 1;
            analytics.currentVisitor = {
              country: 'Unknown',
              timestamp: new Date().toISOString()
            };
          }

          analytics.lastVisit = new Date().toISOString();
          
          // Mark as visited in this session
          sessionStorage.setItem('visited', 'true');
          
          // Save updated analytics
          localStorage.setItem('steelGalaxyAnalytics', JSON.stringify(analytics));
        }

        setVisitorData(analytics);
        setIsLoading(false);
      } catch (error) {
        console.error('Analytics initialization error:', error);
        setIsLoading(false);
      }
    };

    initializeAnalytics();
  }, []);

  const getTopCountries = () => {
    return Object.entries(visitorData.countries)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString();
  };

  if (isLoading) {
    return (
      <section id="analytics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading analytics...</p>
          </div>
        </div>
      </section>
    );
  }

  return (


    
    <section id="analytics" className="py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">STEEL GALAXAY Analytics</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-time visitor statistics and geographic insights
          </p>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Visitors</p>
                <p className="text-3xl font-bold">{visitorData.totalVisitors}</p>
              </div>
              <div className="bg-blue-400 p-3 rounded-lg">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Today's Visitors</p>
                <p className="text-3xl font-bold">{visitorData.todayVisitors}</p>
              </div>
              <div className="bg-green-400 p-3 rounded-lg">
                <Eye className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Countries</p>
                <p className="text-3xl font-bold">{Object.keys(visitorData.countries).length}</p>
              </div>
              <div className="bg-purple-400 p-3 rounded-lg">
                <Globe className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Growth Rate</p>
                <p className="text-3xl font-bold">+{Math.round((visitorData.todayVisitors / Math.max(visitorData.totalVisitors - visitorData.todayVisitors, 1)) * 100)}%</p>
              </div>
              <div className="bg-orange-400 p-3 rounded-lg">
                <TrendingUp className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Countries */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-blue-600" />
              Top Visiting Countries
            </h3>
            
            {getTopCountries().length > 0 ? (
              <div className="space-y-4">
                {getTopCountries().map(([country, count], index) => (
                  <div key={country} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="font-medium text-slate-900">{country}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-slate-200 rounded-full h-2 w-24">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(count / visitorData.totalVisitors) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600 text-center py-8">No visitor data available yet</p>
            )}
          </div>

          {/* Current Session Info */}
          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-green-600" />
              Current Session
            </h3>
            
            <div className="space-y-6">
              {visitorData.currentVisitor ? (
                <>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-slate-900 mb-2">Your Location</h4>
                    <p className="text-slate-600">{visitorData.currentVisitor.country}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-slate-900 mb-2">Visit Time</h4>
                    <p className="text-slate-600">{formatDate(visitorData.currentVisitor.timestamp)}</p>
                  </div>
                </>
              ) : (
                <div className="bg-white p-4 rounded-lg border-l-4 border-slate-300">
                  <p className="text-slate-600">Session information not available</p>
                </div>
              )}
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-slate-900 mb-2">Last Activity</h4>
                <p className="text-slate-600">{formatDate(visitorData.lastVisit)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Note */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">Analytics Information</h4>
          <p className="text-blue-800 mb-2">
            This analytics system tracks unique visitors using browser session storage and provides basic geographic information using IP geolocation.
          </p>
          <p className="text-blue-700 text-sm">
            Data is stored locally in your browser and includes visitor counts, geographic distribution, and session information. 
            For production use, consider implementing a comprehensive analytics solution like Google Analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;