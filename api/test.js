// 引入工具类
import request from '@/utils/request.js' 

export function getList(data){
	return request({
	    url: 'api/v1/topics',
		method: 'get',
		contentType:'application/x-www-form-urlencoded',
		data: data
	 })
}