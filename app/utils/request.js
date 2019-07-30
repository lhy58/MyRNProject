import { ToastAndroid  } from 'react-native'

//请求封装
async function request (url, data = {}, method = "POST", headers=null){
	const defaultHeaders = {
        Accept: '',
        'Content-Type': 'application/json; charset=utf-8'
    };
	//没有url，直接报错
	if ( !url.trim() ) {
		ToastAndroid.show('请求地址不能为空!')
		return;
	}
    
    const newHeaders = {...defaultHeaders, ...headers}
    let newParam = null;
    if (method === 'GET' || method === 'get') newParam = null;
    else newParam = JSON.stringify(data);
	//请求头
	// header.token = Auth.getToken();

	//请求
	let res = await fetch(url, {
        method: method,
        body: newParam,
        headers: newHeaders,
    }).then(res=> res.json())
      .catch(err=> err)

	//返回promise
	return new Promise(resolve=>{
		if( res.statusCode === 200 ){
			if(res.data.error === -1){
                ToastAndroid.show(`出错了, ${res.data.error_reason}`)
			}else{
				resolve(res.data)
			}
		}else{
			ToastAndroid.show('出错了, 服务器繁忙!')
		}
	})
}

export default request;