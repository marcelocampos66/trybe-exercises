import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <h3>About Pokedex</h3>
        <br />
        <p>The Pokédex is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media.</p>
        <br />
        <p>However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to its particular region, while the National Pokédex records information about all known Pokémon.</p>
        <br />
        <img
          src="https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png"
          alt="Pokédex"
        />
      </div>
    )
  }
}

export default About;
