<template>
  <div class="home">
    <wang-form :itemArray="itemArray" :field="formField"></wang-form>
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
          prop: 'name',
          rules: [
            {
              required: true,
              message: '必填'
            }
          ]
        },
        {
          label: '密码',
          type: 'input',
          prop: 'password',
          rules: [
            {
              required: true,
              message: '必填'
            }
          ]
        }
      ],
      formField: {
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
