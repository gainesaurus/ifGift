import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

import MyListItem from './MyListItem/MyListItem';
import { getAllLists, addToMyLists, getListsByUserId } from '../../Services/listService';
import { getUserInfo } from '../../Services/profileService';

import './MyLists.css';

library.add(faFileCirclePlus)

const MyLists = () => {
  const [allMyLists, setAllMyLists] = useState([]);
  const [userId, setUserId] = useState('');
  // const [newList, setNewList] = useState('');

  useEffect(() => {
    getUserId();
    getListsByUserId(userId).then(lists => setAllMyLists(lists))
  }, []);

  async function getUserId() {
    const accessToken = localStorage.getItem('accessToken');
    const fetchedUser = await getUserInfo(accessToken);
    setUserId(fetchedUser._id)
  }

  async function createNewList() {
    // setAllMyLists((allMyLists) => {
    //   return [...allMyLists, newList]
    // })
    // const createdBy = userId;
    await addToMyLists(userId);
    getListsByUserId(userId).then(lists => {setAllMyLists(lists)})
  };



  if (allMyLists && allMyLists.length) {
   return (
     <div className="myList-container">
       <button className="create-list-btn" onClick={createNewList}><FontAwesomeIcon icon="fa-solid fa-file-circle-plus" /></button>
       <h1 className="container-title">MyLists</h1>
       {allMyLists.map((list) => (
         <MyListItem key={list._id} myList={list} allMyLists={allMyLists} setAllMyLists={setAllMyLists}/>
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