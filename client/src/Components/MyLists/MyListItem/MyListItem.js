import './MyListItem.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { MinusIcon, AddIcon,} from '@chakra-ui/icons';

function MyListItem({ list }) {
  
  return (
    <Accordion className='list-container' allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
        <>
          <h1>
            <AccordionButton>
              <Box className="list-title">
                <h1 className='list-recipient'>Joshua Smith</h1>
                <h2 className='recipient-username'>joshyjosh</h2>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' className="plus-minus-btn"  />
              ) : (
                <AddIcon fontSize='12px' className="plus-minus-btn" />
              )}
            </AccordionButton>
          </h1>
          <AccordionPanel className="list-page">
            <p className='list-text'>Remote control car - for a toddler! <br></br>
          https://www.amazon.com/Kannove-Remote-Control-Toddlers-Birthday/dp/B09ZRM5SPC/ref=sr_1_17?keywords=toddler+remote+control+car&qid=1668097216&sr=8-17</p>
          <p className='list-text'>Remote control car - for a toddler! <br></br>
          https://www.amazon.com/Kannove-Remote-Control-Toddlers-Birthday/dp/B09ZRM5SPC/ref=sr_1_17?keywords=toddler+remote+control+car&qid=1668097216&sr=8-17</p>
          <p className='list-text'>Remote control car - for a toddler! <br></br>
          https://www.amazon.com/Kannove-Remote-Control-Toddlers-Birthday/dp/B09ZRM5SPC/ref=sr_1_17?keywords=toddler+remote+control+car&qid=1668097216&sr=8-17</p>
          <p className='list-text'>Remote control car - for a toddler! <br></br>
          https://www.amazon.com/Kannove-Remote-Control-Toddlers-Birthday/dp/B09ZRM5SPC/ref=sr_1_17?keywords=toddler+remote+control+car&qid=1668097216&sr=8-17</p>
          <p className='list-text'>Remote control car - for a toddler! <br></br>
          https://www.amazon.com/Kannove-Remote-Control-Toddlers-Birthday/dp/B09ZRM5SPC/ref=sr_1_17?keywords=toddler+remote+control+car&qid=1668097216&sr=8-17</p>
          <p className='list-text'>Remote control car - for a toddler! <br></br>
          https://www.amazon.com/Kannove-Remote-Control-Toddlers-Birthday/dp/B09ZRM5SPC/ref=sr_1_17?keywords=toddler+remote+control+car&qid=1668097216&sr=8-17</p>
          </AccordionPanel>
        </>
        )}
      </AccordionItem>
    </Accordion>
  )
}

export default MyListItem;