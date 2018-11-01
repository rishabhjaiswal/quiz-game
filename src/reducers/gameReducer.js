
import { Toast } from 'native-base'
const initialState = {
  gameRequest: {

  }
};

export function gameReducer (state = initialState, action) {
  switch (action.type) {
    case "GET_GAME_REQUEST": {
      return {...state, isFetching: true }
    }
    case "GET_GAME_SUCCESS":
      return { ...state, isFetching: false, gameRequest: action.payload };
    case "GET_GAME_FAILURE":
      Toast.show({
        text: 'Could not fetch data',
        buttonText: 'X'
      })
      return { ...state, isFetching: false};
    
    default: {
      return state;
    }
  }
}