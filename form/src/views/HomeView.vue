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
          required: true,
          message: '姓名不能为空'
        },
        {
          label: '密码',
          type: 'input',
          prop: 'password',
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
