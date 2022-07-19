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
    index: Boolean,
    url: {
      type: String,
      default: '',
      required: true
    },
    method: {
      type: String,
      default: 'GET'
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.loadGetData()
  },
  methods: {
    async loadGetData() {
      // 监控报错
      if (!this.url) {
        throw new Error('url is required')
        return false
      }

      try {
        // 发送请求
        const res = await this.$axios({
          url: this.url,
          method: this.method
        })
        console.log(res)
        this.tableData = res.data.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
