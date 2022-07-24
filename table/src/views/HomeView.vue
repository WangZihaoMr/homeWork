<template>
  <div class="home">
    <el-button type="primary" @click="handleGetCheckList"
      >测试点击获取checklist选中数据</el-button
    >
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
      :check-list.sync="checkList"
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
        {
          label: '姓名',
          prop: 'name',
          callback: () => {
            return 123
          }
        },
        {
          label: '创建时间',
          prop: 'create_date',
          callback: () => {
            return 123
          }
        }
        // {
        //   prop: 'operation',
        //   label: '操作',
        //   type: 'slot',
        //   slot_name: 'operation',
        //   width: '260'
        // }
      ],
      data_1: { name: 'jack' },
      params_1: { name: 'rose' },
      checkList: []
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
      // console.log('1', res.data)
      const tableData = res.data
      tableData.forEach((item) => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      // console.log('4', tableData)
      // return [res.data[0]]
      return tableData
    },
    // 点击获取checklist选中的数据，也可以通过watch监听获取
    handleGetCheckList() {
      console.log(this.checkList)
    }
  },
  watch: {
    checkList: {
      handler(val) {
        console.log(val)
      },
      deep: true
    }
  }
}
</script>
