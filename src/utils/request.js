/* 
 请求模块
 */
import axios from 'axios'
import store from '@/store'

 const request = axios.create({
	baseURL:`http://ttapi.research.itcast.cn/`
})
// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
		// 请求发起会经过这里
		// config：本次请求的请求配置对象
    const {user} = store.state
		if(user && user.token){
			config.headers.Authorization=`Bearer ${user.token}`
		}
		return config
  }, function (error) {
    // Do something with request error
		// 如果请求出错了(还没有发出去) 会进入这里
    return Promise.reject(error);
  });

// 响应拦截器

export default request