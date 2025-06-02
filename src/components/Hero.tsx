
import React from 'react';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Reliable
                <span className="block text-blue-200">Transportation</span>
                <span className="block">Solutions</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Your trusted partner for efficient logistics and transportation services. 
                We deliver excellence across the globe with unmatched reliability and speed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span>Book Your Shipment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm font-medium">Secure</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm font-medium">On Time</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm font-medium">Global</p>
              </div>
            </div>
          </div>

          {/* Logistics Vehicle Images */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main Transport Vehicle */}
              <div className="relative w-96 h-64 rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Professional logistics transport vehicle"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Blue overlay blend */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                
                {/* LogiTrans Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">LT</span>
                    </div>
                    <span className="text-blue-900 font-semibold">LogiTrans</span>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Fleet Management</h3>
                  <p className="text-blue-100 text-sm">Professional logistics solutions</p>
                </div>
              </div>

              {/* Dispatch Bike - Positioned as overlay */}
              <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-xl overflow-hidden shadow-xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Fast dispatch motorcycle delivery"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Blue overlay blend */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800/50 via-blue-700/30 to-transparent mix-blend-multiply"></div>
                
                {/* Speed indicator */}
                <div className="absolute top-2 right-2 bg-blue-600/90 backdrop-blur-sm rounded-full p-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Label */}
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-semibold">Express Delivery</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 left-1/2 w-16 h-16 bg-blue-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
