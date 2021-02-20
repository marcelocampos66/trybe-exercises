import React from "react";

class ClickCount extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  addCount = () =>
    this.setState((state) => ({
      count: state.count + 1
    }));

  subCount = () =>
    this.setState((state) => ({
      count: state.count - 1
    }));

  render() {
    const { count } = this.state;
    return (
      <div className="teste">
        <button onClick={this.subCount}> - </button>
        <p>{count}</p>
        <button onClick={this.addCount}> + </button>
      </div>
    );
  }
}

export default ClickCount;
