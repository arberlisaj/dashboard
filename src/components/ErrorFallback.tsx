import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

interface Props {
  title: string;
  message: string;
}

const NotFound = ({ title, message }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl">{title}</h1>
      <p className="my-1 mb-1.5 text-xl"> {message}</p>
      <Button onClick={() => navigate('/')}>Go Back</Button>
    </>
  );
};

export default NotFound;
