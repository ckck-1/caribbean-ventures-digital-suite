import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-surface-elevated via-background to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-primary-glow rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-gradient mb-8 leading-tight">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 scroll-animate-left stagger-container">
              <Card className="surface-card interactive-card hover-lift hover-glow group stagger-child">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center space-x-4 text-foreground text-xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 glow-effect">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <span className="group-hover:text-gradient transition-all duration-300">Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-18">
                  <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {t('contact.address')}
                  </p>
                </CardContent>
              </Card>

              <Card className="surface-card interactive-card hover-lift hover-glow group stagger-child">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center space-x-4 text-foreground text-xl">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 glow-effect">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <span className="group-hover:text-gradient transition-all duration-300">Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-18">
                  <a 
                    href={`mailto:${t('contact.email')}`}
                    className="text-primary hover:text-primary-glow transition-all duration-300 text-lg font-medium underline decoration-2 underline-offset-4 decoration-primary/30 hover:decoration-primary-glow"
                  >
                    {t('contact.email')}
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Map */}
            <div className="scroll-animate-right">
              <Card className="surface-card interactive-card hover-lift hover-glow h-full group overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-primary/10 via-primary/5 to-primary-glow/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Animated Background Circles */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl float-animation" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary-glow/20 rounded-full blur-lg float-animation" style={{animationDelay: '2s'}} />
                    
                    {/* 3D Location Pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-2xl glow-effect animate-pulse-glow group-hover:scale-125 transition-all duration-500">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                        <div className="px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg border border-primary/30">
                          <p className="text-foreground text-sm font-medium">Punta Cana</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Map Grid Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
                        {Array.from({ length: 96 }).map((_, i) => (
                          <div key={i} className="border border-primary/10 group-hover:border-primary/20 transition-colors duration-300" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Floating Decoration */}
                    <div className="absolute bottom-4 right-4 text-center z-10">
                      <div className="px-3 py-2 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
                        <p className="text-primary text-xs font-medium">Dominican Republic</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="text-center mt-16 scroll-animate-scale">
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:to-primary transition-all duration-500 text-xl px-12 py-8 rounded-full glow-effect hover-glow animate-pulse-glow group overflow-hidden"
              onClick={() => window.location.href = `mailto:${t('contact.email')}`}
            >
              <span className="relative z-10 flex items-center">
                {t('hero.cta')}
                <Mail className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700 group-hover:animate-shimmer" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;