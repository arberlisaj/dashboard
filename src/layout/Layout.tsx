import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import Navbar from './Navbar';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <main className="grid grid-cols-5 ">
      <Aside className="sm:block pl-2" />
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
