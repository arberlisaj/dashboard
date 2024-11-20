import CoursesSvg from '@/assets/aside/book.svg';
import CurriculumSvg from '@/assets/aside/bookmark-check.svg';
import DiscussionSvg from '@/assets/aside/chat.svg';
import DashboardSvg from '@/assets/aside/house-door.svg';
import ProfileSvg from '@/assets/aside/person.svg';
import PreferencesSvg from '@/assets/aside/preferences.svg';
import DashboardLogo from '@/components/DashboardLogo';
import { NavLink } from 'react-router-dom';

interface Props {
  handleCloseAside?: () => void;
  className?: string;
}

const Aside = ({ handleCloseAside, className }: Props) => {
  console.log(handleCloseAside);
  return (
    <aside className={'hidden h-screen bg-aside_bg text-white ' + className}>
      <header className="border-b border-gray-700 py-3 pl-3">
        <DashboardLogo />
      </header>
      <ul>
        <li className="aside-li">
          <NavLink to="/">
            <img src={DashboardSvg} alt="Dashboard" />
            Dashboard
          </NavLink>
        </li>
        <li className="aside-li">
          <NavLink to="/courses">
            <img src={CoursesSvg} alt="Courses" />
            Courses
          </NavLink>
        </li>
        <li className="aside-li">
          <NavLink to="/curriculum">
            <img src={CurriculumSvg} alt="Curriculum" />
            Curriculum
          </NavLink>
        </li>
        <li className="aside-li">
          <NavLink to="/discussion">
            <img src={DiscussionSvg} alt="Discussion" />
            Discussion
          </NavLink>
        </li>
      </ul>
      <hr className="my-1 border-gray-700" />
      <ul className="">
        <li className="aside-li">
          <NavLink to="/profile">
            <img src={ProfileSvg} alt="Profile" />
            Profile
          </NavLink>
        </li>
        <li className="aside-li">
          <NavLink to="/preferences">
            <img src={PreferencesSvg} alt="Preferences" />
            Preferences
          </NavLink>
        </li>
      </ul>
      <hr className="my-1 border-gray-700" />
    </aside>
  );
};

export default Aside;
