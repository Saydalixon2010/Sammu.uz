
import { useState, useEffect } from 'react';

const Darkmode = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') || 'light';
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    const root = window.document.documentElement;
    root.classList.remove(theme);
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return [theme, toggleTheme];
};

export default Darkmode;
