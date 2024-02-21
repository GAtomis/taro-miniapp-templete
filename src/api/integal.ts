//积分规则模块

import http from "../utils/request-api";
import type {SignInConfig,SignInRecord,SignInRecordSummary} from '../../types/integal'

// 商品列表
export function getSignInConfigList() {
    return http.request<Result<Array<SignInConfig>>>({
      method: "GET",
      url: `/member/sign-in/config/list`,
    });
  }
  
export function getSignInRecordSummary() {
    return http.request<Result<SignInRecordSummary>>({
      method: "GET",
      url: `/member/sign-in/record/get-summary`,
    });
  }
  
export function createSignInRecord() {
    return http.request<Result<SignInRecord>>({
      method: "POST",
      url: `/member/sign-in/record/create`,
    });
  }
  
export function getSignRecordPage(data:Pagination) {
    return http.request<Result<PaginaList<SignInRecord[]>>>({
      method: "GET",
      url: `/member/sign-in/record/page`,

    });
  }
  
