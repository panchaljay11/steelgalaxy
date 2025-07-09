import React from 'react';
import {Globe, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-10 lg:gap-12 items-center">

          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium <span className="text-blue-400">Steel Products</span>
                <br />
                Worldwide Export
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 pt-2 leading-relaxed md:text-justify">
                Steel Galaxy is your trusted source for premium fasteners, nuts, bolts, and industrial materials delivered worldwide with top-notch quality and service. We also offer custom-made products based on your specific needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-row gap-4 md:gap-6 sm:items-star sm:justify-start items-center justify-center">
              <Link to="/products">
                <button 
                  onClick={scrollToProducts}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-[90px] sm:px-8 py-4 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
                >
                  <span>View Products</span>
                </button>
              </Link>

              <Link to="/contact">
                <button 
                  onClick={scrollToProducts}
                  className="border-2 border-white hover:bg-white hover:text-slate-800 text-white px-[90px] sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105"
                >
                  <span className='px-3'>Get Quote</span>
                </button>
              </Link>
            </div>

            {/* Stats (Icons Section - Fixed) */}
            <div className="flex flex-wrap sm:grid sm:grid-cols-3 gap-6 pt-4 sm:pt-14">
              <div className="flex-1 min-w-[120px] text-center flex flex-col items-center justify-center">
                <div className="flex justify-center mb-2">
                  <Globe className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">50+</div>
                <div className="text-slate-300 text-sm sm:text-base">Countries</div>
              </div>

              <div className="flex-1 min-w-[120px] text-center flex flex-col items-center justify-center">
                <div className="flex justify-center mb-2">
                  <Truck className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">24/7</div>
                <div className="text-slate-300 text-sm sm:text-base">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative sm:-mt-28 md:mt-0">
            <div className="bg-gradient-to-br from-blue-500 to-slate-600 rounded-3xl p-6 sm:p-8 animate-wiggle-slow">
              <div className="bg-white rounded-2xl p-4 sm:p-8 text-slate-900">
                <h3 className="text-lg sm:text-2xl font-bold mb-4">Quality Assurance</h3>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Premium Grade Steel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>International Standards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Fast Global Shipping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Competitive Pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animation Keyframe */}
      <style>
        {`
          @keyframes wiggle-slow {
            0% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
            100% { transform: rotate(-2deg); }
          }

          .animate-wiggle-slow {
            animation: wiggle-slow 2.8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
