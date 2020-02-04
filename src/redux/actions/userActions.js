import { userService } from "../../services/userService";
import { message } from 'antd';

export const userConstants = {
  // 注册
  USER_SIGNUP: 'USER_SIGNUP',
  // 登录
  USER_LOGIN: 'USER_LOGIN',
  // 注销
  USER_LOGOUT: 'USER_LOGOUT',
  // 获取信息
  GET_PROFILE: 'GET_PROFILE',

  HISTORY_TODO_NUM_ADD: 'HISTORY_TODO_NUM_ADD',
  COMPLETED_NUM_CHANGE: 'COMPLETED_NUM_CHANGE',
};

export const userAction = {
  signup,
  login,
  logout,
  getProfile,
}

function signup(user){
  return dispatch => {
    userService.signup(user)
      .then(
        data => {
          message.success(data.message)
          window.location = '/sign_in';
        },
        error => {
          message.error(error)
        }
      );
  }
}

function login(user){
  return dispatch => {
    userService.login(user)
      .then(
        data => {
          const user = data.user;
          message.success(data.message)
          dispatch({type: userConstants.USER_LOGIN, user});
          window.location = '/';
        },
        error => {
          message.error(error)
        }
      );
  };
}

function logout(){
  userService.logout();
  return {type: userConstants.USER_LOGOUT};
}

function getProfile(){
  return dispatch => {
    userService.getProfile()
      .then(
        data => {
          console.log(data);
          const userInfo = data.userInfo;
          dispatch({type: userConstants.GET_PROFILE, userInfo});
        },
        error => {
          message.error(error)
        }
      );
  }
}