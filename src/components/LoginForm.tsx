import useAuthStore from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import Button from './Button';
import FormValidationMessage from './FormValidationMessage';

const schema = z.object({
  username: z.string().min(4, 'Username is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const login = useAuthStore((e) => e.login);
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    if (data.username === 'Arber' && data.password === 'password') {
      login(data.username);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input id="username" {...register('username')} />
      {errors.username && (
        <FormValidationMessage errorMessage={errors.username.message} />
      )}
      <label htmlFor="password">Password</label>
      <input id="password" type="password" {...register('password')} />
      {errors.password && (
        <FormValidationMessage errorMessage={errors.password.message} />
      )}
      <Button type="submit" className="bg-green-600 text-white">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
