import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Seja bem vindo!</h1>
        <p>Faça o seu login <Link to='/login'>aqui</Link>.</p>
      </div>
    )
  }
}

export default Home;
