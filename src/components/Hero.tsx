
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

          {/* Logo/Image Section */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-blue-800 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-blue-900">LT</span>
                </div>
                <h3 className="text-2xl font-bold">LogiTrans</h3>
                <p className="text-blue-200">Moving Forward Together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
