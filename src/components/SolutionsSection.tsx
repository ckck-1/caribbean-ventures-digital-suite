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
    <section id="solutions" className="py-32 bg-gradient-to-b from-background via-background/95 to-surface-elevated relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-gradient mb-8 leading-tight">
            {t('solutions.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto stagger-container">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`scroll-animate stagger-child ${
                index === 0 ? 'scroll-animate-left' : 
                index === 1 ? 'scroll-animate' : 
                'scroll-animate-right'
              }`}
            >
              <Card className="surface-card interactive-card h-full group cursor-pointer hover-lift hover-glow relative overflow-hidden">
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-xl">
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <CardDescription className="text-muted-foreground leading-relaxed text-center text-lg group-hover:text-foreground/80 transition-colors duration-300">
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