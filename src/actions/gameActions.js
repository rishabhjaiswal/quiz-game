import { getGame } from "../utils/server";

export const GET_GAME_REQUEST = "GET_GAME_REQUEST";
export const GET_GAME_SUCCESS = "GET_GAME_SUCCESS";
export const GET_GAME_FAILURE = "GET_GAME_FAILURE";

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
