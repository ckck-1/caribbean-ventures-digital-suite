import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CV</span>
              </div>
              <span className="text-lg font-heading font-bold text-foreground">
                Caribbean Ventures
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {t('hero.subheadline')}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-foreground font-heading font-semibold">Services</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('solutions')}
                className="block text-muted hover:text-primary transition-smooth text-sm"
              >
                {t('footer.consulting')}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block text-muted hover:text-primary transition-smooth text-sm"
              >
                {t('footer.admin')}
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="block text-muted hover:text-primary transition-smooth text-sm"
              >
                {t('footer.financial')}
              </button>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-foreground font-heading font-semibold">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted hover:text-primary transition-smooth text-sm">
                {t('footer.privacy')}
              </a>
              <a href="#" className="block text-muted hover:text-primary transition-smooth text-sm">
                {t('footer.terms')}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-foreground font-heading font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-muted text-sm">{t('contact.address')}</p>
              <a 
                href={`mailto:${t('contact.email')}`}
                className="block text-muted hover:text-primary transition-smooth text-sm"
              >
                {t('contact.email')}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;