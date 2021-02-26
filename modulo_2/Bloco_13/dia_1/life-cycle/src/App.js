import React from 'react';
import MyJoke from './components/MyJoke';
import Counter from './components/Counter';
import CounterV2Container from './components/CounterV2Container';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyJoke />
        <Counter />
        <CounterV2Container />
      </div>
    );
  }
}

export default App;
