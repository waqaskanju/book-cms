import { Link } from 'react-router-dom';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <Link className="nav-brand" to="/">Bookstore CMS</Link>
      <ul className="nav-links">
        <li>
          <Link
            aria-current="page"
            className="nav-link active-link"
            to="/"
          >
            Books
          </Link>
        </li>
        <li><Link className="nav-link" to="/Categories">CATEGORIES</Link></li>
      </ul>
      <button className="icon-button" type="button">
        <span className="primary-color">

          <FontAwesomeIcon icon={faUser} />
        </span>
      </button>
    </nav>
  );
}
