import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import heroWaves from '@/assets/hero-waves.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroWaves} 
          alt="Caribbean waves background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60" />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl float-animation parallax-element" data-speed="0.2" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl float-animation parallax-element" style={{animationDelay: '2s'}} data-speed="0.3" />
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-primary/15 rounded-full blur-lg float-animation parallax-element" style={{animationDelay: '4s'}} data-speed="0.1" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="scroll-animate">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-gradient leading-[0.9] mb-8">
              {t('hero.headline')}
            </h1>
          </div>
          
          <div className="scroll-animate-left">
            <p className="text-xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              {t('hero.subheadline')}
            </p>
          </div>
          
          <div className="pt-8 scroll-animate-scale">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="relative bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:to-primary transition-all duration-500 text-xl px-12 py-8 rounded-full glow-effect hover-glow animate-pulse-glow group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {t('hero.cta')}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700 group-hover:animate-shimmer" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;