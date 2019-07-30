import * as types from '../constants/actionType';

const INITIAL_STATE = {
    homeInfo: {},
  
}
  
  export default function home (state = INITIAL_STATE, action) {
    switch (action.type) {
      case types.HOME_INFO: {
        return {
          ...state,
          homeInfo: action.payload
        }
      }
      default:
        return state
    }
  }