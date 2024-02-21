import http from "../utils/request-api";
// trade/after-sale/get

export function getRefundDetail(id: number) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/trade/after-sale/get?id=${id}`,
  });
}

// trade/order/delete
export function deleteOrder(id: number) {
  return http.request<Result<any>>({
    method: "DELETE",
    url: `/trade/order/delete?id=${id}`,
  });
}

// trade/order/item/create-comment
export function createCommentSku(data: RateParams) {
  return http.request<Result<any>>({
    method: "POST",
    url: `/trade/order/item/create-comment`,
    data,
  });
}

// trade/order/settlement
export function settlementOrder(data) {
  return http.request<Result<any>>({
    method: "POST",
    url: `/trade/order/settlement`,
    data,
  });
}

// 物流信息
export function getLogisticsInfo(id) {
  return http.request<Result<any>>({
    method: "GET",
    url: "/trade/order/get-express-track-list?id=" + id,
  });
}

// trade/order/get-detail?id=320
export function getTradeOrderDetail(id) {
  return http.request<Result<any>>({
    method: "GET",
    url: "/trade/order/get-detail?id=" + id,
  });
}
// trade/order/get-detail?id=320
export function getLogisticsList() {
  return http.request<
    Result<
      {
        id: number;
        name: string;
      }[]
    >
  >({
    method: "GET",
    url: "/trade/delivery/express/list",
  });
}

// 退回货物 trade/after-sale/delivery

export function deliveryGood(data: {
  id: number;
  logisticsId: number;
  logisticsNo: string;
}) {
  return http.request<Result<any>>({
    method: "PUT",
    url: `/trade/after-sale/delivery`,
    data,
  });
}
