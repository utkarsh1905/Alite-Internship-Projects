import React from 'react'
const UserTable = ({ userData, onDelete, onEdit }) => {

  const tableHeaders = ['Name','Phone Number','Email','Address','City','Action-Delete', 'Action-Edit'];

  return (
    <>
      <h2>User Data Table</h2>
      <div className="holder">
        <table>
          <thead>

            <tr>
              {tableHeaders.map((header) => (
                <th hey={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userData?.map((user) => (
              <tr key={user?.id}>
                <td>{user?.name}</td>
                <td>{user?.phoneNumber}</td>
                <td>{user?.email}</td>
                <td>{user?.address}</td>
                <td>{user?.city}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(user.id)}                    
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="edit-btn" onClick={() => onEdit?.(user.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
