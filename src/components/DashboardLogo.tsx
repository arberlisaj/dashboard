import { Link } from 'react-router-dom';

const DashboardLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      className={'flex items-center gap-0.5 font-bold text-white ' + className}
      to="/"
    >
      Dashboard
    </Link>
  );
};

export default DashboardLogo;
