<template>
  <div class="home">
    <wang-table :cloumns="cloumns" selection index></wang-table>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      cloumns: [
        {
          prop: 'title',
          label: '标题',
          width: '180',
          type: 'function',
          callback: (row) => {
            return `${row.title}`
          }
        },
        { prop: 'date', label: '日期', width: '180' },
        { prop: 'name', label: '姓名', width: '180' },
        { prop: 'address', label: '地址', width: '200' },
        { prop: 'gender', label: '性别', width: '80' }
      ]
    }
  },
  components: {
    wangTable: () => import('../components/table')
  }
}
</script>
