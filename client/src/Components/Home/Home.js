import { useState, useEffect } from 'react';

import './Home.css';

const Home = () => {
  const [recentLists, setRecentLists] = useState([]);
  
  // useEffect(() => {
  //   getRecentLists().then(lists => setRecentLists(lists));
  // }, []);

  return (
    <div>
      <h1>Upcoming Holidays</h1>
      <h1>Home</h1>
    </div>
  )
};

export default Home;