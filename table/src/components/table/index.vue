<template>
  <div class="table-wrapper">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column v-if="index" type="index" label="序号" width="55">
      </el-table-column>
      <el-table-column v-if="selection" type="selection" width="55">
      </el-table-column>
      <template v-for="(item, index) in cloumns">
        <el-table-column
          v-if="item.type === 'function'"
          :prop="item.title"
          :label="item.label"
          :width="item.width"
          :key="index"
        >
          <template v-slot="scope">
            <div v-html="item && item.callback(scope.row)"></div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="item.type === 'slot'"
          :key="item.name"
          :label="item.label"
          :width="item.width"
        >
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
        </el-table-column>
      </template>
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
          id: '1',
          title: '<a href="https://www.baidu.com">去百度</a>',
          date: '2016-05-02',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: '2',
          title: '<a href="https://www.baidu.com">去百度</a>',
          date: '2016-05-04',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id: '3',
          title: '<a href="https://www.baidu.com">去百度</a>',
          date: '2016-05-01',
          name: '王小虎',
          gender: '男',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          id: '4',
          title: '<a href="https://www.baidu.com">去百度</a>',
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
