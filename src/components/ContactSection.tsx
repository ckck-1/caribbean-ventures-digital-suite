import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-surface-elevated to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 fade-in-up">
            {t('contact.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 fade-in-up">
              <Card className="surface-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-foreground">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted">{t('contact.address')}</p>
                </CardContent>
              </Card>

              <Card className="surface-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-foreground">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={`mailto:${t('contact.email')}`}
                    className="text-primary hover:text-primary-glow transition-smooth"
                  >
                    {t('contact.email')}
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="fade-in-up stagger-1">
              <Card className="surface-card h-full">
                <CardContent className="p-0">
                  <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* 3D Location Pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg glow-effect animate-bounce">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Map Grid Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="grid grid-cols-8 grid-rows-6 w-full h-full">
                        {Array.from({ length: 48 }).map((_, i) => (
                          <div key={i} className="border border-primary/20" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center z-20">
                      <p className="text-muted text-sm">Punta Cana, Dominican Republic</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 fade-in-up stagger-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:scale-105 transition-smooth text-lg px-8 py-6 rounded-full glow-effect"
              onClick={() => window.location.href = `mailto:${t('contact.email')}`}
            >
              {t('hero.cta')}
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;