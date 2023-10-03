import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");


  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}`}>
      {children}
      </div>
    </ThemeContext.Provider>  
    )
}

export default ThemeProvider