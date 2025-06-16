
import React from 'react';

const AppPromoPage = () => {
  return (
    <div className="bg-white text-center">
      {/* Top Headline */}
      <div className="py-12 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Main Bus Destinations to & from in Nigeria
        </h2>
        <div className="flex justify-center gap-8 text-lg font-semibold text-teal-800">
          <div className="cursor-pointer hover:underline flex items-center">
            Lagos <span className="ml-2">&rarr;</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center">
            Abuja <span className="ml-2">&rarr;</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center">
            Owerri <span className="ml-2">&rarr;</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center">
            Port-Harcourt <span className="ml-2">&rarr;</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center">
            Umuahia <span className="ml-2">&rarr;</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center">
            Abakaliki <span className="ml-2">&rarr;</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center">
            Onitsha <span className="ml-2">&rarr;</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center">
            Akwaibom <span className="ml-2">&rarr;</span>
          </div>
          <div className="cursor-pointer hover:underline flex items-center">
            ...and many more. 
          </div>
        </div>
      </div>

      {/* Blue App Promo Section */}
      <div className="bg-cyan-400 py-16 px-6 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto rounded-lg text-left text-white gap-12">
        {/* Text */}
        <div className="max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Enjoy a better travel experience with U&C Wheels mobile app
          </h3>
          <p className="text-base mb-6">
            All your rides and tickets in one place, up-to-date info and exclusive mobile-only features.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/apple-app-store-badge-a2e763b82653be76.svg" alt="App Store" className="h-14 w-auto" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="/images/en_badge_web_generic.png" alt="Google Play" className="h-14 w-auto" />
            </a>
          </div>
        </div>

        {/* QR Phone Image */}
        <div className="w-64">
          <img src="/images/uandc-app-phone.png" alt="QR Code on phone" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default AppPromoPage;
