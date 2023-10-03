import './UserDetails.css';

const UserDetails = ({data, onSubmit,dispatcher }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatcher(name,value);
  };

  const { name, phoneNumber, email, address, city ,id } = data?.sampleDataObj;
  
  return (
    <>
      <div className='holder'>
      <div className="card">
      <h2>User Details</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder='Enter your name'
            value={  name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            name="phoneNumber"
            placeholder='Enter phone number'
            value={  phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            placeholder='Enter email address'
            type="email"
            name="email"
            value={  email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            placeholder='Enter Address'
            type="text"
            name="address"
            value={  address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>City:</label>
          <select
            value={ city}
            onChange={handleChange}
            name="city"
          >
            <option value="">Select a city</option>
            <option value="Ahemdabad">Ahemdabad</option>
            <option value="Banglore">Banglore</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Jaipur">Jaipur</option>
          </select>
        </div>
        <button type="submit">{id !== null ? "Update" : "Add"}</button>
      </form>
    </div>
      </div>
    </>
  );
};
export default UserDetails;