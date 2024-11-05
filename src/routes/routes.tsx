import Layout from '@/layout/Layout';
import Courses from '@/pages/Courses';
import Curriculum from '@/pages/Curriculum';
import Dashboard from '@/pages/Dashboard';
import Discussion from '@/pages/Discussion';
import ErrorPage from '@/pages/ErrorPage';
import Login from '@/pages/Login';
import Preferences from '@/pages/Preferences';
import Profile from '@/pages/Profile';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoutes>
        <Layout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'courses', element: <Courses /> },
      { path: 'curriculum', element: <Curriculum /> },
      { path: 'discussion', element: <Discussion /> },
      { path: 'preferences', element: <Preferences /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
