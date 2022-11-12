import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIdCard, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(faIdCard, faMagnifyingGlass)


function Header() {
  return (
    <nav className="header">
        <Link to="/search" className="profile-btn"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /><span className="btn-name">search</span></Link>
        <Link to="/profile" className="profile-btn"><FontAwesomeIcon icon="fa-solid fa-id-card" /><span className="btn-name">profile</span></Link>
    </nav>
  );
}

export default Header;