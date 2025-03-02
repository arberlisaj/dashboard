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
    <section className="flex min-h-screen flex-col justify-between gap-10">
      <div className="mx-auto max-w-[600px] p-2 md:pt-8">
        <div>
          <h1 className="text-center text-4xl text-purple-700">
            Keep track of students.
          </h1>
          <p className="mb-4 mt-1 text-center text-lg text-gray-500">
            Keep track of your students our dashboard blah blah the usual crap.
            I am just trying to fill this blank space yada yada.
          </p>
        </div>
        <div className="mx-auto max-w-[450px] rounded border border-border_clr p-3 dark:bg-red-300">
          {loginState ? <LoginForm /> : <SignupForm />}
          <Button className="mt-1.5 px-1" variant="link" onClick={handleToggle}>
            {loginState ? "Don't have an account?" : 'Already have an account?'}
          </Button>
        </div>
      </div>

      <div className="bg-navbar_bg py-7">
        <p className="text-center text-gray-300">
          &copy; 2021 All Rights Reserved.{' '}
          <span className="text-purple-600">Privacy Policy</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
