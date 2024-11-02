import { useNavigate } from 'react-router-dom';
import Button from './Button';

interface Props {
  title: string;
  message: string;
}

const NotFound = ({ title, message }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      <p className="text-xl my-1 mb-1.5"> {message}</p>
      <Button handleClick={() => navigate('/')}>Go Back</Button>
    </>
  );
};

export default NotFound;
