import Button from '@/components/Button';
import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm';
import { useState } from 'react';

const Login = () => {
  // TODO: Refactor
  const [loginState, setLoginState] = useState(false);

  function handleToggle() {
    setLoginState((prev) => !prev);
  }

  return (
    <div className="bg-background min-h-screen p-2">
      {loginState ? <LoginForm /> : <SignupForm />}
      <Button handleClick={handleToggle}>
        {loginState ? 'Dont have ' : 'Have '} an account?
      </Button>
    </div>
  );
};

export default Login;
