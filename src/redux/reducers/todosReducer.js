import { todoConstants } from "../actions/todoActions";

export function todoList(state = [], action){
  switch(action.type){
    case todoConstants.GET_TODO_LIST:
      return action.todos;
    case todoConstants.ADD_TODO:
      return action.todos;
    case todoConstants.DELETE_TODO:
      let todoList = state.slice();
      todoList.splice(todoList.findIndex(todo => {
        return todo._id === action.tid
      }), 1);
      return todoList;
    case todoConstants.DELETE_COMPLETED:
      return state.filter(todo => {
        if(todo.completed === true){
          return false;
        }
        return true;
      });
    case todoConstants.UPDATE_TODO:
      return state.map((todo, index) => {
        if (todo._id === action.tid) {
          return Object.assign({}, todo, {
            [action.key]: action.value
          })
        }
        return todo
      });
    case todoConstants.TOGGLE_ALL_TODO:
      return state.map((todo, index) => {
        if(todo.completed !== action.value){
          return Object.assign({}, todo, {
            completed: action.value
          })
        }
        return todo;
      })
    default:
      return state;
  }
}

