import { Component, Fragment } from 'react';

class City extends Component {
  render() {  
    const { value, handleEvent} = this.props;
    return (
      <Fragment>
        <label>Cidade
          <input name='city' type="text" value={/\d/.test(value) ? '' : value} onChange={handleEvent} />
        </label>
      </Fragment>
    );
  }
}
 
export default City;