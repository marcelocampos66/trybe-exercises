import { Component, Fragment } from 'react';

class CPF extends Component {
  render() { 
    const { value, handleEvent} = this.props;
    return (
      <Fragment>
        <label>CPF
          <input name="CPF" type="text" value={value} onChange={handleEvent}/>
        </label>
      </Fragment>
    );
  }
}
 
export default CPF;