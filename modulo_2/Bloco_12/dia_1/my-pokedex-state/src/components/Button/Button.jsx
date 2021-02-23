import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const { handleClick, className, children, disabled } = this.props;
    return (
      <button 
        onClick={ handleClick }
        disabled={ disabled }
        className={ `button ${className}` }
      >
        { children }
      </button>
    )
  }
}

export default Button;
