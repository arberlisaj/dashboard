import MenuSvg from '@/assets/navbar/list.svg';
import DarkMode from '@/components/DarkMode';
import DashboardLogo from '@/components/DashboardLogo';

interface Props {
  handleAsideState: () => void;
}

const Navbar = ({ handleAsideState }: Props) => {
  return (
    <nav className="col-span-5 p-2 md:px-3 py-3 w-full flex justify-between gap-2 items-center bg-navbar_bg">
      <DashboardLogo className="md:hidden" />
      <div className="flex items-center gap-1 ml-auto">
        <DarkMode />
        <button onClick={handleAsideState} className="md:hidden">
          <img src={MenuSvg} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
