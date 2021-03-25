import { combineReducers } from 'redux';
import inputReducer from '../reducers/InputReducer';
import jobInfoReducer from '../reducers/JobInfoReducer';
import disableReducer from '../reducers/disablereducer';


const rootReducers = combineReducers({
  inputReducer,
  jobInfoReducer,
  disableReducer,
});

export default rootReducers;
