import http from "../utils/request-api";

// 商品列表
export function getProductCategoryList(data: Pagination) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/category/list`,
    data,
  });
}
