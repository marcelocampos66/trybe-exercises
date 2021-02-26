import React from 'react';
import CounterV2 from './CounterV2';

class CounterV2Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterV2 value={this.state.counter} />
      </div>
    );
  }
}

export default CounterV2Container;
