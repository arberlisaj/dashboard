import '../index.css';

import Button from '@/components/Button';
import useAuthStore from '@/store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  function handleLogin() {
    login('arberlisaj');
    navigate('/');
  }

  return (
    <div>
      <h1>You are not authenticated!</h1>
      <Button handleClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
