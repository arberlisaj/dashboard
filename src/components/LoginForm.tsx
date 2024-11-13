import useAuthStore from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import Button from './Button';

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
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
      {errors.username && <p>{errors.username.message}</p>}
      <label htmlFor="password">Password</label>
      <input id="password" type="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}
      <Button type="submit" className="bg-green-600 text-white">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
