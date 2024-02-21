import http from "../utils/request-api";

// 商品列表
export function getGoodsList(data: Pagination&{
  spuId?:number
  brandId?:number
  categoryId?:number
  keyword?:string,
  sortField:string

}) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/search/spu/page`,
    data,
  });
}
// 商品列表
export function getFilterAttr(data: {
  keyword?:string
}) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/search/spu/relate`,
    data,
  });
}
export function getGoodsDetail(id: number) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/search/spu/get-detail?id=${id}`,
  });
}
export function getSuggest(keyword: string) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/search/spu/suggest?keyword=${keyword}`,
  });
}