import { Component, Fragment} from 'react';

class Abstract extends Component {
  render() { 
    const { value, handleEvent} = this.props;
    return (
      <Fragment>
        <label>Resumo do currículo
          <textarea name='abstract' value={value} onChange={handleEvent}></textarea>
        </label>
      </Fragment>
    );
  }
}
 
export default Abstract;