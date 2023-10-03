import React,{useState} from 'react'
import "./ControlledForm.css"

const ControlledForm = () => {

  const stateNames = ['Select State', 'Maharashtra', 'Gujarat', 'Karnataka', 'Madhya Pradesh'];

  const [formData,setFormData] = useState({
     name: "",
     email: "",
     mobile: "",
     gender: "",
     state: "",
     birthdate: "",
  })

  // TODO : Remove Unnecessary Comments
  const handleFormInput = (event) => {
    const {name, value} = event.target
     setFormData({
       ...formData,
       [name]: value
      })
  }

  //  TODO : Remove Alert
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

  }
 
  return (
    <>
     <div className="form-container">
      <h2>Controlled Form</h2>
        <form onSubmit={handleSubmit}>
           
           <label htmlFor="">UserName:</label>
           <input 
            type="text" 
            name='name'
            value={formData.name}
            onChange={handleFormInput}
            placeholder='Enter UserName'
           />
           
           <label htmlFor="">Email ID:</label>
           <input 
            type="email" 
            name='email'
            value={formData.email}
            onChange={handleFormInput}
            placeholder='Enter UserName'
           />
           
           <label>Mobile Number:</label>
           <input 
            type="number" 
            name='mobile'
            value={formData.mobile}           
            onChange={handleFormInput}
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
               checked={formData.gender === "male"}
               onChange={handleFormInput}
              />
             </div>
             <div  className='radio-option-holder'>
              <label>Female:</label>
              <input 
               type="radio" 
               value='female'
               name='gender'
               checked={formData.gender === "female"}              
               onChange={handleFormInput}
              />
             </div>  
          </div>

          <label htmlFor="state">State:</label>
          <select id="state" name="state" value={formData.state} onChange={handleFormInput}>
            {stateNames.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>             

             <label>BirthDate:</label>
             <input 
               type="date" 
               name="birthdate"
               value={formData.birthdate}              
               onChange={handleFormInput}
             />

          <button type='submit'>Submit</button>
        </form>
     </div>
    </>
  )
}

export default ControlledForm
