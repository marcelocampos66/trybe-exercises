import { Component, Fragment } from 'react';

class FormErrors extends Component {
  render() { 
    const { errors } = this.props;
    return (
      <Fragment>
        {Object.keys(errors).map((fieldName, i) => {
          if (errors[fieldName].length === 0) return '';
          return <p key={i}>{fieldName} {errors[fieldName]}</p>
        })}
      </Fragment>
    );
  }
}
 
export default FormErrors;
