import React from 'react';
import './App.css';

const atividades = ['Tomar cafe', 'Correr', 'Pagar as contas', 'Lavar as roupas', 'Fazer o Almoco', 'Se preparar para o dia na Trybe', 'Ler 10 paginas de um livro'];
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <h1>Coisas que o Marcelo deve estudar:</h1>
      <ol>
        {task('CSS')}
        {task('React')}
        {task('Jest')}
        {task('JavaScript')}
        {task('Python')}
      </ol>

      <h1>Coisas que o Marcelo deve fazer:</h1>
      <ul>{atividades.map((atividade) => <li>{atividade}</li>)}</ul>
    </div>
  );
}

export default App;
