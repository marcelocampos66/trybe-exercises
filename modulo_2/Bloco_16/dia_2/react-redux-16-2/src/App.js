import React from 'react';
import Sidebar from './components/Sidebar'
import Player from './components/Player';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Player />
        <Sidebar />
      </div>
    );
  }
};

export default App;
