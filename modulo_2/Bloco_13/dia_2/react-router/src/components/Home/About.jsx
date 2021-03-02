import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Voltar a Home!</Link>
        <p>Se meu navio React eh o de teseu e eu refatorei todos os seus componentes, ele ainda eh meu navio?</p>
      </div>
    )
  }
}

export default About;
