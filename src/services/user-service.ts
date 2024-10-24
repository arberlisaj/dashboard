import create from './http-service';

export type User = {
  id: number;
  name: string;
  email: string;
  website: string;
  address: {
    city: string;
  };
};

export default create('/users');
