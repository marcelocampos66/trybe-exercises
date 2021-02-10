import React from 'react';

const atividades = ['Tomar cafe', 'Correr', 'Pagar as contas', 'Lavar as roupas', 'Fazer o Almoco', 'Se preparar para o dia na Trybe', 'Ler 10 paginas de um livro'];

class ToDoList extends React.Component {
  render() {
    return (
      <div>
      <h1>Coisas que o Marcelo deve fazer:</h1>
      <ul>
        {atividades.map((atividade) => <li>{atividade}</li>)}
      </ul>
      </div>
    )
  }
}

export default ToDoList;
