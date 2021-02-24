import React from 'react';

class RenderForm extends React.Component {
  render() {
    const { stateAtual } = this.props;
    const { nome, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao } = stateAtual;
    return (
      <div>
        <h1>Dados enviados:</h1>
        <p>Name: { nome }</p>
        <p>Email: { email }</p>
        <p>CPF: { cpf }</p>
        <p>Endereco: { endereco }</p>
        <p>Cidade: { cidade }</p>
        <p>Estado: { estado }</p>
        <p>Tipo residencial: { tipo }</p>
        <p>Curriculum: { resumo }</p>
        <p>Cargo: { cargo }</p>
        <p>Descricao do cargo: { descricao }</p>
      </div>
    );
  }
}

export default RenderForm;
