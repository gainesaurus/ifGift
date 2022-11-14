import SearchItem from './SearchItem/SearchItem';
import './Search.css';


const Search = () => {
  return (
    <div className="search-container">
      <input className="search-bar" placeholder='Search ifGift users...'/>
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </div>
  )
};

export default Search;