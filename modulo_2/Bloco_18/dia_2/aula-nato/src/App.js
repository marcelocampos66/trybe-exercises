import React from 'react';
import { Provider } from './components/EnterpriseContext.js';
import Panel from './components/Panel.js';

// ## Geral
// - A Enterprise começa com o motor de dobra e os escudos desabilitados e com as armas habilitadas em nível 0.

function App() {
  return (
    <Provider>
      <Panel />
    </Provider>
  );
}

export default App;
