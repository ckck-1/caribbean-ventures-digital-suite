import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-muted hover:text-foreground transition-smooth hover:bg-accent/20"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'en' ? 'ESP' : 'ENG'}
    </Button>
  );
};

export default LanguageToggle;