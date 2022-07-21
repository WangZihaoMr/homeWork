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
  }
}
</script>
<style scoped lang="scss"></style>
