import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import './SearchItem.css';

library.add(faUserPlus)


const SearchItem = () => {
  return (
    <div className="search-item-container" >
      <img src="https://images.theconversation.com/files/313683/original/file-20200205-149738-1bmqilf.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="Matt Smith"
      className="search-pic"/>
      <div className="name-box">
        <h2 className="search-name">Matt Smith</h2>
        <h3 className="search-username">smithymatt</h3>
        <button className="add-friend-btn">
          <FontAwesomeIcon
          icon="fa-solid fa-user-plus"
          title="add to friends"
          >
            </FontAwesomeIcon></button>
      </div>
    </div>

    
    )
};

export default SearchItem;