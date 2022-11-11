import './MyListItem.css';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { MinusIcon, AddIcon,} from '@chakra-ui/icons';
import { text } from '@fortawesome/fontawesome-svg-core';

function MyListItem({ list }) {
  const [myListName, setMyListName] = useState('');
  const [myListText, setMyListText] = useState('');

  function handleMyListNameChange(e) {
    setMyListName(e.target.value);
  };

  function handleMyListTextChange(e) {
    setMyListText(e.target.value);
  };

  
  return (
    <Accordion className='list-container' allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
        <>
          <h1>
            <AccordionButton className="acc-btn">
              <Box className="list-title">
                <h1 className='list-recipient'>{myListName}</h1>
                <h2 className='recipient-username'>joshyjosh</h2>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' className="plus-minus-btn"  bg='#e2cfc4'/>
              ) : (
                <AddIcon fontSize='12px' className="plus-minus-btn" bg='#e2cfc4'/>
              )}
            </AccordionButton>
          </h1>
          <AccordionPanel className="list-page">
            <div className="note-top"></div>
            <input className='list-recipient-edit' type='text' value={myListName} onChange={handleMyListNameChange} placeholder= "Title: Who is this list for?" />
            {/* <textarea className='list-text' type='text' value={myListText} onChange={handleMyListTextChange} placeholder= "List some gift ideas.." /> */}
            <div className='list-text' contentEditable onChange={handleMyListTextChange} placeholder='List gift ideas here...'>{myListText}</div>
          </AccordionPanel>
        </>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default MyListItem;