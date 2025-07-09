import React from 'react';
import { Shield, Users, Factory, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Steel Galaxy</h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Leading the global steel export industry with premium quality fasteners and unmatched customer service
          </p>
        </div>

        {/* Content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-14 sm:mb-16">
          
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Your Trusted Steel Export Partner
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Steel Galaxy has been at the forefront of the steel export industry, providing high-quality 
              fasteners, nuts, bolts, and industrial materials to clients worldwide. Our commitment to 
              excellence and customer satisfaction has made us a preferred choice for businesses globally.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              With state-of-the-art manufacturing facilities and rigorous quality control processes, 
              we ensure that every product meets international standards and exceeds customer expectations.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 sm:pt-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-slate-700 text-sm sm:text-base"> In-House Quality Checks</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-slate-700 text-sm sm:text-base">Secure Packaging</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-slate-700 text-sm sm:text-base">Global Supply Chain</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-slate-700 text-sm sm:text-base">Custom Orders</span>
              </div>


            </div>
          </div>

          {/* Features cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-3 sm:mb-4">
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Quality First</h4>
              <p className="text-slate-600 text-sm sm:text-base">Rigorous quality control ensures every product meets international standards</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-3 sm:mb-4">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Expert Team</h4>
              <p className="text-slate-600 text-sm sm:text-base">Experienced professionals dedicated to your success</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-3 sm:mb-4">
                <Factory className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Modern Facilities</h4>
              <p className="text-slate-600 text-sm sm:text-base">State-of-the-art manufacturing and testing equipment</p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-3 sm:mb-4">
                <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-orange-600" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Reliability</h4>
              <p className="text-slate-600 text-sm sm:text-base">Consistent delivery and unmatched product reliability</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
