import useAuth from '@/hooks/useAuth';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
