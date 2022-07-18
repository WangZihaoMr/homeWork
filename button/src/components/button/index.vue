<template>
  <button
    class="wang-button"
    :class="[theme, isRound, isBorder, isSize, isBlock]"
    :disabled="disabled || loading"
    :style="[isMinWidth]"
    @click="chnage"
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
    chnage() {
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
// 主题类型
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
// 圆角边框
.is-round {
  border-radius: 100px;
}
// 禁用属性
.wang-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
// size button的大小
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
// 块级元素
.wang-button-block {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
}
// 图标左右外间距
.icon-prefix {
  margin-right: 10px;
}
.icon-suffix {
  margin-left: 10px;
}
// loading动画
.icon-loading {
  animation: loading 2s infinite linear;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
