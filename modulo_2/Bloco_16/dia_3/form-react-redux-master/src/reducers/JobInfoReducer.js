import { ABSTRACT, OFFICE, DESCRIPTION } from '../types';

const INITIAL_STATE = {
  abstract: '',
  office: '', 
  description: '',
};

const jobInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ABSTRACT:
      return {...state, abstract: action.abstract};
    case OFFICE:
      return {...state, office: action.office};
    case DESCRIPTION:
      return {...state, description: action.description};
    default:
      return state;
  }
};

export default jobInfoReducer;
