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
    <div className="min-h-screen bg-white p-2">
      {loginState ? <LoginForm /> : <SignupForm />}
      <button onClick={handleToggle}>
        {loginState ? "Don't have " : 'Have '} an account?
      </button>
    </div>
  );
};

export default Login;
