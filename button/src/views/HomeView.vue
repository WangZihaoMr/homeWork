<template>
  <div class="home">
    <wangButton></wangButton>
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
