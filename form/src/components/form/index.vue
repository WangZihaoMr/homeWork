<template>
  <div class="form-container">
    <el-form ref="form" :model="field" label-width="80px">
      <el-form-item
        v-for="item in itemArray"
        :type="item.type"
        :key="item.prop"
        :label="item.label"
      >
        <el-input v-model="field[item.prop]"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      form: {
        name: ''
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
