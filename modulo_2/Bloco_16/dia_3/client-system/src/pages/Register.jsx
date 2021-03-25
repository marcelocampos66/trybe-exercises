import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as registers from '../redux/actions/registerActions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  handleChange({ target }) {
    const { registerNameDispatch, registerAgeDispatch, registerEmailDispatch } = this.props;
    const { name, value } = target;
    switch (name) {
    case 'name':
      registerNameDispatch(value);
      break;
    case 'age':
      registerAgeDispatch(value);
      break;
    case 'email':
      registerEmailDispatch(value);
      break;
    default:
      break;
    }
  }

  submitUser() {
    const { registerName, registerAge, registerEmail, registerUserDispatch } = this.props;
    const user = {
      name: registerName,
      age: registerAge,
      email: registerEmail,
    };
    registerUserDispatch(user);
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="name-register">
            Nome:
            <input
              id="name-register"
              name="name"
              onChange={ this.handleChange }
            />
          </label >
          <label htmlFor="age-register">
            Idade:
            <input
              id="age-register"
              name="age"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email-register">
            email:
            <input
              id="email-register"
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ () => this.submitUser() }
          >
            {/* Enviar! */}
            <Link to="/registered-customers">Enviar!</Link>
          </button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerNameDispatch: (name) => dispatch(registers.nameRegister(name)),
  registerAgeDispatch: (age) => dispatch(registers.ageRegister(age)),
  registerEmailDispatch: (email) => dispatch(registers.emailRegister(email)),
  registerUserDispatch: (user) => dispatch(registers.userRegister(user)),
});

const mapStateToProps = (state) => ({
  registerName: state.inputRegisterReducer.name,
  registerAge: state.inputRegisterReducer.age,
  registerEmail: state.inputRegisterReducer.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
