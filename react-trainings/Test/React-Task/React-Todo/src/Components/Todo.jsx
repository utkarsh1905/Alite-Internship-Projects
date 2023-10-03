import { useState } from "react";
import "./Todo.css"

function TodoList() {
 
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editTask, setEditTask] = useState("");
  

  const handleChange = (event) => {
    if (editIndex >= 0) {
      setEditTask(event.target.value);
    } else {
      setNewTask(event.target.value);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (editIndex >= 0) {
      const newTasks = [...tasks];
      newTasks[editIndex] = editTask;
      setTasks(newTasks);
      setEditIndex(-1);
    } else {
      addTask(newTask);
      setNewTask("");
    }
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (indexToRemove) => {
    const newTasks = tasks.filter((task, index) => index !== indexToRemove);
    setTasks(newTasks);
  };

  const editTaskAtIndex = (indexToEdit) => {
    const copyOldState = [...tasks];
    copyOldState[indexToEdit] = newTask;
    setTasks(copyOldState);
  };

  return (
    <div>
      <h1 className="header">To-Do List (Add-Edit_delete)</h1>
      <div className="toDoHolder">
        <div className="form-holder">
          <h3>Add Your Todo</h3>
          <form className="todoFrm" onSubmit={submitForm}>
            <input
              type="text"
              value={editIndex >= 0 ? editTask : newTask}
              onChange={handleChange}
              placeholder="Add Task"
            />
            <button type="submit">
              {editIndex >= 0 ? "Save Changes" : "Add"}
            </button>
            {editIndex >= 0 && (
              <button onClick={() => setEditIndex(-1)}>Cancel</button>
            )}
          </form>
        </div>

        <div className="list-holder">
          <h3>Your Todo list</h3>
          <ul className="toDoList">
            {tasks.map((task, index) => (
              <li key={index}>
              <span>{editIndex === index ? editTask : task}</span>
              <button onClick={() => editTaskAtIndex(index)}>Edit</button>
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>              
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList; 