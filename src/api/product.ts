import http from "../utils/request-api";

// 收藏商品
export function favoriteProduct(data: { spuId: string[] }) {
  return http.request<Result<any>>({
    method: "POST",
    url: `/product/favorite/create`,
    data,
  });
}

// product/favorite/exits
// 查询商品是否收藏
export function favoriteProductExits(data: { spuId: string[] }) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/favorite/exits`,
    data,
  });
}

// product/favorite/delete
// 取消收藏商品
export function favoriteProductDelete(data: { spuId: string[] }) {
  return http.request<Result<any>>({
    method: "DELETE",
    url: `/product/favorite/delete`,
    data,
  });
}

// product/favorite/page
export function favoriteProductList(data: Pagination) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/favorite/page`,
    data,
  });
}

// product/favorite/get-count
export function favoriteProductCount() {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/favorite/get-count`,
  });
}

// /product/comment/list
export function productCommentList(data) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/comment/list`,
    data
  });
}

// product/comment/statistics
export function productCommentStatistics(data) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/comment/statistics`,
    data
  });
}

// product/comment/page
export function productCommentPage(data) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/comment/page`,
    data
  });
}

// 获取商品列表product/spu/page
export function getProductPage(data) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/spu/page`,
    data
  });
}

// product/spu/list
export function getProductSpuPage(data) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/product/spu/list`,
    data
  });
}