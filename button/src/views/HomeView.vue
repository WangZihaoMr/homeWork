<template>
  <div class="home">
    <wangButton> 默认按钮 </wangButton>
    <wangButton type="success"> 成功按钮 </wangButton>
    <wangButton type="warning"> 警告按钮 </wangButton>
    <wangButton type="danger"> 危险按钮 </wangButton>
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
