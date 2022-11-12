import './MyLists.css';
import { useEffect, useState } from 'react';
import MyListItem from './MyListItem/MyListItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

library.add(faFileCirclePlus)

const MyLists = ({ myLists }) => {
  const [allMyLists, setAllMyLists] = useState([]);
  const [lastEdited, setLastEdited] = useState('');

  // useEffect(() => {
  //   getAllLists().then(lists => setAllMyLists(lists))
  // }, []);

  function createNewList(newList) {
    setAllMyLists((allMyLists) => {
      return [...allMyLists, newList]
    })
  };
  if (allMyLists && allMyLists.length) {
   return (
     <div className="myList-container">
       <button className="create-list-btn" onClick={createNewList}><FontAwesomeIcon icon="fa-solid fa-file-circle-plus" /></button>
       <h1 className="container-title">MyLists</h1>
       {allMyLists.map((list) => (
         <MyListItem key={list._id} />
       ))}
     </div>
     )
 } else {
  return (
    <div className="myList-container">
      <button className="create-list-btn" onClick={createNewList}><FontAwesomeIcon icon="fa-solid fa-file-circle-plus" /></button>
      <h1 className="container-title">MyLists</h1>
      <div className="arrow-container">
        <div className="arrow down">down</div>
      </div>
     </div>
  )
 }

};

export default MyLists;