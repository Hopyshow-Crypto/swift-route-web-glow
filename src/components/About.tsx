
import React from 'react';
import { Users, Award, MapPin, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: MapPin, label: 'Global Locations', value: '50+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '25%' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About LogiTrans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the transportation and logistics industry with innovative solutions and unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Global Logistics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With over 15 years of experience in the transportation industry, LogiTrans has established itself 
              as a trusted partner for businesses worldwide. We specialize in providing comprehensive logistics 
              solutions that streamline operations and reduce costs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to innovation, sustainability, and customer satisfaction drives everything we do. 
              From small packages to large freight, we handle every shipment with the same level of care and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Our Services
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact</h4>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-blue-50">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h4>
            <p className="text-gray-600">
              To provide reliable, efficient, and cost-effective transportation solutions that exceed customer expectations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h4>
            <p className="text-gray-600">
              To be the global leader in sustainable transportation and logistics innovation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Our Values</h4>
            <p className="text-gray-600">
              Integrity, reliability, innovation, and customer-centricity guide every decision we make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
