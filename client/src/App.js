import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import ProfileForm from './Components/Profile/ProfileForm/ProfileForm';
import Search from './Components/Search/Search';
import MyLists from './Components/MyLists/MyLists';
import FriendsList from './Components/FriendsList/FriendsList';
import ChatList from './Components/ChatList/ChatList';
import LogIn from './Components/LogIn/LogIn';


function App() {
  const { user, isAuthenticated } = useAuth0();
  const [userId, setUserId] = useState('');

  if (isAuthenticated) {
    return (
        <BrowserRouter>
          <div className="app-container">
            <Header />
            <div className="body-container">
              <Routes>
                <Route path="/" element={<Home setUserId={setUserId} />} />
                <Route path="/profile" element={<Profile userId={userId} />} />
                <Route path="/editprofile" element={<ProfileForm />} />
                <Route path="/search" element={<Search />} />
                <Route path="/mylists" element={<MyLists userId={userId}/>} />
                <Route path="/chat" element={<ChatList />} />
                <Route path="/friends" element={<FriendsList user={user}/>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    );

  } else {
    return (
      <BrowserRouter>
        {<LogIn />}
      </BrowserRouter>
    )
  }
}

export default App;
