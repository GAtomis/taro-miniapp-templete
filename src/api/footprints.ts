//足迹

import http from "../utils/request-api";



// 商品列表
export function getFootprintsList(data: Pagination) {
  return http.request<Result<PaginaList<any[]>>>({
    method: "GET",
    url: `/product/footprints/page`,
    data,
  });
}
