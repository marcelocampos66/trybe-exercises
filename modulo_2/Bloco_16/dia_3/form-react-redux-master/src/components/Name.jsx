import { Component, Fragment } from 'react';

class Name extends Component {
  render() {
    const { value, handleEvent} = this.props;
    return (
      <Fragment>
        <label> Nome
          <input name="name" type="text" value={value} onChange={handleEvent}/>
        </label>
      </Fragment>
    );
  }
}
 
export default Name;