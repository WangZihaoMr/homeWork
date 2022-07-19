const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9999,
    host: 'localhost',
    https: false,
    open: false,
    proxy: {
      '/dev-api': {
        target: 'http://old.web-jshtml.cn/api/basis',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  }
})
