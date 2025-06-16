
import React from 'react';
import { ArrowLeft, MapPin, Clock, Truck, Calendar, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Booking = () => {
  const availableRoutes = [
    {
      id: 1,
      from: "Lagos",
      to: "Abuja",
      distance: "776 km",
      estimatedTime: "8-10 hours",
      type: "Express Route"
    },
    {
      id: 2,
      from: "Lagos",
      to: "Port Harcourt",
      distance: "463 km",
      estimatedTime: "6-8 hours",
      type: "Regular Route"
    },
    {
      id: 3,
      from: "Abuja",
      to: "Kano",
      distance: "356 km",
      estimatedTime: "4-6 hours",
      type: "Express Route"
    },
    {
      id: 4,
      from: "Lagos",
      to: "Ibadan",
      distance: "128 km",
      estimatedTime: "2-3 hours",
      type: "Local Route"
    },
    {
      id: 5,
      from: "Lagos",
      to: "Benin City",
      distance: "316 km",
      estimatedTime: "4-5 hours",
      type: "Regular Route"
    },
    {
      id: 6,
      from: "Abuja",
      to: "Jos",
      distance: "215 km",
      estimatedTime: "3-4 hours",
      type: "Regular Route"
    }
  ];

  const getRouteTypeColor = (type: string) => {
    switch (type) {
      case "Express Route":
        return "bg-green-100 text-green-800";
      case "Regular Route":
        return "bg-blue-100 text-blue-800";
      case "Local Route":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Book Your Shipment</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Coming Soon Notice */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Calendar className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Online Booking Coming Soon!</h3>
              <p className="text-blue-800 mb-4">
                Our online booking system is currently under development. In the meantime, please contact us directly to book your shipment using any of our available routes below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2 text-blue-700">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+234 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-700">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">booking@ucwheels.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Routes */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableRoutes.map((route) => (
              <Card key={route.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{route.from} → {route.to}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRouteTypeColor(route.type)}`}>
                      {route.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{route.distance}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{route.estimatedTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Truck className="w-4 h-4" />
                      <span className="text-sm">Full logistics support</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4" 
                    variant="outline"
                    onClick={() => window.open('tel:+2341234567890')}
                  >
                    Call to Book
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">How to Book</CardTitle>
              <CardDescription>Follow these simple steps to book your shipment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Choose Your Route</h4>
                    <p className="text-sm text-gray-600">Select from our available routes above</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Contact Us</h4>
                    <p className="text-sm text-gray-600">Call or email us with your shipment details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Get Quote</h4>
                    <p className="text-sm text-gray-600">Receive pricing and scheduling information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-medium">Confirm Booking</h4>
                    <p className="text-sm text-gray-600">Finalize your shipment details and payment</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What We Need</CardTitle>
              <CardDescription>Information required for your booking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Pickup and delivery addresses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Package dimensions and weight</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Preferred delivery date</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Contact information</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Special handling requirements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">Insurance preferences</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-sm mb-2">💡 Pro Tip</h4>
                <p className="text-sm text-gray-600">
                  Have your package ready and measured for faster quote processing!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Ship?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our logistics experts are standing by to help you with your shipment. Contact us now for a quick quote and to schedule your pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('tel:+2341234567890')}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('mailto:booking@ucwheels.com')}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
