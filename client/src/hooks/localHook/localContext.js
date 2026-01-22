import { createContext, useState } from 'react';


export const LocalContext = createContext({
    language : 'en',
    changeLocal : () => {}
});

export const LocalProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
  
    const changeLocal = (newLanguge) => {
      localStorage.setItem('language', JSON.stringify(newLanguge));
      setLanguage(newLanguge);
    };
  
    return (
      <LocalContext.Provider value={{ language, changeLocal }}>
        {children}
      </LocalContext.Provider>
    );
  };