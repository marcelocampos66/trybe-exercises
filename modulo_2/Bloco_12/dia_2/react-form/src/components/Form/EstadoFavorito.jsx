import React from 'react';

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 120) {
      error = 'Texto muito grande!'
    }

    return (
      <label>
        Diga qual eh o seu estado favorito!
        <textarea 
          name="estadoFavorito"
          onChange={ handleChange }
          value={ value }
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default EstadoFavorito;
