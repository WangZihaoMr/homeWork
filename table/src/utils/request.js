import axios from 'axios'

const service = axios.create({
  baseURL: '/dev-api',
  timeout: 10000
})

service.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 统一请求传参问题
function request(options) {
  options.method = options.method || 'GET'
  options.params =
    options.method.toLocaleUpperCase() === 'GET' ? options.data : {}
  return service(options)
}

export default request
