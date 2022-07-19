<template>
  <div class="home">
    <wang-table :cloumns="cloumns" selection index>
      <template v-slot:operation="row">
        {{ row.data }}
        <el-button type="primary" @click="handleEditAction(row.data.id)"
          >编辑</el-button
        >
        <el-button type="danger">删除</el-button>
      </template>
    </wang-table>
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
        { prop: 'gender', label: '性别', width: '80' },
        {
          prop: 'operation',
          label: '操作',
          type: 'slot',
          slot_name: 'operation',
          width: '260'
        }
      ]
    }
  },
  components: {
    wangTable: () => import('../components/table')
  },
  methods: {
    handleEditAction(id) {
      console.log(id)
    }
  }
}
</script>
