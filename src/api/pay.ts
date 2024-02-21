import http from '../utils/request-api'

// 获取支付渠道
export function getPayCodeList(data:PayCodeListParams) {
  return http.request<Result<any>>({
      method: 'GET',
      url: '/pay/channel/get-enable-code-list',
      data
  })
}

// 提交支付订单 pay/order/submit
export function submitPayOrder(data:PayOrderSubmitParams) {
  return http.request<Result<any>>({
      method: 'POST',
      url: '/pay/order/submit',
      data
  })
}
