import React,{useState} from 'react'
import "./Greet.css"


const Greet = () => {

 const [name,setName] = useState("Utkarsh")
 const [index, setIndex] = useState(0);
 // TODO : Move these variables into data.js
 const greetings = ["Hello", "Chao", "Namaste","Bonjor"];
 const fellow = "Jay"

 const handleNameInputValue = (event) =>{
    
    setName(event.target.value);
 }

 const handleChangeGreeting = () =>{

   let nextIndex = index + 1;
   if (nextIndex >= greetings.length) {
     nextIndex = 0;
   }
   for(let i = nextIndex; i < greetings.length; i++) {
     setIndex(i);
     break;
   }

   //  setIndex((index + 1) % greetings.length);
   //  alert(`Old Index Is ${index} and New Index is ${index + 1}`);
   //  // alert(``);
   //  alert(`array length is ${greetings.length}`);
 }

  return (
    <div className='greet-container'>
     <h2>Greeting's !</h2>
      <label>Name: </label>
      <input 
       type="text" 
       value={name}
       onChange={handleNameInputValue}
       placeholder='Enter Name To Greet'
      />
      <p>
       {greetings[index]}-{name}.
      </p>
      <p> {greetings[index]}-{fellow}</p>
      <button onClick={handleChangeGreeting}>
         Change Greeting!
      </button>
    </div>

  )
}

export default Greet