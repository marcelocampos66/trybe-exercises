import React from 'react';
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon-card">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image}/>
      </div>
    )
  }
}

export default PokemonCard;
