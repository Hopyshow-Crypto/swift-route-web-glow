
import React from 'react';
import { Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Your safety is our priority with verified drivers and secure payment systems"
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Punctual departures and arrivals with real-time tracking updates"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven track record of excellence in transportation services"
    }
  ];

  const stats = [
    { label: "Happy Customers", value: "50,000+" },
    { label: "Routes Covered", value: "100+" },
    { label: "Daily Trips", value: "500+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Nigeria's Most
                <span className="block text-blue-600">Trusted Transport</span>
                Service
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the difference with U&C Wheels - where comfort meets reliability, 
                and every journey is a testament to our commitment to excellence.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-200">
                    <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 group">
                <span>Book Your Journey</span>
                <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Modern luxury bus interior with comfortable seating"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/30"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-gray-600">Customer Satisfaction</p>
              </div>

              <div className="absolute bottom-6 right-6 bg-blue-600/95 backdrop-blur-sm rounded-xl px-4 py-3 text-white shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Premium Comfort</span>
                </div>
                <p className="text-sm text-blue-100">AC • WiFi • Entertainment</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
