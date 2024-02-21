import http from '../utils/request-api'



// 删除购物车
export function delItemFromCart(data:{
    ids:string[]
}) {
  return http.request<Result<any>>({
      method: 'DELETE',
      url: `/trade/cart/delete?ids=${data.ids}`,
  })
}



