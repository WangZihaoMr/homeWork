<template>
  <div class="home">
    <wang-form
      :itemArray="itemArray"
      :field="formField"
      :formButtons="formButtons"
    ></wang-form>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      formButtons: [
        {
          type: 'primary',
          size: 'mini',
          text: '提交',
          key: 'submit'
        },
        {
          type: 'danger',
          size: 'small',
          text: '取消',
          key: 'cancel',
          callback: () => this.handleCancel()
        },
        {
          type: 'success',
          size: 'large',
          text: '下一个',
          key: 'next'
        }
      ],
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
          required: true
        },
        {
          label: '密码',
          type: 'input',
          prop: 'password',
          valueType: 'password',
          required: true
        },
        {
          label: '水果',
          type: 'select',
          prop: 'fruit',
          required: true
        }
      ],
      formField: {
        phone: '',
        name: '',
        password: ''
      }
    }
  },
  components: {
    wangForm: () => import('../components/form')
  },
  methods: {
    handleCancel() {
      alert('表单重置完成')
    }
  }
}
</script>
