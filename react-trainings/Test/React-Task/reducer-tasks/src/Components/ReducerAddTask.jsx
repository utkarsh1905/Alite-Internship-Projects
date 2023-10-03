import { useState } from 'react'
import "./Todo.css"

const ReducerAddTask = ({onAddTask}) => {

    const [text, setText] = useState('');

  return (
    <>
     <input 
      type="text" 
      value={text}
      onChange={(event) => setText(event.target.value)}
    />

    <button
     onClick={() =>{
       setText('');
       onAddTask(text);
     }}>
     Add
    </button>
    </>
  )
}

export default ReducerAddTask;