import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <main className="grid-cols-5 md:grid">
      <Aside className="pl-2 md:block" />
      <section className="col-span-4">
        <Navbar />
        <div className="p-2">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Layout;
