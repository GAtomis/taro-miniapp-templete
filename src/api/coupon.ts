//优惠券

import http from "../utils/request-api";
import type { CouponAttr,CouponTemp } from "../../types/coupon";

interface ReqCouponList extends Pagination {}
// 商品列表
export function getCouponListByStatus(data: ReqCouponList) {
  return http.request<Result<PaginaList<CouponAttr[]>>>({
    method: "GET",
    url: `/promotion/coupon/page`,
    data,
  });
}

// 首页优惠券 promotion/coupon-template/list?spuId=640&count=10
export function getCouponListIndex(data: { count: number; spuId?: number }) {
  return http.request<Result<PaginaList>>({
    method: "GET",
    url: `/promotion/coupon-template/list`,
    data,
  });
}
// 首页优惠券 promotion/coupon-template/list?spuId=640&count=10
export function getCouponListByScope(data: Pagination&{ productScope: string }) {
  return http.request<Result<PaginaList<CouponTemp[]>>>({
    method: "GET",
    url: `/promotion/coupon-template/page`,
    data,
  });
}

// 领取优惠券
export function takeCoupon(data: { templateId: number }) {
  return http.request<Result<PaginaList>>({
    method: "POST",
    url: `/promotion/coupon/take`,
    data,
  });
}

// promotion/coupon/match-list?price=29100&spuIds=641&skuIds=30&categoryIds=55
export function couponMatchList(data: {
  price: number;
  skuIds: string;
  categoryIds: string;
}) {
  return http.request<Result<PaginaList>>({
    method: "GET",
    url: `/promotion/coupon/match-list`,
    data,
  });
}

export function getCouponDetailById(couponId:string){
  return http.request<Result<CouponAttr>>({
    method: "GET",
    url: `/promotion/coupon/get`,
    data:{
      couponId
    },
  });
  

}