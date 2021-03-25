import {  NAME, EMAIL, CPF, ADRESS, CITY, STATE, COMPLEMENT } from '../types';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
  complement: '',
};

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME:
      return {...state, name: action.name};
    case EMAIL:
      return {...state, email: action.email};
    case CPF: 
      return {...state, cpf: action.cpf};
    case ADRESS:
      return {...state, adress: action.adress};
    case CITY:
      return {...state, city: action.city};
    case STATE:
      return {...state, state: action.state};
    case COMPLEMENT:
      return {...state, complement: action.complement};
    default:
      return state;
  }
}

export default inputReducer;
