import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';
import MyLists from './Components/MyLists/MyLists';
import FriendsList from './Components/FriendsList/FriendsList';
import ChatList from './Components/ChatList/ChatList';

function App() {
  const [selected, setSelected] = useState();
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="body-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={ <Search />} />
            <Route path="/mylists" element={ <MyLists />} />
            <Route path="/chat" element={ <ChatList />} />
            <Route path="/friends" element={ <FriendsList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
