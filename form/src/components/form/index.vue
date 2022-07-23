<template>
  <div class="form-container">
    <el-form ref="form" :model="field" label-width="80px">
      <template v-for="item in arrForm">
        <el-form-item
          v-if="item.type === 'input'"
          :type="item.type"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item
          v-if="item.type === 'select'"
          :type="item.type"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button
          v-for="item in formButtons"
          :key="item.key"
          :type="item.type"
          :size="item.size"
          @click="handleButton(item)"
          >{{ item.text }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import createRules from './createRules'

export default {
  name: 'formView',
  props: {
    itemArray: {
      type: Array,
      default: () => []
    },
    formButtons: {
      type: Array,
      default: () => []
    },
    field: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return { arrForm: [] }
  },
  beforeMount() {
    this.arrForm = createRules(this.itemArray)
  },
  methods: {
    handleButton(item) {
      console.log(item)
      if (item.key === 'submit') {
        this.handleSubmit()
        return false
      }
      if (item.key === 'cancel') {
        this.handleCancel(item)
        return false
      }
    },
    // 提交
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(valid)
        }
      })
    },
    // 取消
    handleCancel(item) {
      this.$refs.form.resetFields()
      // 如果取消之后想返回信息，可以使用callback回调函数触发
      item.callback && item.callback()
      console.log(item)
    }
  }
}
</script>
<style scoped lang="scss"></style>
