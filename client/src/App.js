import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Nav/Header';
import Footer from './Components/Nav/Footer';
import Home from './Components/Home/Home';
// import Profile from './Components/Profile/Profile';
// import Search from './Components/Search/Search';
// import MyLists from './Components/MyLists/MyLists';
// import FriendsList from './Components/FriendsList/FriendsList';
// import MessageList from './Components/MessageList/MessageList';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/profile">
                <Profile />
                </Route>
                <Route path="/search">
                <Search />
                </Route>
                <Route path="/mylists">
                <MyLists />
                </Route>
                <Route path="/friends">
                <FriendsList />
                </Route>
                <Route path="/chat">
                <MessageList />
              </Route> */}
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
