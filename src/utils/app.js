
import Taro from '@tarojs/taro';
import store from '../dva';
import {set as setGlobalData, get as getGlobalData} from '../global_data';
import {isLoginState} from './utils'
/**
 *
 * @param {*} state
 * @param {*} initState
 */
export const resetStore = (state, initState) => {
  Object.keys(initState).forEach(key => {
    state[key] = initState[key];
  })
}

/**
 * @description: 设置是否登陆后跳转
 * @param {*} url 跳转的url
 * @param {*} auth 默认为true true开启校验  false 不校验直接跳转
 * @return {*}
 */
export const navigateToCheck = (url,auth=true) => {
  if (isLoginState()||!auth) {
    Taro.navigateTo({
      url,
      success: function() {},
      fail: function() {},
      complete: function() {},
    })
  } else {
    Taro.navigateTo({
      url: "/pages/auth/login/login"
    });
  }
}

/**
 * @description: 设置历史记录
 * @return {*}
 */
export const setHistoryRecord=(keyword)=>{
  const list= Taro.getStorageSync('search-history')?JSON.parse(Taro.getStorageSync('search-history')):[]
  
  if(list.length>15){
    list.shift()
  }
  list.push(keyword)
  Taro.setStorageSync('search-history',JSON.stringify(list)) 
}
/**
 * @description: 获得历史记录
 * @return {*}
 */
export const getHistoryRecord=()=>{
  const str= Taro.getStorageSync('search-history')

  return str?JSON.parse(str):[]
}



