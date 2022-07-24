<template>
  <div class="table-wrapper">
    <el-table
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange"
    >
      style="width: 100%">
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
          :render-header="item.renderHeader"
          :sort-by="item.sortBy"
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
          :render-header="item.renderHeader"
          :sort-by="item.sortBy"
        >
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :sort-by="item.sortBy"
          :sortable="item.sort"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :render-header="item.renderHeader"
        >
        </el-table-column>
      </template>
      <!-- <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
// 读取文件（webpack）
const files = require.context('../control', true, /index.vue$/i)
console.log(files.keys())
files.keys().forEach((item) => {
  const key = item.split('/')
  const name = key[1]
  const component = files(item).default
  console.log(name)
  console.log(component)
})
console.log('files', files)
export default {
  name: 'tableView',
  props: {
    cloumns: {
      type: Array,
      default: () => []
    },
    selection: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    },
    data: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    checkList: {
      type: Array,
      default: () => []
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function
  },
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.initRequest && this.loadGetData()
  },
  methods: {
    // sort
    handleSortChange({ column, prop, order }) {
      console.log(column, prop, order)
      const sortBy = column.sortBy
      console.log(sortBy, order)
      this.$emit('handleSortTable', { sortBy, order })
    },
    // 复选框
    handleSelectionChange(val) {
      // this.checkList = val    // sync 报错
      this.$emit('update:checkList', val)
      console.log('选中的商品', val)
    },
    async loadGetData() {
      // 监控控制台报错
      if (!this.url) {
        throw new Error('url is required')
        return false
      }

      try {
        const requestData = {
          url: this.url,
          method: this.method
        }

        // post接口传参
        if (this.data) {
          requestData.data = this.data
        }

        // get接口传参
        if (this.params) {
          requestData.params = this.data
        }

        // 发送请求
        const res = await this.$axios(requestData)
        console.log(res)
        this.tableData = res.data.data

        // 数据回调给父组件，父组件处理完毕之后，再赋值给子组件
        let data = res.data
        if (this.format && typeof this.format === 'function') {
          data = this.format(res.data)
          console.log('123', data)
        }
        this.tableData = data
        console.log('111', this.tableData)

        // onLoad数据回调
        this.onLoad && this.$emit('onLoad', res)
      } catch (error) {
        console.log(error)
      }
    },
    // 手动发送请求：通过父组件调用子组件的方法
    useInitRequest() {
      this.loadGetData()
    }
  }
}
</script>
<style scoped lang="scss"></style>
