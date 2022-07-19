<template>
  <button
    class="wang-button"
    :class="[theme, isRound, isBorder, isSize, isBlock]"
    :disabled="disabled"
    :loading="loading"
    :style="[isMinWidth]"
    @click="change"
  >
    <span>
      <i v-if="loading" class="iconfont icon-prefix icon-loading"></i>
      <i v-if="prefix" class="iconfont icon-prefix" :class="iconPrefix"></i>
      <slot></slot>
      <i v-if="suffix" class="iconfont icon-suffix" :class="iconSuffix"></i
    ></span>
  </button>
</template>

<script>
export default {
  name: 'buttonView',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: '95px'
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    block: Boolean,
    loading: Boolean
  },
  computed: {
    theme() {
      return this.type ? `wang-button-${this.type}` : ''
    },
    isRound() {
      return this.round ? 'is-round' : ''
    },
    isBorder() {
      return this.border ? 'is-border' : ''
    },
    isSize() {
      return this.size ? `wang-button-${this.size}` : ''
    },
    isMinWidth() {
      if (!this.minWidth) return ''
      return { 'min-width': this.minWidth }
    },
    isBlock() {
      if (!this.block) return ''
      return this.block ? 'wang-button-block' : ''
    },
    iconPrefix() {
      return this.prefix ? `icon-${this.prefix}` : ''
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : ''
    },
    iconLoading() {
      console.log(this.loading)
      return this.loading ? `icon-${this.loading}` : ''
    }
  },
  methods: {
    change() {
      this.$emit('loadingClick')
    }
  }
}
</script>
<style scoped lang="scss">
.wang-button {
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-color: #dcdfe6;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  + .wang-button {
    margin-left: 14px;
    margin-bottom: 10px;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@import './button.scss';
</style>
