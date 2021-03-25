import { NAME, AGE, EMAIL } from '../actions/actionsTypes';

const INITIAL_STATE = {
  name: '',
  age: '',
  email: '',
}

const inputRegisterReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case NAME:
    return ({
      ...state,
      name: action.name,
    })
  case AGE:
    return ({
      ...state,
      age: action.age,
    })
  case EMAIL:
    return ({
      ...state,
      email: action.email,
    })
  default:
    return state;
  }
}

export default inputRegisterReducer;
