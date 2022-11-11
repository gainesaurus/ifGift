import './Profile.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { MinusIcon, AddIcon,} from '@chakra-ui/icons';

library.add(faPen)


const Profile = () => {
  return (
    <div className="profile-container">
      <div className="main-profile-box">
        <div className="img-box">
          <img className="profile-img" src="https://images.theconversation.com/files/313683/original/file-20200205-149738-1bmqilf.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="profileimg"/>
          <div className="gift-preference-title">Gift Preference:</div>
          <div className="gift-preference">Charitable Donation</div>
        </div>
        <div className="profile-info-box">
          <div className="profile-name">Michael Gainey</div>
          <div className="pronouns">he/him/his</div>
          <div className="email">gainey.michael@gmail.com</div>
          <div className="address">1212 Gift Street San Diego, CA USA</div>
          <div className="birthday">08/23</div>
          <div className="holidays"></div>
        </div>
          <Link to="/edit" className="edit-btn"><FontAwesomeIcon icon="fa-solid fa-pen" /></Link>
      </div>
      <div className="profile-list-box">
        <Accordion className='list-container' allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
            <>
              <h1>
                <AccordionButton>
                  <Box className="list-title">
                    <h1 className='list-type'>Want List</h1>
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
                <p className='list-text'>text</p>
              </AccordionPanel>
            </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion className='list-container' allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
            <>
              <h1>
                <AccordionButton>
                  <Box className="list-title">
                    <h1 className='list-type'>Avoid List</h1>
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
                <p className='list-text'>text</p>
              </AccordionPanel>
            </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion className='list-container' allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
            <>
              <h1>
                <AccordionButton>
                  <Box className="list-title">
                    <h1 className='list-type'>Charity List</h1>
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
                <p className='list-text'>text</p>
              </AccordionPanel>
            </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion className='list-container' allowToggle>
          <AccordionItem>
            {({ isExpanded }) => (
            <>
              <h1>
                <AccordionButton>
                  <Box className="list-title">
                    <h1 className='list-type'>Registry List</h1>
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
                <p className='list-text'>text</p>
              </AccordionPanel>
            </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
};

export default Profile;