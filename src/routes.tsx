import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Discussion from './pages/Discussion';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'discussion', element: <Discussion /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
