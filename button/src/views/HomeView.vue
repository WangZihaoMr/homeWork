<template>
  <div class="home">
    <wangButton disabled> 默认按钮 </wangButton>
    <wangButton type="success" border> 成功按钮 </wangButton>
    <wangButton type="warning" round border> 警告按钮 </wangButton>
    <wangButton type="danger" border> 危险按钮 </wangButton>
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
