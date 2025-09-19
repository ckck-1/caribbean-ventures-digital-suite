import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Settings, Globe } from 'lucide-react';

const WhyChooseUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('why.comprehensive.title'),
      description: t('why.comprehensive.description'),
      delay: '0s'
    },
    {
      icon: Users,
      title: t('why.team.title'),
      description: t('why.team.description'),
      delay: '0.1s'
    },
    {
      icon: Settings,
      title: t('why.customized.title'),
      description: t('why.customized.description'),
      delay: '0.2s'
    },
    {
      icon: Globe,
      title: t('why.experience.title'),
      description: t('why.experience.description'),
      delay: '0.3s'
    }
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-gradient-to-b from-background to-background/90 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-glow rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-gradient mb-8 leading-tight">
            {t('why.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto stagger-container">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="scroll-animate stagger-child"
              >
                <Card className="surface-card interactive-card h-full group text-center hover-lift hover-glow relative overflow-hidden">
                  <CardHeader className="pb-6 pt-8">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary rounded-2xl group-hover:scale-110 transition-all duration-500 glow-effect animate-icon-bounce" />
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:rotate-12 transition-all duration-500">
                        <IconComponent className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8">
                    <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;