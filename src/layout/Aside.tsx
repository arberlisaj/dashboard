import { Link } from 'react-router-dom';

interface Props {
  handleCloseAside?: () => void;
  className?: string;
}

const Aside = ({ handleCloseAside, className }: Props) => {
  console.log(handleCloseAside);
  return (
    <aside className={'h-screen bg-aside_bg text-white hidden ' + className}>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/curriculum">Curriculum</Link>
        </li>
        <li>
          <Link to="/discussion">Discussion</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
