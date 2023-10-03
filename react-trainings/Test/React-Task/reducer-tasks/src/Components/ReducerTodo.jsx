import {useReducer} from 'react'
import ReduceTaskList from './ReducerTaskList';
import ReducerAddTask from './ReducerAddTask';



const ReducerTodo = () => {

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  
  let nextId = 0;

  const handleAddTask = (text) => {
    dispatch({
     type: 'added',
     id: nextId++,
     text: text,
    })     
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }
 
  return (
    <>
     <h1 className="header">To-Do List(Using-Reducer).</h1>   
      <div>
         <ReducerAddTask onAddTask={handleAddTask}/>
         <ReduceTaskList
         tasks={tasks}
         onChangeTask={handleChangeTask}
         onDeleteTask={handleDeleteTask}        
         />
      </div>
    </>
  )
}

export default ReducerTodo;

const initialTasks = [];

function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case 'changed': {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  