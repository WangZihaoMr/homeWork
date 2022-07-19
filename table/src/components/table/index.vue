<template>
  <div class="table-wrapper">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-if="index" type="index" label="序号" width="55">
      </el-table-column>
      <el-table-column v-if="selection" type="selection" width="55">
      </el-table-column>
      <el-table-column
        v-for="(item, index) in cloumns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>
      <!-- <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'tableView',
  props: {
    cloumns: {
      type: Array,
      default: () => []
    },
    selection: Boolean,
    index: Boolean
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
