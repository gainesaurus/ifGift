import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav } from "rsuite";
import { SearchPeople, Peoples, Message, List, Member, Dashboard } from "@rsuite/icons";

function App() {
  return (
    <div className="container">
      <div className="app-container">
        <BrowserRouter>
          <Nav className="header" appearance="subtle">
              <Nav.Item as={Link} to="/Dashboard" icon={<Dashboard />} className="nav-btn"></Nav.Item>
              <Nav.Item as={Link} to="/profile" icon={<Member />} className="nav-btn"></Nav.Item>
          </Nav>
          <Nav className="footer">
              <Nav.Item as={Link} to="/search" icon={<SearchPeople />} className="nav-btn"></Nav.Item>
              <Nav.Item as={Link} to="/mylists" icon={<List />} className="nav-btn"></Nav.Item>
              <Nav.Item as={Link} to="/friends" icon={<Peoples />} className="nav-btn"></Nav.Item>
                <Nav.Item as={Link} to="/chat" icon={<Message />} className="nav-btn"></Nav.Item>
          </Nav>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
