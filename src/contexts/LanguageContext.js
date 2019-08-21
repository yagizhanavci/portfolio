import React, { useState, createContext } from 'react';

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('prefLanguage')
      ? localStorage.getItem('prefLanguage')
      : 'english',
  );
  const toggleLanguage = () => {
    let newLanguage = language === 'english' ? 'turkish' : 'english';
    localStorage.setItem('prefLanguage', newLanguage);
    setLanguage(newLanguage);
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
