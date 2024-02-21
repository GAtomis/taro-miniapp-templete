/// <reference types="@tarojs/taro" />

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
  }
}
type UserInfo ={
  nickname: string
  avatar: string
  mobile: string
  point: number
  experience: number
  collect: number
  coupon: number
  balance: number
  footprints: any
  level: any
  brokerageEnabled: any
}

type Result<T = any> = {
  data: T; //指定类型
  code: number;
  msg: string;
  rows: Array<T>;
  total: number;
};
type PrimaryKey = {
  id: string | number;
};

type Pagination = {
  pageSize: number;
  pageNo: number;
  orderByColumn?: string;
  isAsc?: "desc" | "asc";
};
type PaginaList<T=any>={

    list:T,
    total:number

}
type dictionaryResponse = Array<{
  dictType:string
  id: number
  img: string
  label: string
  remark:string
  value: string
}>;

type LoginParams = {
  phoneCode: string;
  loginCode: string;
};

type PayCodeListParams = {
  appId: String;
};

type PayOrderSubmitParams = {
  id: number;
  channelCode: string;
  channelExtras?: any;
  displayMode?: string;
  returnUrl?: string;
};

type RateParams = {
  anonymous: boolean;
  orderItemId: number;
  descriptionScores: number;
  benefitScores: number;
  content: string;
  picUrls: any;
};
