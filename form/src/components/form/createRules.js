const createRules = (data) => {
  console.log('数据', data)
  data.forEach((item) => {
    let ruleArray = []
    if (item.required) {
      console.log(item)
      const rules = {
        required: true,
        message: item.message || createMessage(item) || '必填'
      }
      ruleArray.push(rules)
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
