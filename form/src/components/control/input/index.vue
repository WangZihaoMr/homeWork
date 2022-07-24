<template>
  <div class="">
    <el-input v-model="val"></el-input>
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
  }
}
</script>
<style scoped lang="scss"></style>
