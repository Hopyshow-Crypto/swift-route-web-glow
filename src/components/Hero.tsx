import React from 'react';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay to maintain the blue gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-700/75"></div>
      <div className="relative z-10">
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

          {/* Logistics Vehicle Images - Keep expanded size but reduce text */}
          <div className="flex justify-center">
            <div className="relative scale-110 lg:scale-125">
              {/* Main Transport Vehicle - Keep larger size */}
              <div className="relative w-[440px] h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="images/uandc_bg.png"
                  alt="Professional logistics transport vehicle"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Blue overlay blend */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                
                {/* LogiTrans Badge - Reduce text size */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">U&C</span>
                    </div>
                    <span className="text-blue-900 font-semibold">Wheels Logistics</span>
                  </div>
                </div>

                {/* Content overlay - Reduce text size */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Transport Services</h3>
                  <p className="text-blue-100 text-sm">& Professional logistics solutions</p>
                </div>
              </div>

              {/* Dispatch Bike - Keep bigger size but reduce text */}
              <div className="absolute -bottom-8 -right-8 w-56 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white group">
                <img
                  src="images/our-dispatch-bikes.jpg"
                  alt="Fast dispatch motorcycle delivery"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Blue overlay blend */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800/50 via-blue-700/30 to-transparent mix-blend-multiply"></div>
                
                {/* Speed indicator - Keep smaller */}
                <div className="absolute top-2 right-2 bg-blue-600/90 backdrop-blur-sm rounded-full p-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Label - Keep smaller text */}
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-semibold">Express Delivery</p>
                </div>
              </div>

              {/* Decorative elements - Keep smaller */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 left-1/2 w-16 h-16 bg-blue-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
