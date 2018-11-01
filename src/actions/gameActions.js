import { getGame } from '../utils/server';

export const GET_GAME_REQUEST = "GET_GAME_REQUEST";
export const GET_GAME_SUCCESS = "GET_GAME_SUCCESS";
export const GET_GAME_FAILURE = "GET_GAME_FAILURE";

export function getQuiz() {
  console.log("in actions.......")
  return (dispatch) => {
    dispatch({
      type: GET_GAME_REQUEST,
      payload: {}
    })
    getGame
      (
      data => {
        console.log("inn scuccess .......",data)
        dispatch({
          type: GET_GAME_SUCCESS,
          payload: data
        });
      },
      error => {
        console.log("inn errprrr........", error)
        dispatch({
          type: GET_GAME_FAILURE,
          payload: {}
        });
      }
      );
  };
}