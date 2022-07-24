<template>
  <div class="">
    <el-select v-model="val" @input="handleInput">
      <el-option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'selectView',
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    config: {
      handler(val) {
        this.initOptions()
      },
      immediate: true,
      deep: true
    },
    value: {
      handler(newValue) {
        console.log('newValue', newValue)
        this.val = newValue
      },
      immediate: true
    }
  },
  data() {
    return {
      val: '',
      options: []
    }
  },
  methods: {
    handleInput() {
      this.$emit('update:value', this.val)
    },
    initOptions() {
      const options = this.config.options
      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options
        console.log('selectOptions', this.options)
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
