import http from "../utils/request-api";

export function deleteAddress(id: number) {
  return http.request<Result<any>>({
    method: "DELETE",
    url: `/member/address/delete?id=${id}`,
  });
}
// member/address/get
export function getAddressDetail(id: number) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/member/address/get?id=${id}`,
  });
}

export function updateAddress(data: {
  id?: number;
  name: string;
  mobile: string;
  provinceId: number;
  cityId: number;
  areaId: number;
  address: string;
  isDefault: boolean;
}) {
  return http.request<Result<any>>({
    method: "PUT",
    url: "/member/address/update",
    data,
  });
}

/**
 * @description: 修改订单收货地址
 * @param {any} data
 * @return {*}
 */
export function updateAddressByOrderId(data:{
  id: number
  receiverName: string
  receiverMobile: string
  receiverAreaId: number
  receiverDetailAddress: string
}){
  return http.request<Result<string>>({
    method:"PUT",
    url:"/trade/order/update-address",
    data
  })

}
