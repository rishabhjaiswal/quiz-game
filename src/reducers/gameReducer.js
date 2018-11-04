import { Toast } from "native-base";
const initialState = {
  isFetching: false,
  error: false,
  game: []
};

export function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_GAME_REQUEST": {
      return { ...state, isFetching: true, game: [] };
    }
    case "GET_GAME_SUCCESS":
      return { ...state, isFetching: false, game: action.payload.data };
    case "GET_GAME_FAILURE":
      Toast.show({
        text: "Could not fetch data",
        buttonText: "X"
      });
      return { ...state, isFetching: false, error: true };

    default: {
      return state;
    }
  }
}

export function playAgainReducer(state = {}, action) {
  console.log("paly again reducer", action);
  switch (action.type) {
    case "PLAY_AGAIN":
      return { ...state };
    default: {
      return state;
    }
  }
}
