import Logo from '@/assets/buildings.svg';
import MenuSvg from '@/assets/list.svg';
import ProfileSvg from '@/assets/person-circle.svg';
import DarkMode from '@/components/DarkMode';
import { Link } from 'react-router-dom';

interface Props {
  handleAsideState: () => void;
}

const Navbar = ({ handleAsideState }: Props) => {
  return (
    <nav className="p-2 py-3 h-fit w-full flex justify-between gap-2 items-center bg-navbar_bg">
      <Link className="text-white flex items-center gap-0.5" to="/">
        <img src={Logo} alt="Website Logo" />
        University
      </Link>
      <div className="flex items-center gap-1">
        <DarkMode />
        <button className="p-0.5">
          <img src={ProfileSvg} alt="profile" />
        </button>
        <button onClick={handleAsideState} className="sm:hidden">
          <img src={MenuSvg} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
