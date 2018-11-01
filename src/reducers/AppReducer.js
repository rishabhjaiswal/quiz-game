
import { combineReducers } from 'redux';
import { countReducer } from './countReducer';

const AppReducer = combineReducers({
  countReducer
});

export default AppReducer;