import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      redirect: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  authenticateUser() {
    const { usersState } = this.props;
    const { email, redirect } = this.state;
    if (usersState.length > 0) {
      const user = usersState.find((user) => user.email === email);
      if(user === undefined) this.setState({ isLoggedIn: true });
      if(user) {
        this.setState({ redirect: true })
      }
    }
    if (usersState.length === 0) {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    const { isLoggedIn, redirect } = this.state;
    const failLogin = <p>Login não efetuado</p>;
    return (redirect) ? <Redirect to="/registered-customers" /> : (
      <div>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              id="email-input"
              name="email"
              type="email"
              isRequired
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Password:
            <input
              id="password-input"
              name="password"
              type="password"
              isRequired
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ () => this.authenticateUser() }
          >
            Entrar!
          </button>
        </form>
        { isLoggedIn && failLogin }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  usersState: state.usersReducer.users,
});

export default connect(mapStateToProps)(Login);
