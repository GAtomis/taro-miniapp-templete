import http from '../utils/request-api'

// 获取订单列表
export function getReasonList(key) {
  return http.request<Result<any>>({
      method: 'GET',
      url: '/trade/after-sale/get-reason-list?way='+key,
      
  })
}



