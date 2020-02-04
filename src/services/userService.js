import { BASE_URL } from "./config";
import { authHeader } from "../utils/authHeader";

export const userService = {
  signup,
  login,
  logout,
  getProfile,
}

// 注册
function signup(data){
  return fetch(`http://${BASE_URL}:8000/api/signup`, requestOptions("POST", data))
    .then(checkStatus)
    .then(handleResponse);
}
// 登录
function login(data){
  return fetch(`http://${BASE_URL}:8000/api/signin`, requestOptions("POST", data))
    .then(checkStatus)
    .then(handleResponse)
    .then(data => {
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    });
}
// 登出
function logout() {
  localStorage.removeItem('user');
}

// 获取信息
function getProfile(data){
  return fetch(`http://${BASE_URL}:8000/api/profile`, requestOptions("GET", data))
    .then(checkStatus)
    .then(handleResponse)
    .then(data => {
      return data;
    });
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