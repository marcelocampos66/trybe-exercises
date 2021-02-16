import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
