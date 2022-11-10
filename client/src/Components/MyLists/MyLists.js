import './MyLists.css';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import MyListItem from './MyListItem/MyListItem';

const MyLists = ({ myLists }) => {
  const [selectedList, setSelectedList] = useState(null);

  return (
  // <h1>MyLists</h1>
    myLists.map(list => (
      <MyListItem key={list._id} list={list} />
    ))
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
  )
};

export default MyLists;