import React from 'react';

const Button = ({type, children }) => {
  return (
    <button className={type === 'secondary' ? 'btn btn--secondary' : 'btn'}>
      {children}
    </button>
  );
}; 

export default Button;
