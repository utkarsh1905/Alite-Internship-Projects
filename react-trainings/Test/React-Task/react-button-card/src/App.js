import './App.css';
import Button from './Components/Button';
import TaskCards from './Components/TaskCards';
function App() {
  return (
   <>
      <div className='button-holder'>
      <h2>Buttons With Changing Colors and Sizes</h2>
       <Button size="large" color="danger">Button 1</Button>
       <Button size="medium" color="tertiary">Button 2</Button>
       <Button size="small" color="success">Button 3</Button>
      </div>  
      
      <TaskCards/>

    </>
  );
}

export default App;
