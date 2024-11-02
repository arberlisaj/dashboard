import DarkModeSvg from '@/assets/navbar/moon.svg';
import LightModeSvg from '@/assets/navbar/sun.svg';
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
      className="p-0.5 rounded"
      onClick={() =>
        setTheme((prevValue) => (prevValue === 'dark' ? 'light' : 'dark'))
      }
    >
      {theme === 'dark' ? (
        <img src={DarkModeSvg} alt="Dark Mode" />
      ) : (
        <img src={LightModeSvg} alt="Light Mode" />
      )}
    </button>
  );
};

export default DarkMode;
