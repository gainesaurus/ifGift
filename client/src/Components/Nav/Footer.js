import './Nav.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav } from "rsuite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments, faMagnifyingGlass, faRectangleList, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faComments, faMagnifyingGlass, faRectangleList, faUsers)

function Footer() {
  return (
    <>
      <Nav className="footer">
        <Nav.Item as={Link} to="/search" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /><span className="btn-name">search</span></Nav.Item>
        <Nav.Item as={Link} to="/mylists" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-rectangle-list" /><span className="btn-name">lists</span></Nav.Item>
        <Nav.Item as={Link} to="/friends" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-users" /><span className="btn-name">friends</span></Nav.Item>
        <Nav.Item as={Link} to="/chat" className="nav-btn"><FontAwesomeIcon icon="fa-solid fa-comments" /><span className="btn-name">DMs</span></Nav.Item>
      </Nav>
    </>
 );
}

export default Footer;