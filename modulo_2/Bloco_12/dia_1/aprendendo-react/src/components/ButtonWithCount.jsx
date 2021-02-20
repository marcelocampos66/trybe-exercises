import React from 'react';

class ButtonWithCount extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeClicks: 0
    }
  }
  
  handleClick() {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/

    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */

    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks: estadoAnterior.numeroDeClicks + 1
    }))
  }

  render() {
    return (
      /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
      <div className="teste">
        <button onClick={this.handleClick}>{this.props.name}</button>
        <p>Clicks count: {this.state.numeroDeClicks}</p>
      </div>
    );
  }
}

// Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe 
// <button onClick{this.minhaFuncao} ...> 
// por 
// <button onClick={() => this.minhaFuncao('meu parametro')}

export default ButtonWithCount;
