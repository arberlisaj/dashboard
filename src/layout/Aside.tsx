import CoursesSvg from '@/assets/aside/book.svg';
import CurriculumSvg from '@/assets/aside/bookmark-check.svg';
import DiscussionSvg from '@/assets/aside/chat.svg';
import DashboardSvg from '@/assets/aside/house-door.svg';
import ProfileSvg from '@/assets/aside/person.svg';
import { NavLink } from 'react-router-dom';

interface Props {
  handleCloseAside?: () => void;
  className?: string;
}

const Aside = ({ handleCloseAside, className }: Props) => {
  console.log(handleCloseAside);
  return (
    <aside className={'h-screen bg-aside_bg text-white hidden ' + className}>
      <header className="border-b border-gray-600">
        <h1 className="px-2 pb-1 pt-[25px] text-sm text-gray-100">
          Navigation
        </h1>
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
        <li className="aside-li">
          <NavLink to="/profile">
            <img src={ProfileSvg} alt="Profile" />
            Profile
          </NavLink>
        </li>
      </ul>
      <hr className="border-gray-600 my-1" />
    </aside>
  );
};

export default Aside;
