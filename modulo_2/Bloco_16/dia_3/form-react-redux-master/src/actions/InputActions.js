import {  NAME, EMAIL, CPF, ADRESS, CITY, COMPLEMENT, STATE } from '../types';

export const nameAction = (name) => ({
  type: NAME,
  name,
});

export const emailAction = (email) => ({
  type: EMAIL,
  email,
});
 
export const cpfAction = (cpf) => ({
  type: CPF,
  cpf,
});

export const adressAction = (adress) => ({
type: ADRESS,
  adress,
});

export const cityAction = (city) => ({
  type: CITY,
  city,
});

export const stateAction = (state) => ({
  type: STATE,
  state,
});

export const complementAction = (bool) => ({
  type: COMPLEMENT,
  complement: bool,
});
