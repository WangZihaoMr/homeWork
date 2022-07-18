<template>
  <div class="home">
    <wangButton disabled min-width="80px"> a </wangButton>
    <wangButton type="success" size="mini" block> 成功按钮 </wangButton>
    <wangButton type="warning" round border> 警告按钮 </wangButton>
    <wangButton type="danger" border size="small" block> 危险按钮 </wangButton>
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
