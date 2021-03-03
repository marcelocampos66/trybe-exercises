import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h3>Page requested not found!!!</h3>
        <img
          src="https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"
          alt="Pikachu crying"
        />
      </div>
    )
  }
}

export default NotFound;
