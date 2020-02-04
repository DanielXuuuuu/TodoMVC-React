import { combineReducers } from "redux";
import { currentUser } from "./userReducer";
import { todoList } from "./todosReducer";

const todoApp = combineReducers({
  todoList,
  currentUser,
})

export default todoApp;