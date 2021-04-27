import Axios, { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 20000
})

// intercepted before the request is made
axios.interceptors.request.use(
  (config) => {
    /**
     * I'm not going to do anything with config here.
     * But you can process config as you want.
     */
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Start intercepting after getting the response
axios.interceptors.response.use(
  (response) => {
    /**
     * I'm not going to do anything with response here.
     * But you can process response as you want.
     */
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
