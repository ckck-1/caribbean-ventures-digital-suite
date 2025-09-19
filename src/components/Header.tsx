import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CV</span>
            </div>
            <span className="text-xl font-heading font-bold text-foreground">
              Caribbean Ventures
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-muted hover:text-foreground transition-smooth"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-muted hover:text-foreground transition-smooth"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-muted hover:text-foreground transition-smooth"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted hover:text-foreground transition-smooth"
            >
              {t('nav.contact')}
            </button>
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted hover:text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-muted hover:text-foreground transition-smooth py-2"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="block w-full text-left text-muted hover:text-foreground transition-smooth py-2"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="block w-full text-left text-muted hover:text-foreground transition-smooth py-2"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-muted hover:text-foreground transition-smooth py-2"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;