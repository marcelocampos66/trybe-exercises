import React, { useContext } from 'react';
import { EnterpriseContext } from './EnterpriseContext';

import './Panel.css';

// ## Gerador de escudo
// - O escudo, quando habilitado, ocupa duas unidades de energia;
// - O escudo só pode ser habilitado se o motor de dobra estiver desabilitado.

export default function ShieldGenerator() {
  const {
    shieldsOnline,
    raiseShields,
    lowerShields
  } = useContext(EnterpriseContext);
  return (
    <div className="panel">
      <span>Escudos</span>
      <div className={`alert-light ${ shieldsOnline ? 'green-light' : 'red-light'}`} />
        <button onClick={ shieldsOnline ? lowerShields : raiseShields }>
        { shieldsOnline ? 'Descer' : 'Subir' } escudos
      </button>
    </div>
  );
}
