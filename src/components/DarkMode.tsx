import { useEffect, useState } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    localStorage.theme || 'dark',
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.theme = theme;
  }, [theme]);

  return (
    <button
      type="button"
      className="text-primary"
      onClick={() =>
        setTheme((prevValue) => (prevValue === 'dark' ? 'light' : 'dark'))
      }
    >
      {theme} theme
    </button>
  );
};

export default DarkMode;
