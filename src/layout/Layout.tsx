import useAuthStore from '@/store';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import Navbar from './Navbar';

const Layout = () => {
  const { theme } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.theme = theme;
  }, [theme]);

  return (
    <main className="grid-cols-5 md:grid">
      <Aside className="pl-2 md:block" />
      <section className="col-span-4">
        <Navbar handleAsideState={() => setIsOpen((prevValue) => !prevValue)} />
        <div className="p-2">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Layout;
