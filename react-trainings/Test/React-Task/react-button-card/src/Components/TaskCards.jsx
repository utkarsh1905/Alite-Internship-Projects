import React from 'react'
import {cardData} from './data'
import "./TaskCard.css"

const TaskCards = () => {


  return (
    <div className='card-container'>

      {cardData.map(user =>(
        
        <div className='card'>
          {user.isActive && (
            <img src={user.userImage} alt='Card Img' />
          )}
         <b>Username: {user.name}</b>
         <p>Age: {user.age}</p>
         <p>Location: {user.city}</p>
        </div>

       ))
    }
    </div>
  )
}

export default TaskCards;