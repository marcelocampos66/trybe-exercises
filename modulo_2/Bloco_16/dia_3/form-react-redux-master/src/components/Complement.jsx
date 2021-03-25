import { Component, Fragment } from 'react';

class Complement extends Component {
  render() { 
    const { value, handleEvent} = this.props;

    return (
      <Fragment>
        <span>Complemento</span>
        <label onChange={handleEvent}>
          <input name='complement' type="radio" value='casa' />Casa
        </label>
        <label onChange={handleEvent}>
          <input name='complement' type="radio" value='apartamento' />Apartamento
        </label>
      </Fragment>
    );
  }
}
 
export default Complement;