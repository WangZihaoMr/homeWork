<template>
  <div
    class="wang-button"
    :class="[theme, isRound, isBorder, isSize]"
    :disabled="disabled"
    :style="[isMinWidth]"
  >
    <slot></slot>
  </div>
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
    round: Boolean,
    border: Boolean,
    disabled: Boolean
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

  // > span {
  //   display: inline-flex;
  //   align-items: center;
  //   justify-content: center;
  // }
}
.wang-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #409eff;
  }
}
.wang-button-success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #00d100;
  }
}
.wang-button-warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #e6a23c;
  }
}
.wang-button-danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #f56c6c;
  }
}
.is-round {
  border-radius: 100px;
}
.wang-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.wang-button-medium {
  height: 38px;
  line-height: 38px;
}
.wang-button-small {
  padding: 0 20px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
}
.wang-button-mini {
  padding: 0 20px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
}
</style>
