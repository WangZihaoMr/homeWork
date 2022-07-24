<template>
  <div class="">
    <el-select v-model="val" @input="handleInput">
      <option v-for="(item, index) in options" :key="index" :value="item.value">
        {{ item.label }}
      </option>
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
