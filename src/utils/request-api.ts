import Taro from '@tarojs/taro'

import { successCode, getBaseUrl, rootPath } from './http-config'
import { clearLoginState } from './utils'


const baseConfig ={
    baseURL: getBaseUrl() + rootPath,
    timeout: 10000,
    header:{}
}
const interceptors = {
    request: (config:Taro.request.Option) => {

        const token =  Taro.getStorageSync('token')
        
        config.header['tenant-id']='1'
        config.header['terminal']= '10'
        if (token) {
          config.header['Authorization'] = 'Bearer '+token
        }
      
        return config
    },
    response: (response) => {
        const res = response.data
        //非0和200返回异常
        if (res && !successCode.includes(res.code)) {
            // showFailToast(res?.msg||res?.message);
            if (res.code === 401) {
                clearLoginState()
            }
            new Error(res.message || '返回码异常Error')
            return interceptors.error(res)
        } else {
            return res
        }
    },
    error:(error)=>{
            //timeout
            if(error?.errMsg?.includes('timeout')){
                    Taro.showToast({
                        title:'网络暂无响应',
                        icon:'none',
                    
                    })
            }
            
        return Promise.reject(error)
    }
}

export default {

    request:async function <T = any, U = any>(option: Taro.request.Option<T, U>):Promise<T> {
        const {baseURL,...defaultConfig} = baseConfig
        option.url=baseURL+option.url
        Object.assign(option,defaultConfig)
        interceptors.request(option)
        try {
            const res = await new Promise((resolve, reject) => {
                Taro.request({
                    ...option,
                    success: (data) => {
                        resolve(data)
                    },
                    fail: (error) => {
                        reject(error)
                    }
                })
            })
            return interceptors.response(res)
    
        } catch (error) {
        
            return  interceptors.error(error)
    
        }
    }

}