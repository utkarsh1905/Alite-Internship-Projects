import React, {useState} from 'react'
import Card from './Card'
import Button from './Button'
import classes from './AddUser.module.css';


const AddUser = (props) => {

  const[enteredusername,setEnteredUsername] = useState('')

  const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value)
  }

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onClick={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onClick={usernameChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};


export default AddUser