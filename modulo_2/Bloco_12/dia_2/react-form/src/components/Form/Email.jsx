import React from 'react';

class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexEmail.test(value) && value !== ''){
      error = 'Invalid Email';
    }

    return (
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={ handleChange }
          value={ value }
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Email;
