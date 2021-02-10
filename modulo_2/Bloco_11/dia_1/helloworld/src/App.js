import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import MyName from './Component';

const estouAprendendo = (conteudo) => {
  return (<h2 className="estou-aprendendo">Estou aprendendo {conteudo}!</h2>)
}

const element = React.createElement('h1', {className: 'hello-world'}, '#VQV!');

function App() {
  return (
    <div>
      <HelloWorld />
      <MyName />
      {estouAprendendo('React')}
      {element}
    </div>
  )
}

export default App;
