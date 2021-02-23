import React from 'react';
import './Button.css';

const Button = ({ handleClick, className, children, disabled }) => (
  <button 
    onClick={ handleClick }
    disabled={ disabled }
    className={ `button ${className}` }
  >
    { children }
  </button>
)

export default Button;
