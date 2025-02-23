import MenuSvg from '@/assets/navbar/list.svg';
import DashboardLogo from '@/components/DashboardLogo';
import { Button } from '@/components/ui/button';

interface Props {
  handleAsideState: () => void;
}

const Navbar = ({ handleAsideState }: Props) => {
  return (
    <nav className="col-span-5 flex w-full items-center justify-between gap-2 bg-navbar_bg p-2 py-3 md:px-3">
      <DashboardLogo className="md:hidden" />
      <div className="ml-auto flex items-center gap-1">
        <Button variant="default">Profile</Button>
        <button onClick={handleAsideState} className="md:hidden">
          <img src={MenuSvg} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
