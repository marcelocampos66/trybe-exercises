import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RegisteredCustomers extends React.Component {
  render() {
    const { usersState } = this.props;
    const noUsers = (
      <section>
        <h3>Nenhum cliente cadastrado!</h3>
        <button
          type="button"
        >
          <Link to="/register">Ir para a pagina de cadastro.</Link>
        </button>
      </section>
    );
    return (usersState.length === 0) ? noUsers : (
      <div>
        {
          usersState.map(({ name, age, email }) => (
            <div key={ email }>
              <p>Nome: { name }</p>
              <p>Idade: { age }</p>
              <p>Email: { email }</p>
            </div>
          ))
        }
        <button
          type="button"
        >
          <Link to="/register">Ir para a pagina de cadastro.</Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  usersState: state.usersReducer.users,
});

export default connect(mapStateToProps)(RegisteredCustomers);
