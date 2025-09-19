import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useScrollAnimations from '@/hooks/useScrollAnimations';

const Index = () => {
  // Initialize scroll animations
  useScrollAnimations();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
