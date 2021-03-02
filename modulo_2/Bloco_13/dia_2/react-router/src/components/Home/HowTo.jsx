import React from 'react';
import { Link } from 'react-router-dom';

class HowTo extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Voltar a Home!</Link>
        <h1>Como navegar? Na internet ou nos mares do caribe, saiba tudo aqui!</h1>
      </div>
    )
  }
}

export default HowTo;
