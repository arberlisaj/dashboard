import useAuthStore from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import Button from './Button';
import FormValidationMessage from './FormValidationMessage';

const schema = z.object({
  name: z.string().min(4, 'Name should be at least 4 characters long'),
  lastName: z.string().min(3, 'Last name is required'),
  username: z.string().min(4, 'Username should be at least 4 characters long'),
  email: z
    .string()
    .email('Invalid email')
    .min(6, 'Email should be at least 6 characters long'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type FormData = z.infer<typeof schema>;

const SignupForm = () => {
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
      <label htmlFor="name">Name</label>
      <input id="name" {...register('name')} />
      {errors.name && (
        <FormValidationMessage errorMessage={errors.name.message} />
      )}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" {...register('lastName')} />
      {errors.lastName && (
        <FormValidationMessage errorMessage={errors.lastName.message} />
      )}

      <label htmlFor="username">Username</label>
      <input id="username" {...register('username')} />
      {errors.username && (
        <FormValidationMessage errorMessage={errors.username.message} />
      )}

      <label htmlFor="email">Email</label>
      <input id="email" {...register('email')} />
      {errors.email && (
        <FormValidationMessage errorMessage={errors.email.message} />
      )}

      <label htmlFor="password">Password</label>
      <input id="password" type="password" {...register('password')} />
      {errors.password && (
        <FormValidationMessage errorMessage={errors.password.message} />
      )}

      <Button type="submit" className="bg-green-600 text-white">
        Signup
      </Button>
    </form>
  );
};

export default SignupForm;
