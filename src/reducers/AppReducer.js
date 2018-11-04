import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";

const appReducer = combineReducers({
  gameReducer
});

export default appReducer;
