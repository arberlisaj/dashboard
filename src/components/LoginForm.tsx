import useAuthStore from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import FormValidationMessage from './FormValidationMessage';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

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
    if (data.username === 'janedoe' && data.password === 'password') {
      login(data.username);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="username">Username</Label>
      <Input
        type="text"
        placeholder="e.g. janedoe"
        id="username"
        {...register('username')}
      />
      {errors.username && (
        <FormValidationMessage errorMessage={errors.username.message} />
      )}
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        placeholder="password"
        id="password"
        {...register('password')}
      />
      {errors.password && (
        <FormValidationMessage errorMessage={errors.password.message} />
      )}
      <Button className="mt-2" variant="outline" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
