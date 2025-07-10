import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');

    // ✅ If "dark" is stored, apply dark
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);

      // ✅ If "light" is stored, make sure dark is removed
    } else if (stored === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);

      // ✅ If no storage at all, fallback to system
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
