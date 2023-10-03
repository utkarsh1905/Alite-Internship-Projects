import { useState } from 'react'

const ReduceTaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
    </>
  )
}

export default ReduceTaskList;

const Task = ({ task, onChange, onDelete }) => {
 
 const [isEditing, setIsEditing] = useState(false);
 let taskContent;
 
 if(isEditing){
    taskContent = (
        <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
 } else{
    taskContent = (
        <>
         {task.text}
         <button onClick={() => setIsEditing(true)}>Edit</button>          
        </>
    )
 }
  return (
    <>
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  )

}


