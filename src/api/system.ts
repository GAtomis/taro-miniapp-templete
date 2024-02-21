//system/area/tree
import http from "../utils/request-api";

// 获取地区树
export function getAreaTree() {
  return http.request<Result<any>>({
    method: "GET",
    url: "/system/area/tree",
  });
}
// 获取地区树
export function getDictType(dictType: string) {
  return http.request<Result<any>>({
    method: "GET",
    url: `/system/dict-data/type?type=${dictType}`,
  });
}

// 首页banner "promotion/banner/list"
export function getBanner() {
  return http.request<Result<any>>({
    method: "GET",
    url: "/promotion/banner/list?position=1",
  });
}
