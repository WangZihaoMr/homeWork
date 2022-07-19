<template>
  <div class="home">
    <wangButton disabled min-width="80px" type="primary"> a </wangButton>
    <wangButton type="success"> 成功按钮 </wangButton>
    <wangButton
      :loading="loadingStatus"
      @loadingClick="loadingClick"
      type="warning"
      round
      border
      prefix="tongzhi"
    >
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
  },
  data() {
    return { loadingStatus: false }
  },
  methods: {
    loadingClick() {
      console.log('111')
      this.loadingStatus = true
      setTimeout(() => {
        this.loadingStatus = false
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped></style>
