import logoSvg from '@/assets/navbar/buildings.svg';
import { Link } from 'react-router-dom';

const DashboardLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      className={'flex items-center gap-0.5 text-white ' + className}
      to="/"
    >
      <img src={logoSvg} alt="Website DashboardLogo" />
      Dashboard
    </Link>
  );
};

export default DashboardLogo;
