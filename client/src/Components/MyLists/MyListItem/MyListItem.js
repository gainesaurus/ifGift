import './MyListItem.css';

function MyListItem({ list }) {
  
  return (
    <div className='list-box'>
      <div className='list-info-box'>
        <h1 className='list-recipient'>Joshua</h1>
        <h1 className='list-text'>Remote control car - for a toddler!</h1>
        <h1 className='list-link'>https://www.amazon.com/Kannove-Remote-Control-Toddlers-Birthday/dp/B09ZRM5SPC/ref=sr_1_17?keywords=toddler+remote+control+car&qid=1668097216&sr=8-17</h1>
      </div>
    </div>
  )
}

export default MyListItem;