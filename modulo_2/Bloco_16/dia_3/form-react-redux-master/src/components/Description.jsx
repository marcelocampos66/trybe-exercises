import { Component, Fragment} from 'react';

class Description extends Component {
  render() { 
    const { value, handleEvent} = this.props;
    return (
      <Fragment>
        <label>Descrição do cargo
          <textarea name='description' value={value} onChange={handleEvent}></textarea>
        </label>
      </Fragment>
    );
  }
}
 
export default Description;