
import React from 'react';
import { Truck, Facebook, Twitter, LinkedIn, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">LogiTrans</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for reliable transportation and logistics solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <LinkedIn className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors duration-200">Freight Transportation</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">Express Delivery</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">Warehousing</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">Supply Chain Management</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">International Shipping</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors duration-200">Track Shipment</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">Get Quote</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">Customer Portal</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">News & Updates</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Logistics Avenue</li>
              <li>Transport City, TC 12345</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">+1 (555) 123-4567</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-200">info@logitrans.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LogiTrans. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors duration-200">Privacy Policy</span>
            <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors duration-200">Terms of Service</span>
            <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors duration-200">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
