<template>
  <div class="home">
    <wang-form
      :itemArray="itemArray"
      :field="formField"
      :formButtons="formButtons"
      :before-submit="handleBeforeSubmit"
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
          key: 'submit',
          loading: false
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
          label: '教室',
          type: 'select',
          prop: 'class_name',
          props: {
            label: 'name',
            value: 'id'
          },
          options: [
            {
              label: '一班',
              value: 1
            },
            {
              label: '二班',
              value: 2
            },
            {
              label: '三班',
              value: 3
            },
            {
              label: '四班',
              value: 4
            }
          ]
        },
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
          // prop: 'email',
          required: true,
          valueType: 'email'
        },
        {
          label: '姓名',
          type: 'input',
          // prop: 'name',
          required: true
        },
        {
          label: '密码',
          type: 'input',
          // prop: 'password',
          valueType: 'password',
          required: true
        }
        // {
        //   label: '水果',
        //   type: 'select',
        //   prop: 'fruit',
        //   required: true
        // }
      ],
      formField: {
        phone: '15801217452',
        name: '666666',
        password: '1111111'
      }
    }
  },
  components: {
    wangForm: () => import('../components/form')
  },
  methods: {
    handleCancel() {
      alert('表单重置完成')
    },
    // loading提交回调
    handleBeforeSubmit() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
          // eslint-disable-next-line prefer-promise-reject-errors
          // reject()
        }, 2000)
      })
    }
  }
}
</script>
