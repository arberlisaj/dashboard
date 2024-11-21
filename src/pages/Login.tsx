import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Login = () => {
  const [loginState, setLoginState] = useState(true);

  function handleToggle() {
    setLoginState((prev) => !prev);
  }

  return (
    <section className="min-h-screen items-center bg-white p-2">
      <div className="mx-auto max-w-[600px] md:pt-10">
        <div>
          <h1 className="text-center text-4xl text-blue-800">
            Keep track of students.
          </h1>
          <p className="my-1 text-center text-lg text-gray-500">
            Keep track of your students our dashboard blah blah the usual crap.
            I am just trying to fill this blank space.
          </p>
        </div>
        <div className="mx-auto max-w-[450px] rounded border p-3">
          {loginState ? <LoginForm /> : <SignupForm />}
          <hr className="my-2" />
          <Button onClick={handleToggle}>
            {loginState ? 'Sign Up' : 'Login'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
