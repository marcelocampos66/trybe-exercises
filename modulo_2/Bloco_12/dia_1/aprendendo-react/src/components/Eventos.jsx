import React from 'react';
import colors from '../data';

class Eventos extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTextValue: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({ inputTextValue: event.target.value });
  }

  render() {
    const { inputTextValue } = this.state;
    return (
      <div className="lista-de-cores">
        <h1>Lista de Cores</h1>
        <input 
          type="text" 
          onChange={this.handleChange} />
        <ul>
          {
            colors
              .filter(color => color.color.includes(inputTextValue))
              .map((color) => 
                <li key={color.value}>
                  <div 
                  style={{ background: color.value }}
                  className="color-square" />
                  {color.color}
                </li>)
          }
        </ul>
      </div>
    );
  }
}

export default Eventos;
