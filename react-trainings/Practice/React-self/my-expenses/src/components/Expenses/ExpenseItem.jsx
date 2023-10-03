import React from 'react';
// import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// TODO : Destructure props upto 4 keys ...
const ExpenseItem = (props) => {

//  const [title,setTitle] = useState(props.title,)

//   // let title = props.title

//   const clickHandler = () =>{
//     // title = "Updated!"
//      setTitle("Updated!!")
//      alert(title)
//   }

  return (
    <Card className='expense-item'>

      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs-{props.amount}</div>
      </div>

      {/* <button onClick={() => {alert('clicked')}}>Change-Title</button> */}
      {/* <button onClick={clickHandler}>Change-Title</button> */}
    </Card>
  );
}

export default ExpenseItem;