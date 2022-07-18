<template>
  <div class="home">
    <wangButton> 默认按钮 </wangButton>
    <wangButton> 成功按钮 </wangButton>
    <wangButton> 警告按钮 </wangButton>
    <wangButton> 危险按钮 </wangButton>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    wangButton: () => import('../components/button')
  }
}
</script>

<style lang="scss" scoped></style>
