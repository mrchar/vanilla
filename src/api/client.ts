import axios from "axios"

const baseURL = "http://localhost:8080"

const instance = axios.create({
  baseURL,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.error("请求服务器时发生错误", err)
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (res) => {
    const contentType = res.headers["content-type"] as string
    if (contentType.startsWith("application/json")) {
      return res.data
    }
    return res
  },
  (err) => {
    console.error("服务器返回错误", err)
    return Promise.reject(err)
  },
)

export default instance
