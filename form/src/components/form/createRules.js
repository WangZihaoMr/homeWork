const createRules = (data) => {
  console.log('数据', data)
  data.forEach((item) => {
    const ruleArray = []
    if (item.required) {
      console.log(item)
      const rules = { required: true, message: item.message || '必填' }
      ruleArray.push(rules)
    }
    item.rules = ruleArray
  })
  return data
}

export default createRules
