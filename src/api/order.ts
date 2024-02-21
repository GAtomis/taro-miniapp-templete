import http from '../utils/request-api'
import type {OrderTradeCount} from '../../types/order'
// 获取订单列表
export function getOrderListByState(data:Pagination&{
    status?:string
    commentStatus?:boolean
}) {
  return http.request<Result<any>>({
      method: 'GET',
      url: '/trade/order/page',
      data
  })
}


// 取消订单
export function cancelOderById(data:{
  id:string
  reasonId:string
}) {
  return http.request<Result<any>>({
      method: 'DELETE',
      url: `/trade/order/cancel?id=${data.id}&reasonId=${data.reasonId}`,
  })
}

// 更改订单为收货状态
export function receiveGood(id:string) {
  return http.request<Result<any>>({
      method: 'PUT',
      url: `/trade/order/receive?id=${id}`,
  })
}

// 订单详情
export function getOrderDetailById(id: number) {
  return http.request<Result<any>>({
      method: 'GET',
      url: `/trade/order/get-detail?id=${id}`,
  })
}
// 申请退款
export function afterSaleOrder(data:{
  orderItemId:number|string
  way:number
  refundPrice:number
  applyReason:string
  applyDescription:string
  applyPicUrls:string
}) {
  return http.request<Result<any>>({
      method: 'POST',
      url: `/trade/after-sale/create`,
      data
  })
}
// 获得售后列表
export function getAfterSaleOrderList(data:Pagination) {
  return http.request<Result<any>>({
      method: 'GET',
      url: `/trade/after-sale/page`,
      data
  })
}
// 获得所有订单数量
export function getOrderCount() {
  return http.request<Result<OrderTradeCount>>({
      method: 'GET',
      url: `/trade/order/get-count`,
  })
}

// 获得所有订单数量
export function getApplyingAfterSaleCount() {
  return http.request<Result<number>>({
      method: 'GET',
      url: `/trade/after-sale/get-applying-count`,
  })
}




