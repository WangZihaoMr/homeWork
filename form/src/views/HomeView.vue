<template>
  <div class="home">
    <wang-form :itemArray="itemArray" :field="formField"></wang-form>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    const validateName = (rule, value, callback) => {
      if (value && value !== '10') {
        console.log(value)
        callback(new Error('长度最少为10'))
      } else {
        callback()
      }
    }
    return {
      itemArray: [
        {
          label: '手机号',
          type: 'input',
          prop: 'phone',
          required: true,
          valueType: 'phone'
        },
        {
          label: '邮箱',
          type: 'input',
          prop: 'email',
          required: true,
          valueType: 'email'
        },
        {
          label: '姓名',
          type: 'input',
          prop: 'name',
          required: true,
          message: '姓名不能为空',
          rules: [
            { min: 6, max: 10, message: '请输入6-10个字符', trigger: 'change' },
            {
              validator: validateName,
              trigger: 'change'
            }
          ]
        },
        {
          label: '密码',
          type: 'input',
          prop: 'password',
          valueType: 'password',
          required: true,
          rules: [{ min: 6, message: '密码不能为空', trigger: 'blur' }]
        },
        {
          label: '水果',
          type: 'select',
          prop: 'fruit',
          required: true
        }
      ],
      formField: {
        phone: '15801217452',
        name: '王炸',
        password: '123456'
      }
    }
  },
  components: {
    wangForm: () => import('../components/form')
  }
}
</script>
