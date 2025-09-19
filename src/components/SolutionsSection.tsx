import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import businessConsulting from '@/assets/business-consulting.jpg';
import adminManagement from '@/assets/admin-management.jpg';
import financialConsulting from '@/assets/financial-consulting.jpg';

const SolutionsSection = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t('solutions.business.title'),
      description: t('solutions.business.description'),
      image: businessConsulting,
      delay: '0s'
    },
    {
      title: t('solutions.admin.title'),
      description: t('solutions.admin.description'),
      image: adminManagement,
      delay: '0.2s'
    },
    {
      title: t('solutions.financial.title'),
      description: t('solutions.financial.description'),
      image: financialConsulting,
      delay: '0.4s'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-background to-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t('solutions.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`scroll-animate stagger-child ${
                index === 0 ? 'scroll-animate-left' : 
                index === 1 ? 'scroll-animate' : 
                'scroll-animate-right'
              }`}
            >
              <Card className="surface-card h-full hover:scale-105 transition-smooth group cursor-pointer hover-lift hover-glow">
                <CardHeader className="text-center pb-6">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-lg overflow-hidden group-hover:scale-110 transition-smooth">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-foreground mb-3">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted leading-relaxed text-center">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;