import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.headline': 'Boost Your Business Growth with Caribbean Ventures',
    'hero.subheadline': 'Strategic, financial, and administrative solutions designed for your success.',
    'hero.cta': 'Get Started',
    
    // Solutions Section
    'solutions.title': 'Our Solutions',
    'solutions.business.title': 'Business Consulting',
    'solutions.business.description': 'Feasibility analysis, optimization of internal processes, strategic decision-making, market research & financial planning',
    'solutions.admin.title': 'Administrative & Accounting Management',
    'solutions.admin.description': 'Payroll & HR management, tax & legal procedures, accounting & auditing services, electronic invoicing & supplier management',
    'solutions.financial.title': 'Financial Consulting',
    'solutions.financial.description': 'Financial planning & budgeting, cash flow management, tax optimization, financing sources search',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.comprehensive.title': 'Comprehensive Care',
    'why.comprehensive.description': 'End-to-end solutions for all your business needs',
    'why.team.title': 'Expert Legal & Accounting Team',
    'why.team.description': 'Highly trained professionals with deep expertise',
    'why.customized.title': 'Customized Solutions',
    'why.customized.description': 'Tailored strategies that fit your unique business',
    'why.experience.title': 'Local & International Experience',
    'why.experience.description': 'Global expertise with local market knowledge',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Bávaro, Punta Cana, Dominican Republic',
    'contact.email': 'contact@caribbean.ventures',
    
    // Footer
    'footer.consulting': 'Business Consulting',
    'footer.admin': 'Admin & Accounting',
    'footer.financial': 'Financial Consulting',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.copyright': '© 2024 Caribbean Ventures. All rights reserved',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.headline': 'Impulsa el Crecimiento de tu Negocio con Caribbean Ventures',
    'hero.subheadline': 'Soluciones estratégicas, financieras y administrativas diseñadas para tu éxito.',
    'hero.cta': 'Comenzar',
    
    // Solutions Section
    'solutions.title': 'Nuestras Soluciones',
    'solutions.business.title': 'Consultoría Empresarial',
    'solutions.business.description': 'Análisis de factibilidad, optimización de procesos internos, toma de decisiones estratégicas, investigación de mercado y planificación financiera',
    'solutions.admin.title': 'Gestión Administrativa y Contable',
    'solutions.admin.description': 'Gestión de nómina y RRHH, procedimientos fiscales y legales, servicios de contabilidad y auditoría, facturación electrónica y gestión de proveedores',
    'solutions.financial.title': 'Consultoría Financiera',
    'solutions.financial.description': 'Planificación financiera y presupuestaria, gestión de flujo de caja, optimización fiscal, búsqueda de fuentes de financiamiento',
    
    // Why Choose Us
    'why.title': 'Por Qué Elegirnos',
    'why.comprehensive.title': 'Atención Integral',
    'why.comprehensive.description': 'Soluciones completas para todas sus necesidades empresariales',
    'why.team.title': 'Equipo Legal y Contable Experto',
    'why.team.description': 'Profesionales altamente capacitados con profunda experiencia',
    'why.customized.title': 'Soluciones Personalizadas',
    'why.customized.description': 'Estrategias adaptadas que se ajustan a su negocio único',
    'why.experience.title': 'Experiencia Local e Internacional',
    'why.experience.description': 'Experiencia global con conocimiento del mercado local',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.address': 'Bávaro, Punta Cana, República Dominicana',
    'contact.email': 'contact@caribbean.ventures',
    
    // Footer
    'footer.consulting': 'Consultoría Empresarial',
    'footer.admin': 'Admin y Contabilidad',
    'footer.financial': 'Consultoría Financiera',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.copyright': '© 2024 Caribbean Ventures. Todos los derechos reservados',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};