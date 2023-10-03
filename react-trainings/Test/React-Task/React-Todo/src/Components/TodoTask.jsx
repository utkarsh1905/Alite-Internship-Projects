import { useState } from "react";
import "./Todo.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const newTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, isEditing: false }]);
      setNewTodo("");
    }
  };

  const editTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isEditing = true;
    updatedTodos[index].editingText = updatedTodos[index].text;
    setTodos(updatedTodos);
  };

  const saveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = updatedTodos[index].editingText;
    updatedTodos[index].isEditing = false;
    setTodos(updatedTodos);
  };

  const cancelEdit = (index) => {
    const todo = todos[index];
    todo.isEditing = false;
    setTodos([...todos]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
    <h1 className="header">To-Do List.</h1>
    <div className="toDoHolder">
      <div className="form-holder">
        <div>
         <h3>Add Your Todo</h3>
        </div>
        <div className="label-holder">
         <label htmlFor="">Add Your Todo</label>
        </div>
        <input type="text" value={newTodo} onChange={newTodoChange} />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="list-holder">
      <h3>Your Todo list</h3>
        {todos.map((todo, index) => (
          <div key={index} className="todoListItems">
            {todo.isEditing ? (
              <input
                type="text"
                value={todo.editingText}
                onChange={(event) => {
                  const updatedTodos = [...todos];
                  updatedTodos[index].editingText = event.target.value;
                  setTodos(updatedTodos);
                }}
              />
            ) : (
              <p>{todo.text}</p>
            )}
            {todo.isEditing ? (
              <div className="todoListBtnHolder">
                <button onClick={() => saveTodo(index)}>Save</button>
                <button onClick={() => cancelEdit(index)}>Cancel</button>
              </div>
            ) : (
              <div className="todoListBtnHolder">
                <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;