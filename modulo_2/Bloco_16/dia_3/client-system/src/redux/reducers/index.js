import { combineReducers } from 'redux';
import inputRegisterReducer from '../reducers/inputRegisterReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  inputRegisterReducer,
  usersReducer,
});

export default rootReducer;
