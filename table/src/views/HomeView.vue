<template>
  <div class="home">
    <wang-table></wang-table>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    wangTable: () => import('../components/table')
  }
}
</script>
