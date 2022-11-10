import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIdCard, faGift } from '@fortawesome/free-solid-svg-icons';

library.add(faIdCard, faGift)


function Header() {
  return (
    <nav className="header">
        <Link to="/" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-gift" /><span className="btn-name">home</span></Link>
        <Link to="/profile" className="profile-btn"><FontAwesomeIcon icon="fa-solid fa-id-card" /><span className="btn-name">profile</span></Link>
    </nav>
  );
}

export default Header;