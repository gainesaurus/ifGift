import { useEffect, useState } from 'react';
import MyListItem from './MyListItem/MyListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { getAllLists, addToMyLists } from '../../Services/listService';
import './MyLists.css';

library.add(faFileCirclePlus)

const MyLists = ({ myLists }) => {
  const [allMyLists, setAllMyLists] = useState([]);

  // useEffect(() => {
  //   getAllLists().then(lists => setAllMyLists(lists))
  // }, []);

  async function createNewList(newList) {
    setAllMyLists((allMyLists) => {
      return [...allMyLists, newList]
    })
    // await addToMyLists(newList);
    // getAllLists().then(lists => {setAllMyLists(lists)})
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