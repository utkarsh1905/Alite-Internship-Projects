import React from 'react'
import "./ControlledForm.css"

const UncontrolledForm = ({onFormSubmit}) => {

  const stateNames = ['Select State', 'Maharashtra', 'Gujarat', 'Karnataka', 'Madhya Pradesh',"Jammu","Leh"];


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    onFormSubmit(data);
    console.log(data);

 }


  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>

         <label>UserName:</label>
         <input 
          type="text" 
          name='name'
          placeholder='Enter UserName'
        />

        <label>Email ID:</label>
        <input 
          type="email" 
          name="email"
          placeholder='Enter Email'
        />

        <label>Mobile Number:</label>
        <input 
          type="number"
          name='mobile'
          placeholder='Enter Mobile Number'
        />

       <div className='radioContainer'>
            <p>Gender</p>
             <div className='radio-option-holder'>
              <label>Male:</label>
              <input 
               type="radio" 
               value='male'
               name='gender'
              />
             </div>
             <div  className='radio-option-holder'>
              <label>Female:</label>
              <input 
               type="radio" 
               value='female'
               name='gender'
              />
             </div>  
          </div>

        <label>State:</label>
        <select name="state">
          {stateNames.map((state, index) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>        

        <label>BirthDate:</label>
        <input 
         type="date" 
         name="birthdate"
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm;