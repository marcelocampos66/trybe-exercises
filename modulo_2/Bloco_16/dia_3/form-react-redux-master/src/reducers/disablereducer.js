import { DISABLE } from '../types';

const INITIAL_STATE = {
  disable: false,
};

const disableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISABLE:
      return {disable: action.disable};
    default:
      return state;
  }
};

export default disableReducer;
