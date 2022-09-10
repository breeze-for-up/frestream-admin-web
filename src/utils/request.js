import axios from 'axios'
import { Notification, MessageBox, Message, Loading } from 'element-ui'

let loadingInstance = null;
const request = axios.create({
	baseURL: "http://localhost:3000/", // url = base url + request url
	timeout: 1000, // request timeout
  })

  // 请求拦截器
  request.interceptors.request.use(
	config => {
		loadingInstance = Loading.service({
			lock: true,
			text: 'loading...'
		})
		return config
 	},
	error => {
		console.log('request异常: ', error); 
		return Promise.reject(error)
	}
  )

  // 响应拦截器
  request.interceptors.response.use(
	response => {
		loadingInstance.close()
		return response.data
  	}, 
  	error => {
		console.log('response异常: ', error)
		const msg = error.Message !== undefined ? error.Message : ''
		Message({
			message: '网络错误' + msg,
			type: 'error',
			duration: 3 * 1000
		})
		loadingInstance.close()
		return Promise.reject(error)
  	}
  )

  export default request;