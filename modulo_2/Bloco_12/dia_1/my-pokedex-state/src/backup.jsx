import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filterType: 'all',
      // pokemons: this.props.pokemons,
    }
    this.previousPokemon = this.previousPokemon.bind(this)
    this.nextPokemon = this.nextPokemon.bind(this)
    this.filterPokemons = this.filterPokemons.bind(this)
    this.renderFilteredPokemon = this.renderFilteredPokemon.bind(this)

    this.showPokemon = this.showPokemon.bind(this)
  }

  showPokemon() {
    const { pokemons } = this.props;
    const { pokemonIndex, filterType } = this.state
    const teste = pokemons.filter(pokemon => pokemon.type === filterType);
    console.log(teste[pokemonIndex]);
  }

  filterPokemons(type) {
    this.setState({
      filterType: type,
      pokemonIndex: 0,
    });
  }

  renderFilteredPokemon() {
    const { pokemons } = this.props;
    const { filterType, pokemonIndex } = this.state

    if (filterType === 'all') {
      return pokemons[pokemonIndex];
    } else {
      return pokemons.filter(pokemon => pokemon.type === filterType)[pokemonIndex]
    }
  }

  previousPokemon() {
    const { pokemons } = this.props;
    
    if (this.state.pokemonIndex > 0) {
      this.setState((state) => ({
        pokemonIndex: state.pokemonIndex - 1
      })); 
    } else {
      this.setState(({ pokemonIndex: pokemons.length - 1 }));
    }
  }

  nextPokemon() {
    const { pokemons } = this.props;
    // const selected = this.renderFilteredPokemon();
    // console.log(selected);

    if (this.state.pokemonIndex < pokemons.length - 1) {
      this.setState((state) => ({
        pokemonIndex: state.pokemonIndex + 1
      }));
    } else {
      this.setState(({ pokemonIndex: 0 }));
    }
  }

  getPokemonTypes() {
    const { pokemons } = this.props;
    const types = pokemons.reduce((types, { type }) => types.includes(type) ? types : [...types, type], []);
    return types;
  }

  render() {
    const pokemon = this.renderFilteredPokemon();
    const types = this.getPokemonTypes();
    this.showPokemon();
    console.log(this.state.filterType);
    return (
      <div className="pokedex-container">
        <PokemonCard pokemon={ pokemon } />
        <div className="pokedex-prev-next-buttons-container">
          <button 
            onClick={ this.previousPokemon }
            className="pokedex-prev-next-buttons">
              Previous Pokemon
          </button>
          <button 
            onClick={ this.nextPokemon }
            className="pokedex-prev-next-buttons">
              Next Pokemon
          </button>
        </div>
        <div className="pokedex-type-buttons-container">
          <button 
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
            </button>)}
        </div>
      </div>
    )
  }
}

export default Pokedex;
