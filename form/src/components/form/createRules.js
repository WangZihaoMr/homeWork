const createRules = (data) => {
  console.log('数据', data)
  data.forEach((item) => {
    let ruleArray = []

    // 判断是否要校验
    if (item.required) {
      console.log(item)
      const rules = {
        required: true,
        message: item.message || createMessage(item) || '必填'
      }
      ruleArray.push(rules)
    }

    // 校验手机号
    if (item.valueType && item.valueType === 'phone') {
      const regPhone = /^1[3456789]d{9}$/
      const validatePhone = (rule, value, callback) => {
        if (value && regPhone.test(value)) {
          callback()
        } else {
          callback(new Error('请输入合法的手机号'))
        }
      }
      const rule = { validator: validatePhone, trigger: 'change' }
      ruleArray.push(rule)
    }

    // 校验密码
    if (item.valueType && item.valueType === 'password') {
      const regPassword = /^[a-zA-Z0-9]{6-18}/
      const validatePassword = (rule, value, callback) => {
        return regPassword.test(value)
      }
      const rule = { validator: validatePassword, trigger: 'change' }
      ruleArray.push(rule)
    }

    // 校验邮箱
    if (item.valueType && item.valueType === 'email') {
      const regEmail = /1/
      const validateEmail = (rule, value, callback) => {
        if (value && regEmail.test(value)) {
          callback()
        } else {
          callback(new Error('请输入合法邮箱地址'))
        }
      }
      const rule = { validator: validateEmail, trigger: 'change' }
      ruleArray.push(rule)
    }

    // 判断是否有额外的校验规则
    if (item.rules && Array.isArray(item.rules)) {
      ruleArray = ruleArray.concat(item.rules)
    }
    item.rules = ruleArray
  })
  return data
}

// 自动生成message
const createMessage = (item) => {
  let msg = ''
  switch (item.type) {
    case 'input':
      msg = '请输入'
      break
    case 'select':
      msg = '请选择'
      break
  }
  return `${msg}${item.label}`
}

export default createRules
