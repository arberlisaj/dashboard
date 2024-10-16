import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Courses from './pages/Courses';
import Curriculum from './pages/Curriculum';
import Dashboard from './pages/Dashboard';
import Discussion from './pages/Discussion';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'courses', element: <Courses /> },
      { path: 'curriculum', element: <Curriculum /> },
      { path: 'discussion', element: <Discussion /> },
    ],
  },
]);

export default router;
