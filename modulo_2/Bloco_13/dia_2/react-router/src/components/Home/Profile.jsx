import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    const { ship } = this.props.match.params;
    return (
      <div>
        <Link to='/'>Voltar a Home!</Link>
        <h1>Meu Perfil: { this.props.name }, do navio { ship }</h1>
      </div>
    )
  }
}

export default Profile;
