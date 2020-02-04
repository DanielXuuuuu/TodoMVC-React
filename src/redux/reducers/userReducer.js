import { userConstants } from "../actions/userActions";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? user : {};

export function currentUser(state = initialState, action){
  switch(action.type) {
    case userConstants.USER_LOGIN:
      return action.user
    case userConstants.USER_LOGOUT:
      return {};
    case userConstants.GET_PROFILE:
      return action.userInfo
    case userConstants.HISTORY_TODO_NUM_ADD:
      return Object.assign({}, state, {
        historyNumber: state.historyNumber + 1
      });
    case userConstants.COMPLETED_NUM_CHANGE:
      console.log(state);
      return Object.assign({}, state, {
        completedNumber: state.completedNumber + action.num
      });
    default:
      return state
  }
}