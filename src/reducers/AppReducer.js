import { combineReducers } from "redux";
import { gameReducer, playAgainReducer } from "./gameReducer";

const appReducer = combineReducers({
  gameReducer,
  playAgainReducer
});

export default appReducer;
