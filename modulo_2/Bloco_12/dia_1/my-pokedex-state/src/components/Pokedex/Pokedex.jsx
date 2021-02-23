import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import Button from '../Button/Button';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      pokemons: this.props.pokemons,
    }
    this.previousPokemon = this.previousPokemon.bind(this)
    this.nextPokemon = this.nextPokemon.bind(this)
    this.filterPokemons = this.filterPokemons.bind(this)
  }

  previousPokemon() {
    const { pokemons } = this.state;
    if (this.state.pokemonIndex > 0) {
      this.setState((state) => ({
        pokemonIndex: state.pokemonIndex - 1
      })); 
    } else {
      this.setState(({ pokemonIndex: pokemons.length - 1 }));
    }
  }

  nextPokemon() {
    const { pokemons } = this.state;
    if (this.state.pokemonIndex < pokemons.length - 1) {
      this.setState((state) => ({
        pokemonIndex: state.pokemonIndex + 1
      }));
    } else {
      this.setState(({ pokemonIndex: 0 }));
    }
  }

  filterPokemons(type) {
    const { pokemons } = this.props;

    this.setState({
      pokemonIndex: 0,
    });

    if (type === 'all') {
      this.setState({
        pokemons: pokemons,
      })
    } else {
      const filteredPokemons = pokemons.filter(pokemon => pokemon.type === type);
      this.setState({
        pokemons: filteredPokemons,
      })
    }
  }

  getPokemonTypes() {
    const { pokemons } = this.props;
    const types = pokemons.reduce((types, { type }) => types.includes(type) ? types : [...types, type], []);
    return types;
  }

  render() {
    const { pokemons, pokemonIndex } = this.state;
    const pokemon = pokemons[pokemonIndex]
    const types = this.getPokemonTypes();

    return (
      <div className="pokedex-container">
        <h1>Results: { pokemons.length }</h1>
        <PokemonCard pokemon={ pokemon } />
        <div className="pokedex-prev-next-buttons-container">
          {/* <button 
            onClick={ () => this.previousPokemon() }
            disabled={ pokemons.length <= 1 }
            className="pokedex-prev-next-buttons">
              Previous Pokemon
          </button>
          <button 
            onClick={ () => this.nextPokemon() }
            disabled={ pokemons.length <= 1 }
            className="pokedex-prev-next-buttons">
              Next Pokemon
          </button> */}
          <Button
            handleClick={ () => this.previousPokemon() }
            disabled={ pokemons.length <= 1 }
            className={ 'pokedex-prev-next-buttons' }
          >
            Previous Pokemon
          </Button>
          <Button
            handleClick={ () => this.nextPokemon() }
            disabled={ pokemons.length <= 1 }
            className={ 'pokedex-prev-next-buttons' }
          >
            Next Pokemon
          </Button>
        </div>
        <div className="pokedex-type-buttons-container">
          {/* <button 
            className="pokedex-type-buttons"
            onClick={ () => this.filterPokemons('all') }>
              All
          </button>
          {types.map(type => 
            <button
              key={type}
              className="pokedex-type-buttons"
              onClick={ () => this.filterPokemons(type) }>
                {type}
            </button>)
          } */}
          
          <Button
            handleClick={ () => this.filterPokemons('all') }
            className={ 'pokedex-type-buttons' }
          >
            All
          </Button>
          {
          types.map(type => (
            <Button
              key={type}
              handleClick= { () => this.filterPokemons(type) }
              className={ 'pokedex-type-buttons' }
            >
              { type }
            </Button>
          ))
          }
        </div>
      </div>
    )
  }
}

export default Pokedex;
