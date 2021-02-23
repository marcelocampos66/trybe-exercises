import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Form2 from './components/Form2/Form2';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <hr/>
        <br/>
        <hr/>
        {/* Form2 foi retirado diretamente do conteudo do dia para ser opcao de consulta caso necessario */}
        <Form2 />
      </div>
    );
  }
}

export default App;
