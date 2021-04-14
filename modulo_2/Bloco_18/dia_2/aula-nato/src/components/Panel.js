// ## Energia
// - A Enterprise tem 4 unidades de energia disponíveis para uso;
// - Nenhum comando pode ser executado se não houver energia disponível suficiente pra ele. Um comando executado ocupa unidades de energia que a nave tem disponíveis;
// - A quantidade de energia utilizada é exibida no topo do painel.

import React, { useContext } from 'react';
import './Panel.css';
import { EnterpriseContext } from './EnterpriseContext'

import WarpDrive from './WarpDrive';
import WeaponsBay from './WeaponsBay';
import ShieldGenerator from './ShieldGenerator';

function Panel() {
  const { energyUsed } = useContext(EnterpriseContext);
  return (
    <div className="complete-panel">
      <span className="energy-gauge">Energia em utilização: {energyUsed}</span>
      <div className="interactions-panel">
        <WarpDrive />
        <WeaponsBay />
        <ShieldGenerator />
      </div>
      <span className="energy-warning">A nave tem 4 de energia</span>
    </div>
  );
}

export default Panel;
