import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Try to recover language from localStorage or default to Galician
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('isomery_lang');
    return saved || 'gl';
  });

  useEffect(() => {
    localStorage.setItem('isomery_lang', language);
    // Update document lang for SEO/Accessibility
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'gl' ? 'en' : 'gl'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
