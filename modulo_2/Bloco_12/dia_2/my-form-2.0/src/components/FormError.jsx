import React from 'react';

class FormError extends React.Component {
  render() {
    const { formError } = this.props;
    return (
      <div>
        {
          Object.keys(formError).map((fieldName) => {
            if(formError[fieldName].length === 0) return ''
            return <p key={fieldName}>{fieldName} {formError[fieldName]}</p>
          })
        }
      </div>
    );
  }
}

export default FormError;
