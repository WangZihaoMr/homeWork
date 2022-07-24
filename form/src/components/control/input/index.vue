<template>
  <div class="">
    <el-input v-model="val" @input="handleInput"></el-input>
  </div>
</template>

<script>
export default {
  name: 'inputView',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
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
      val: ''
    }
  },
  methods: {
    handleInput() {
      this.$emit('update:value', this.val)
    }
  }
}
</script>
<style scoped lang="scss"></style>
