import {
	config
} from '../common/config'

function setUrlconfig(url){
    if(!url) return
    let initial = url[0];
    if( initial === '/' ) {
        return url.slice(1)
    }else{
        return url
    }
}                       

function baseRequest(options) {
    options.header = {
        ...options.header,
        token:''
    }
    
    // 结构请求需要的参数
    const { url, params, header, token, method } = options;
    return new Promise((resolve, reject) => {
        let baseUrl = config.base_url + setUrlconfig(url);
        uni.showLoading({
			title: '加载中',
			mask: true
		})
        return uni.request({
            url: baseUrl,
            data: params,
            header:header,
            method: method.toUpperCase(),
            sslVerify: false,
            success: (res) => {
                uni.hideLoading()
                console.log('request success')
                resolve(res)
            },
            fail: (error) => {
                uni.hideLoading()
                console.log('request failed')
                reject(error)
            },
            complete: () => {
				console.log('请求完成')
				uni.hideLoading()
			}
        })
    }).catch(e => {
        const errMsg = `failed: ${url} ${method} ${e.status} ${e.message} ${e.statusCode}`
        console.error('error #%d',errMsg)
    })
}


const request = ["post", "put", "get", "delete", "options"].reduce((request, method) => {
    
    request[method] = (
        url, 
        params = {}, 
        options = {
            header:{'content-type': 'application/json'}
        }) => {
        return baseRequest(
            Object.assign({ url, params, method }, options)
        );
    };
    return request;
    }, {});


export default request;

