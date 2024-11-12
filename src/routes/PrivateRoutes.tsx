import useAuthStore from '@/store';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const { user } = useAuthStore();

  console.log(user);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
