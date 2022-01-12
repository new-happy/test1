// import {Login} from "@/utils/login.js";
import configData from "@/utils/config.js";
// let login = new Login();

function req(obj) {
	return new Promise((resolve, reject) => {
		const HOST = 'https://' + configData.websiteUrl + '/'
		var method = obj.method || "GET";
		var url = HOST + obj.url || "";
		var data = obj.data || {};
		// data.appid = configData.appid;

		var header = obj.header || {
			'Content-Type': obj.contentType || 'application/json'
		};
		let nowTime = Date.parse(new Date()) / 1000;
		if (uni.getStorageSync('user_info') && (uni.getStorageSync('user_info')['login_time'] + 10800) >
			nowTime) {
			header.Authorization = uni.getStorageSync('user_info')['token']

			if ((nowTime - uni.getStorageSync('user_info')['login_time']) > 5400 && obj.url != 'api/login') {
				console.log('token没有啦')
				// login.login();
			}
		} else {
			uni.setStorageSync('user_info', null);
		}
		var success = obj.success; // 成功回调函数
		var fail = obj.fail; //表示失败后，要执行的回调函数
		uni.request({
			url: url,
			data: data,
			method: method,
			header: header,
			success: ((res) => {
				if (res.data.code === 4001 || res.data.code === 4002 || res.data.code ===
					4003 || res.data.code === 4004) {
					// 错误处理，返回登录页
					let pages = getCurrentPages();
					let route = pages[pages.length - 1].route;
					// if(route !== 'pages/login/login'){
					//  uni.navigateTo({
					//   url:'/pages/login/login'
					//  })
					// }
					resolve(res.data)
				} else {
					resolve(res)
				}
			}),
			fail: ((err) => {
				reject(err)
			})
		})
	})
}
export default req
