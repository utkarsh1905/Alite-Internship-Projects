import React from 'react';

const Button = ({ size, color,children}) => {

   let buttonSizeClass = size === 'small' ? 'btn-small' : size === 'medium' ? 'btn-medium' : 'btn-large';
   let buttonColorClass = color === 'secondary' ? 'btn-secondary' : color === 'tertiary' ? 'btn-tertiary' : color === 'danger' ? 'btn-danger' : color === 'success' ? 'btn-success' : 'btn-primary';

  return (
    <div>
      <button className={`btn ${buttonSizeClass} ${buttonColorClass}`}>
        {children}
      </button>      
    </div>


  );
};

export default Button;