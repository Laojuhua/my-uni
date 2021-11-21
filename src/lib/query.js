const appendParams2Url = (url,params) => {
    if(!url || Object.prototype.toString.call(params) !== '[object Object]'){
        return
    }
    let resUrl = url;
    let queryStringParams = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');

    if(queryStringParams) {
        let urlLastKey = url[url.length-1]
        if(urlLastKey === '?' || urlLastKey === '&'){
            resUrl = url + queryStringParams
        }else{
            const symb = url.indexOf('?') === -1 ? '?' : '&' ;
            resUrl = url + symb + queryStringParams
        }
    }
    return resUrl
}

export default {
    appendParams2Url
}
