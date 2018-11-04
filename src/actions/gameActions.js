import { getGame } from "../utils/server";
import { Actions } from "react-native-router-flux";

export const GET_GAME_REQUEST = "GET_GAME_REQUEST";
export const GET_GAME_SUCCESS = "GET_GAME_SUCCESS";
export const GET_GAME_FAILURE = "GET_GAME_FAILURE";
export const PLAY_AGAIN = "PLAY_AGAIN";

export function getQuiz() {
  return dispatch => {
    dispatch({
      type: GET_GAME_REQUEST,
      payload: {}
    });
    getGame(
      data => {
        dispatch({
          type: GET_GAME_SUCCESS,
          payload: data
        });
      },
      error => {
        dispatch({
          type: GET_GAME_FAILURE,
          payload: {}
        });
      }
    );
  };
}

export function playAgain() {
  console.log("play Again action.....");
  return dispatch => {
    dispatch({
      type: PLAY_AGAIN
    });
    Actions.popTo("homeScreen");
  };
}
