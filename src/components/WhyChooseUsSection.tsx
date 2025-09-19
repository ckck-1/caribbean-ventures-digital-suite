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
    <section id="why-choose-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 fade-in-up">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <Card className="surface-card h-full hover:scale-105 transition-smooth group text-center">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth glow-effect">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-heading font-semibold text-foreground mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted leading-relaxed">
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