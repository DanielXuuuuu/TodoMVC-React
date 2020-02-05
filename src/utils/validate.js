export const validator = {
  isValidEmail,
  isValidUsername,
  isValidPassword,
}

function isValidEmail(str){
  const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g
  return reg.test(str)
}

// 英文字母和数字组成的4-12位字符，以字母开头
function isValidUsername(str){
  const reg = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/
  return reg.test(str)
}

// 英文字母和数字组成的6-20位字符
function isValidPassword(str){
  const reg = /^[a-zA-Z0-9]{6,20}$/;
  return reg.test(str)
}

