import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments, faMagnifyingGlass, faRectangleList, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faComments, faMagnifyingGlass, faRectangleList, faUsers)

function Footer() {
  return (
    <nav className="footer">
      <Link to="/search" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /><span className="btn-name">search</span></Link>
      <Link to="/mylists" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-rectangle-list" /><span className="btn-name">lists</span></Link>
      <Link to="/friends" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-users" /><span className="btn-name">friends</span></Link>
      <Link to="/chat" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-comments" /><span className="btn-name">DMs</span></Link>
    </nav>
 );
}

export default Footer;