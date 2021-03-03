import React from 'react';
import './PokemonDetails.css';

class PokemonDetails extends React.Component {
  render() {
    const { pokemons, handleChange } = this.props;
    const pokemonId = parseInt(this.props.match.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === pokemonId);
    const { name, type, averageWeight, image, id, moreInfo, foundAt, summary, isFavorite } = pokemon;
    const { value } = averageWeight;
    return (
      <div>
        <h2>Essa eh a pagina do pokemon { name } de ID { id } </h2>
        <p>Mais informações sobre o pokemon { name }:</p>
        <p>O tipo dele eh { type }</p>
        <p>Peso: { value } Kg</p>
        <img src={ image } alt={ name } />
        <p>{ summary }</p>
        <div className="pokemon-location">
          {foundAt.map(({ location, map }) => (
            <div key={location}>
              <img src={map} alt={`${name} location`} />
              <p><em>{location}</em></p>
            </div>
          ))}
        </div>
        <div>
          <a target="_blank" href={ moreInfo }>More...</a>
        </div>
        <input
          type="checkbox"
          checked={ isFavorite }
          onChange={ ({ target: { checked } }) => handleChange(id, checked ) }
        /> Favorite this Pokemon!
      </div>
    )
  }
}

export default PokemonDetails;
