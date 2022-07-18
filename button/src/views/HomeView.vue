<template>
  <div class="home">
    <wangButton disabled min-width="80px"> a </wangButton>
    <wangButton type="success" size="mini"> 成功按钮 </wangButton>
    <wangButton type="warning" round border prefix="tongzhi">
      警告按钮
    </wangButton>
    <wangButton type="danger" border size="small" block suffix="tongzhi">
      危险按钮
    </wangButton>
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
