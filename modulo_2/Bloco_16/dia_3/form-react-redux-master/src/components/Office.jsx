import { Component, Fragment} from 'react';

class Oficce extends Component {
  render() { 
    const { value, handleEvent} = this.props;
    return (
      <Fragment>
        <label>Cargo
          <textarea name='office' value={value} onChange={handleEvent}></textarea>
        </label>
      </Fragment>
    );
  }
}
 
export default Oficce;