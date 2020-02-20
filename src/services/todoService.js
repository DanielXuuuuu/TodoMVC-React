import { authHeader } from "../utils/authHeader";
import { userService } from "./userService";
import { BASE_URL } from "./config";

export const todoService = {
  getTodoList,
  addTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
}

function getTodoList(){
  return fetch(`http://${BASE_URL}:8000/api/todos`, requestOptions('GET'))
    .then(checkStatus)
    .then(handleResponse);
}

function addTodo(data){
  return fetch(`http://${BASE_URL}:8000/api/todos`, requestOptions('POST', data))
    .then(checkStatus)
    .then(handleResponse);
}

function updateTodo(data){
  return fetch(`http://${BASE_URL}:8000/api/todos`, requestOptions('PUT', data))
  .then(checkStatus)
  .then(handleResponse);
}

function toggleTodo(data){
  return fetch(`http://${BASE_URL}:8000/api/todos/toggle`, requestOptions('PUT', data))
    .then(checkStatus)
    .then(handleResponse);
}

function deleteTodo(data){
  return fetch(`http://${BASE_URL}:8000/api/todos`, requestOptions('DELETE', data))
    .then(checkStatus)
    .then(handleResponse);
}

function deleteCompleted(){
  return fetch(`http://${BASE_URL}:8000/api/todos/deleteCompleted`, requestOptions('DELETE'))
    .then(checkStatus)
    .then(handleResponse);
}

const requestOptions = (method, data) => ({
  method: method,
  mode: 'cors',
  headers: { 
    ...authHeader(), 
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: (data ? JSON.stringify(data) : null),
});

function checkStatus(response){
  if(response.status >= 200 && response.status < 300){
    return response;
  }else {
    if(response.status === 401 || response.status === 403 ){
      userService.logout();
      window.location.reload(true);
    }
    return Promise.reject(response.statusText);
  }
}

function handleResponse(response) {
  return response.json().then(
    data => {
      if(data.success){
        return data;
      }else{
        return Promise.reject(data.message);
      }
    }
  )
}