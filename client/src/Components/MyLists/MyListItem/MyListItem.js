import './MyListItem.css';
import { useState } from 'react';
import Select from 'react-select';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import { MinusIcon, AddIcon,} from '@chakra-ui/icons';
// import { text } from '@fortawesome/fontawesome-svg-core';

function MyListItem() {
  const [myListName, setMyListName] = useState('');
  const [myListUsername, setMyListUsername] = useState('');
  const [myListText, setMyListText] = useState('');

  function handleMyListNameChange(e) {
    e.preventDefault();
    setMyListName(e.target.value);
  };

  function handleMyListUsernameChange(e) {
    // e.preventDefault();
    console.log(e);
    setMyListUsername(e);
  };

  function handleMyListTextChange(e) {
    e.preventDefault();
    setMyListText(e.target.value);
  };

  const options = [
    { value: 'joshyjosh', label: 'joshyjosh' },
    { value: 'kevykev', label: 'kevykev' },
    { value: 'frannyfran', label: 'frannyfran' }
  ];

  const selectStyle = {
    control: styles => ({ ...styles, background: 'none', border:'none', zindex: '150' })
  }

  
  return (
    <Accordion className='list-container' allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
        <>
          <h1>
            <AccordionButton className="acc-btn">
              <Box className="list-title">
                <h1 className='list-recipient'>{myListName}</h1>
                <h2 className='recipient-username'>{myListUsername}</h2>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' className="plus-minus-btn" />
              ) : (
                <AddIcon fontSize='12px' className="plus-minus-btn" />
              )}
            </AccordionButton>
          </h1>
          <AccordionPanel className="list-page">
            <div className="note-top"></div>
            <div className='title-edit-box'>
              <input className='list-recipient-edit' type='text' value={myListName} onChange={handleMyListNameChange} placeholder= "Title: Who is this list for?" />
              <Select className='list-username-edit' styles={selectStyle} options={options} value={myListUsername} onChange={(e)=>handleMyListUsernameChange(e)} placeholder= "Which friend?" />
            </div>
            <div className='list-text' contentEditable onChange={handleMyListTextChange}>{myListText}</div>
          </AccordionPanel>
        </>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default MyListItem;