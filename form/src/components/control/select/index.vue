<template>
  <div class="">
    <el-select v-model="val" @change="handleChangeEvent(val)">
      <el-option
        v-for="item in options"
        :key="item[props.value]"
        :value="item[props.value]"
        :label="item[props.label]"
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
      type: [String, Number],
      default: ''
    }
  },
  watch: {
    config: {
      handler(val) {
        this.initOptions()
        this.initProps()
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
      options: [],
      props: {
        label: 'label',
        value: 'value'
      }
    }
  },
  methods: {
    handleChangeEvent(val) {
      this.$emit('update:value', val)
    },
    initOptions() {
      const options = this.config.options
      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options
        console.log('selectOptions', this.options)
      }
    },
    initProps() {
      const props = this.config.props
      const keys = Object.keys(this.props)
      console.log(props)
      console.log(keys)
    }
  }
}
</script>
<style scoped lang="scss"></style>
