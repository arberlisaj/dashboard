import { Link } from 'react-router-dom';
import DarkMode from '../components/DarkMode';

const Navbar = () => {
  return (
    <nav>
      <h1>Logo or sth</h1>
      <ul>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="discussion">Discussion</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <DarkMode />
    </nav>
  );
};

export default Navbar;
