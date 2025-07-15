
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import AppPromoPage from '../components/AppPromoPage';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <AppPromoPage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
