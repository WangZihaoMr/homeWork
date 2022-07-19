<template>
  <div class="home">
    <wang-table
      :cloumns="cloumns"
      selection
      index
      :data="data_1"
      :params="params_1"
      url="/name/"
      method="GET"
      ref="tableRequestRef"
      onLoad
      @onLoad="onLoad"
      :format="formatData"
    >
      <template v-slot:operation="row">
        <!-- {{ row.data }} -->
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
        // {
        //   prop: 'title',
        //   label: '标题',
        // ,
        //   type: 'function',
        //   callback: (row) => {
        //     return `${row.title}`
        //   }
        // },
        // { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        // { prop: 'address', label: '地址' },
        { prop: 'gender', label: '性别' },
        {
          prop: 'operation',
          label: '操作',
          type: 'slot',
          slot_name: 'operation',
          width: '260'
        }
      ],
      data_1: { name: 'jack' },
      params_1: { name: 'rose' }
    }
  },
  components: {
    wangTable: () => import('../components/table')
  },
  mounted() {
    // 调用子组件的useInitRequest()方法，发送请求
    setTimeout(() => {
      // 异步请求，所以导致获取不到数据
      this.$refs.tableRequestRef.useInitRequest()
    }, 1000)
  },
  methods: {
    handleEditAction(id) {
      console.log(id)
    },
    // onLoad：子组件通过触发父组件的方法，进行数据回调
    onLoad(res) {
      console.log(res)
    },
    // 父组件数据格式化之后---->传给---->子组件
    formatData(res) {
      console.log('1', res.data)
      return [res.data[0]]
    }
  }
}
</script>
