import React, { useContext } from 'react';
import { EnterpriseContext } from './EnterpriseContext';

import './Panel.css';

// ## Central de armas
// - As armas podem ser totalmente habilitadas ou desabilitadas com o apertar de um botão;
// - A ativação das armas não ocupa unidades de energia, mas as armas tem três níveis de potência que o operador pode incrementar ou decrementar como quiser. Cada nível de potência ocupa uma unidade de energia. Por exemplo: (i) armas habilitadas em nível 0 não gastam energia; (ii) armas habilitadas em nível 3 ocupam 3 unidades de energia;
// - Se o motor de dobra está habilitado, as armas não podem ser habilitadas;
// - Enquanto as armas estiverem desabilitadas, os níveis de potência não podem ser incrementados.

export default function WeaponsBay() {
  const {
    weaponsEnabled,
    weaponsLevel,
    weaponsOnline,
    weaponsOffline,
    lowerFirePower,
    raiseFirePower
  } = useContext(EnterpriseContext);
  return (
    <div className="panel">
      <span>Armas</span>
      <div className={`alert-light ${ weaponsEnabled ? 'green-light' : 'red-light'}`} />
      <button onClick={ weaponsEnabled ? weaponsOffline : weaponsOnline }>
        {weaponsEnabled ? 'Desligar' : 'Ligar'} armas
      </button>
      <span>Nível das armas: {weaponsLevel}</span>
        <button onClick={raiseFirePower}>Aumentar poder de fogo</button>
      <button onClick={lowerFirePower}>Diminuir poder de fogo</button>
      <span>Nível máximo: 3</span>
    </div>
  );
}
