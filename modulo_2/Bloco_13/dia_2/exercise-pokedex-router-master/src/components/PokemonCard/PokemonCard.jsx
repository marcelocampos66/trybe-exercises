import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';

class PokemonCard extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image, id, isFavorite } = pokemon;
    return (
      <div className="pokemon-card">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={name} />
        <div className="favorite-container">
          <Link to={`pokemons/${ id }`} >More details</Link>
          { isFavorite && <div className="favorite"></div> }
        </div>
      </div>
    )
  }
}

export default PokemonCard;
