import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './components/Pokedex/Pokedex';
import About from './components/About/About';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import NotFound from './components/NotFound/NotFound';
import Favorites from './components/Favorites/Favorites';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, checked) {
    const { favorites } = this.state;
    if (checked) {
      const favoritePokemon = pokemons.find(pokemon => pokemon.id === id);
      favoritePokemon['isFavorite'] = true;
      this.setState({
        favorites: [...favorites, favoritePokemon],
      });
    }
    if(!checked) {
      const newFavorite = favorites.filter(pokemon => pokemon.id !== id);
      const pokemonToRemove = favorites.find(pokemon => pokemon.id === id);
      pokemonToRemove['isFavorite'] = false;
      this.setState({
        favorites: newFavorite,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/">
            <img
              src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Pokédex Logo"
            />
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/favorites">Favorite Pokemon</Link></li>
          </ul>
          <Switch>
            <Route
              exact path="/"
              render={ () => <Pokedex pokemons={pokemons}/> } 
            />
            <Route path="/about" component={ About } />
            <Route
              exact path="/pokemons/:id"
              render={
                (props) => <PokemonDetails {...props} pokemons={pokemons} handleChange={ this.handleChange } /> 
              }
            />
            <Route
              path="/favorites"
              render={ (props) => <Favorites favorites={ this.state.favorites } />}
            />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
