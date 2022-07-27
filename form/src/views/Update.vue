<template>
  <div class="update-box">
    <span>文件上传</span>
    <hr />
    <div class="update-wrapper">
      <input
        ref="update"
        type="file"
        @change="handleSelectFile"
        class="update-input"
      />
      <el-button type="success" size="mini" @click="handleClick"
        >选择文件</el-button
      >
      <el-button
        type="primary"
        size="mini"
        :loading="loading"
        @click="handleSendFile"
        >上传</el-button
      >
      <div class="update-info" v-if="files">文件：{{ files.name }}</div>
    </div>
    <img :src="imgUrl" width="100" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: '',
      imgUrl: '',
      loading: false
    }
  },
  methods: {
    // 点击选中文件按钮触发选择文件
    handleClick() {
      this.$refs.update.click()
    },
    // 原选择文件input框
    handleSelectFile(e) {
      this.files = e.target.files[0]
      console.log(e.target.files[0])
    },
    // 点击上传   需要做两件事情：1、判断文件的大小 2、判断文件的类型
    async handleSendFile() {
      this.loading = true
      if (this.files === '') {
        this.$message({
          message: '请选择要上传的文件！',
          type: 'warning'
        })
        return false
      }
      // 文件大小
      const size = this.files.size
      // 限制的文件大小 (限制2兆)
      const targetSize = 1024 * 1024 * 2

      // 判断上传文件大小
      if (size > targetSize) {
        this.$message.error('文件的大小不能超过2MB！')
        return false
      }

      // 获取文件的类型
      const type = this.files.type
      // 判断上传文件的类型
      if (!/png|jpg|gif|jpeg/i.test(type)) {
        this.$message.error('文件类型只能是png、jpg、git、jpeg！')
        return false
      }

      // 文件需要添加到formData中
      const formData = new FormData()
      formData.append('file', this.files)
      formData.append('filename', this.files.name)

      // 发送上传文件请求
      const res = await this.$axios({
        url: '/api/upload_single',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      })
      this.loading = false
      this.imgUrl = res.data.servicePath
      console.log(res)
    }
  }
}
</script>

<style scoped lang="scss">
.update-box {
  width: 100%;
  height: 100%;
  .update-input {
    display: none;
  }
  .update-wrapper {
    width: 300px;
    height: 150px;
    padding: 12px;
    box-sizing: border-box;
    border: 1px dashed #67cf3b;
    .update-info {
      margin-top: 10px;
      font-size: 12px;
      color: #b0b1b1;
    }
  }
}
</style>
