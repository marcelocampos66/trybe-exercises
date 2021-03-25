import { Component, Fragment } from 'react';

class Email extends Component {
  render() {
    const { value, handleEvent} = this.props; 
    return (
      <Fragment>
        <label>Email
          <input name="email" type="text" value={value} onChange={handleEvent}/>
        </label>
      </Fragment>
    );
  }
}
 
export default Email;