// 校验手机号
const regPhone = /^1[3456789]d{9}$/
export const validatePhone = (rule, value, callback) => {
  if (value && regPhone.test(value)) {
    callback()
  } else {
    callback(new Error('请输入合法的手机号'))
  }
}

// 校验邮箱
const regPassword = /^[a-zA-Z0-9]{6-18}/
export const validatePassword = (rule, value, callback) => {
  return regPassword.test(value)
}

// 校验密码
const regEmail = /1/
export const validateEmail = (rule, value, callback) => {
  if (value && regEmail.test(value)) {
    callback()
  } else {
    callback(new Error('请输入合法邮箱地址'))
  }
}
