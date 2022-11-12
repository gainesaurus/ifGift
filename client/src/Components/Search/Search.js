import './Search.css';
import SearchItem from './SearchItem/SearchItem';


const Search = () => {
  return (
    <div className="search-container">
      <input className="search-bar" placeholder='Search ifGift users...'/>
      <SearchItem />
    </div>

    
    )
};

export default Search;