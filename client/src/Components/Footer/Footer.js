import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments, faGift, faRectangleList, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faComments, faGift, faRectangleList, faUsers)

function Footer() {
  return (
    <nav className="footer">
      <Link to="/" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-gift" /><span className="btn-name">home</span></Link>
      <Link to="/mylists" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-rectangle-list" /><span className="btn-name">lists</span></Link>
      <Link to="/friends" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-users" /><span className="btn-name">friends</span></Link>
      <Link to="/chat" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-comments" /><span className="btn-name">DMs</span></Link>
    </nav>
 );
}

export default Footer;