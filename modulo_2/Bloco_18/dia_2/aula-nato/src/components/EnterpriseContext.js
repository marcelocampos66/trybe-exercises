import React, { createContext, useState } from 'react';

const EnterpriseContext = createContext();

const EnterpriseProvider = ({ children }) => {
  const [energyUsed, setEnergyUsed] = useState(0);
  const [warpSpeed, setWarpSpeed] = useState(false);
  const [shieldsOnline, setShieldsOnline] = useState(false);
  const [weaponsEnabled, setWeaponsEnabled] = useState(true);
  const [weaponsLevel, setWeaponsLevel] = useState(0);

  const engageWarpSpeed = () => {
    if (warpSpeed || shieldsOnline || weaponsEnabled || energyUsed > 2) return;

    setWarpSpeed(true);
    setEnergyUsed((currentEnergyUsed) => currentEnergyUsed + 2);
  }

  const disengageWarpSpeed = () => {
    if (!warpSpeed) return;

    setWarpSpeed(false);
    setEnergyUsed((currentEnergyUsed) => currentEnergyUsed - 2);
  }

  const raiseShields = () => {
    if (warpSpeed || shieldsOnline || energyUsed > 2) return;

    setShieldsOnline(true);
    setEnergyUsed((currentEnergyUsed) => currentEnergyUsed + 2);
  }

  const lowerShields = () => {
    if (!shieldsOnline || energyUsed === 0) return;

    setShieldsOnline(false);
    setEnergyUsed((currentEnergyUsed) => currentEnergyUsed - 2);
  }

  const weaponsOnline = () => {
    if (warpSpeed || weaponsEnabled) return;

    setWeaponsEnabled(true);
  };

  const weaponsOffline = () => {
    if (warpSpeed || !weaponsEnabled) return;

    setWeaponsEnabled(false);
    setEnergyUsed((currentEnergyUsed) => currentEnergyUsed - weaponsLevel);
    setWeaponsLevel(0);
  };

  const raiseFirePower = () => {
    if (warpSpeed || energyUsed === 4 || weaponsLevel === 3 || !weaponsEnabled) return

    setWeaponsLevel((currentLevel) => currentLevel + 1);
    setEnergyUsed((currentEnergyUsed) => currentEnergyUsed + 1);
  }

  const lowerFirePower = () => {
    if (warpSpeed || weaponsLevel === 0 || !weaponsEnabled || energyUsed === 0) return;

    setWeaponsLevel((currentLevel) => currentLevel - 1)
    setEnergyUsed((currentEnergyUsed) => currentEnergyUsed - 1)
  }

  const context = {
    energyUsed,
    warpSpeed,
    shieldsOnline,
    weaponsEnabled,
    weaponsLevel,
    engageWarpSpeed,
    disengageWarpSpeed,
    raiseShields,
    lowerShields,
    weaponsOnline,
    weaponsOffline,
    raiseFirePower,
    lowerFirePower
  };

  return (
    <EnterpriseContext.Provider value={context}>
      { children}
    </EnterpriseContext.Provider>
  )
  // <EnterpriseContext.Provider value={context}>
  //   <Panel />
  // </EnterpriseContext.Provider>
}

export { EnterpriseContext, EnterpriseProvider as Provider };


