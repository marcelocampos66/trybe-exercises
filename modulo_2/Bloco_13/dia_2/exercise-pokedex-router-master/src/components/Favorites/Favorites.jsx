import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import './Favorites.css';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.renderNotFound = this.renderNotFound.bind(this);
    this.renderFavoritePokemons = this.renderFavoritePokemons.bind(this);
  }

  renderNotFound() {
    return (
      <div>
        <h3>No Favorite Pokemon Found! :( </h3>
      </div>
    )
  }

  renderFavoritePokemons() {
    const { favorites } = this.props;
    return (
      <div className="favorite-card">
        {favorites.map(pokemon => <PokemonCard key={pokemon.id} pokemon={ pokemon } />)}
      </div>
    )
  }

  render() {
    const { favorites } = this.props;
    console.log(favorites)
    return (
      <div>
        { favorites.length === 0 ? this.renderNotFound() : this.renderFavoritePokemons() }
      </div>
    )
  }
}

export default Favorites;
