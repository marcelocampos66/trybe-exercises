import React from 'react';

class BackgroundButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'black',
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    // console.log(event.target.value);
    this.setState({
      backgroundColor: event.target.value
    })
  }

  render() {
    return (
      <div className="teste">
        <div>
          <button value="red" onClick={ this.handleEvent }>Red</button>
          <button value="green" onClick={ this.handleEvent }>Green</button>
          <button value="blue" onClick={ this.handleEvent }>Blue</button>
        </div>
        <div 
        className="square"
        style={{ background: this.state.backgroundColor }} />
      </div>
    );
  }
}

export default BackgroundButtons;
