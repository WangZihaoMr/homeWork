<template>
  <div class="home">
    <wang-form
      :itemArray="itemArray"
      :field="formField"
      :rules="formRules"
    ></wang-form>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      itemArray: [
        {
          label: '姓名',
          type: 'input',
          prop: 'name'
        },
        {
          label: '密码',
          type: 'input',
          prop: 'password'
        }
      ],
      formField: {
        name: '王炸',
        password: '123456'
      },
      formRules: {
        name: [
          {
            required: true,
            message: '必填'
          }
        ],
        password: [
          {
            required: true,
            message: '必填'
          }
        ]
      }
    }
  },
  components: {
    wangForm: () => import('../components/form')
  }
}
</script>
