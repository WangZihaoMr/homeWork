const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 9999, // 访问端口
    proxy: {
      [process.env.VUE_APP_API]: {
        target: 'http://upload.9yuecloud.com:8887', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_API}`]: ''
        }
      }
      // [process.env.VUE_APP_API1]: {
      //   target: process.env.VUE_API_DEV_TARGET1, // API服务器的地址
      //   changeOrigin: true,
      //   pathRewrite: {
      //     [`^${process.env.VUE_APP_API1}`]: ''
      //   }
      // }
    }
  }
})
