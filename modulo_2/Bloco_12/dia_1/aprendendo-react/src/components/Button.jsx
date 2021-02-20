import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super()
    // Sua lógica extra vai aqui!
    // O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
    this.alertOnClick = this.alertOnClick.bind(this)
  }
  
  alertOnClick(string) {
    alert(string);
  }

  render() {
    return (
      <div className="teste">
        <button onClick={() => this.alertOnClick('OLA MEU CHAPA!')}>XABLAU!</button>
      </div>
    );
  }
}

export default Button;
