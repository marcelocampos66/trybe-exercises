import React from 'react';
import { Link } from 'react-router-dom';
import pokemons from '../../data';

class PokemonDetails extends React.Component {
  render() {
    // console.log(this.props.match.params.id)
    const pokemonId = parseInt(this.props.match.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === pokemonId);
    const { name, type, averageWeight, image, id, moreInfo } = pokemon;
    const { value } = averageWeight;
    return (
      <div>
        <h2>Essa eh a pagina do pokemon { name } de ID { id } </h2>
        <p>Mais informações sobre o pokemon { name }:</p>
        <p>O tipo dele eh { type }</p>
        <p>Peso: { value } Kg</p>
        <img src={ image } alt={ name } />
        <div>
          <a target="_blank" href={ moreInfo }>More...</a>
        </div>
      </div>
    )
  }
}

export default PokemonDetails;
