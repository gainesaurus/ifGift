import './Nav.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav } from "rsuite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIdCard, faGift } from '@fortawesome/free-solid-svg-icons';

library.add(faIdCard, faGift)


function Header() {
  return (
    <>
      <nav className="header">
          <div as={Link} to="/home" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-gift" /><span className="btn-name">home</span></div>
          <div as={Link} to="/profile" className="profile-btn"><FontAwesomeIcon icon="fa-solid fa-id-card" /><span className="btn-name">profile</span></div>
      </nav>
    </>
  );
}

export default Header;