import { userConstants } from "./userActions";
import { todoService } from "../../services/todoService";
import { message } from 'antd';

export const todoConstants = {
  GET_TODO_LIST: 'GET_TODO_LIST',
  ADD_TODO: 'ADD_TODO',
  TOGGLE_ALL_TODO: 'TOGGLE_ALL_TODO',
  UPDATE_TODO: 'EDIT_TODO',
  DELETE_TODO: 'DELETE_TODO',
  DELETE_COMPLETED: 'DELETE_COMPLETED',
}

export const todoActions = {
  getTodoList,
  addTodo,
  toggleAllTodo,
  updateTodo,
  deleteTodo,
  deleteCompleted,
}

function getTodoList(){
  return dispatch => {
    todoService.getTodoList()
      .then(
        data => {
          const todos = data.todos;
          dispatch({type: todoConstants.GET_TODO_LIST, todos});
        },
        error => {
          message.error(error)
        }
      )
  };
}

function addTodo(newTodo){
  return dispatch => {
    todoService.addTodo(newTodo)
      .then(
        data => {
          const todos = data.todos;
          message.success(data.message)
          dispatch({type: todoConstants.ADD_TODO, todos});
          dispatch({type: userConstants.HISTORY_TODO_NUM_ADD});
        },
        error => {
          message.error(error)
        }
      )
  }
}

function updateTodo(tid, key, value){
  return dispatch => {
    todoService.updateTodo({tid, key, value})
      .then(
        data => {
          const num = data.num;
          if(key !== 'completed'){
            message.success(data.message)
          }
          dispatch({type: todoConstants.UPDATE_TODO, tid, key, value});
          dispatch({type: userConstants.COMPLETED_NUM_CHANGE, num})
        },
        error => {
          message.error(error)
        }
      )
  }
}

function toggleAllTodo(value){
  return dispatch => {
    todoService.toggleTodo({value})
      .then(
        data => {
          message.success(data.message)
          dispatch({type: todoConstants.TOGGLE_ALL_TODO, value});
          const num = data.num;
          dispatch({type:userConstants.COMPLETED_NUM_CHANGE, num})
        },
        error => {
          message.error(error);
        }
      );
  }
}

function deleteTodo(tid){
  return dispatch => {
    todoService.deleteTodo({tid})
      .then(
        data => {
          message.success(data.message)
          dispatch({type: todoConstants.DELETE_TODO, tid});
        },
        error => {
          message.error(error)
        }
      )
  }
}

function deleteCompleted(){
  return dispatch => {
    todoService.deleteCompleted()
      .then(
        data => {
          message.success(data.message)
          dispatch({type: todoConstants.DELETE_COMPLETED});
        },
        error => {
          message.info(error)
        }
      )
  }
}