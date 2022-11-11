import './MyLists.css';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import MyListItem from './MyListItem/MyListItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

library.add(faFileCirclePlus)

const MyLists = ({ myLists }) => {
  const [selectedList, setSelectedList] = useState(null);

  return (
    <div className="myList-container">
      <Link to="/create-list" className="create-list-btn"><FontAwesomeIcon icon="fa-solid fa-file-circle-plus" /></Link>
      <h1 className="container-title">MyLists</h1>
        <MyListItem />
        <MyListItem />
        <MyListItem />
        <MyListItem />
        <MyListItem />
    </div>

    
    )
    // myLists.map(list => (
    //   <MyListItem key={list._id} list={list} />)
    // myLists.map(list => (
    //   <motion.div layoutId={list.id} onClick={() => setSelectedId(list.id)}>
    //     <motion.h5>{list.subtitle}</motion.h5>
    //     <motion.h2>{list.title}</motion.h2>
    //   </motion.div>
    // ))
    // <AnimatePresence>
    //   {selectedId && (
    //     <motion.div layoutId={selectedId}>
    //       <motion.h5>{list.subtitle}</motion.h5>
    //       <motion.h2>{list.title}</motion.h2>
    //     </motion.div>
    //   )}
    // </AnimatePresence>
  //)
};

export default MyLists;