import Select from 'react-select'
import { useEffect, useState } from 'react';

import './Search.css';

import SearchItem from './SearchItem/SearchItem';
import { getAllUsers } from '../../Services/profileService';


const selectStyle = {
  control: styles => ({ ...styles, background: 'none', border:'none', zindex: '150', width: '100%' })
}

const Search = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    getAllUsers().then(users => { 
      const options = users.map((user) => ({value: user, label: user.name}))
      setOptions(options);
      setAllUsers(users);
    });
  }, []);

    return (
      allUsers.length && (
        <div className="search-container">
          <Select className="search-bar"
            options={options} styles={selectStyle}
            placeholder='Search ifGift users...' >
          </Select>
        </div>
    )
  )
};

export default Search;