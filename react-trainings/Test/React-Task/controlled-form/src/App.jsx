import './App.css';
import ControlledForm from './Components/ControlledForm';
import UncontrolledForm from './Components/UncontrolledForm';
function App() {

  const handleSubmit = (formData) => {
    alert("User Data Submitted");
    // console.log(formData);
  };
  
  return (
      <>
        <div className='Forms-holder'>
         <ControlledForm/>
         <UncontrolledForm onFormSubmit={handleSubmit}/>
         {/* <UncontrolledForm/> */}
        </div>

      </>
  );
}

export default App;
