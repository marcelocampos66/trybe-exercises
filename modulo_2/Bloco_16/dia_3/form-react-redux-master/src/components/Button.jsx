import React, {Component} from 'react';

class SaveButton extends Component {

  render() {
    const {handleClick, children} = this.props;
    return (
      <button onClick={handleClick}>{children}</button>
    );
  }
}
 
export default SaveButton;