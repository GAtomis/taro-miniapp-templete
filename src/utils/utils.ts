import Taro from "@tarojs/taro";
import dayjs from "dayjs";
import { navigateToCheck } from "./app";

//转换成金钱格式
export function toMoneyStyle(data, step = 0, str?) {
  /*
   * data 需要格式化的数据 类型是Number/String
   * step 保留的小数位数
   * str  展示的是美元格式还是人民币 默认人民币格式  参数为 ￥-->人民币 /   $--> 美元
   */
  if (Object.prototype.toString.call(data) === "[object String]") {
    let currency = "CNY";
    let locales = "zh-CN";

    if (str && str != "") {
      if (str == "$") {
        currency = "USD";
        locales = "en-US";
      }
      // else if(str == '￥'){
      // 	currency = 'CNY';
      // 	locales = 'zh-CN';
      // }
    } else {
      if (data.includes("$")) {
        currency = "USD";
        locales = "en-US";
      }
      // else if(data.includes('￥')){
      // 	currency = 'CNY';
      // 	locales = 'zh-CN';
      // }
    }

    let num = data.replace(/[^\d\\.-]/g, "");
    if (num != "") {
      num = Number(num);
      let options = {
        style: "currency",
        currency: currency,
        maximumFractionDigits: step,
        useGrouping: true,
      };
      let dataStr = num.toLocaleString(locales, options);
      return dataStr;
    }
  } else if (Object.prototype.toString.call(data) === "[object Number]") {
    let options = {
      style: "currency",
      currency: "CNY",
      maximumFractionDigits: step,
      useGrouping: true,
    };
    let num = data.toLocaleString(locales, options);
    return num;
  }
}
/**
 * @description: 是否登陆
 * @return {*}
 */
export const isLoginState = () => {
  const userInfo = Taro.getStorageSync("userInfo");
  const token = Taro.getStorageSync("token");
  return !!(token && userInfo);
};
/**
 * @description: 是否登陆 如果没登陆跳转到登录页
 * @return {*}
 */
export const isLoginAndToLogin = () => {
  if(isLoginState())return  isLoginState()
  navigateToCheck('/pages/auth/login/login')
  return isLoginState()

};
/**
 * @description: 清除登陆信息
 * @return {*}
 */
export const clearLoginState = () => {
  Taro.removeStorageSync("token");
  Taro.removeStorageSync("userInfo");
};
//转换成数字
export function toNumberStyle(data) {
  let num = data.replace(/[^\d\\.-]/g, "");
  return Number(num);
}
export const wxLogin = () => {
  return new Promise<string>((resolve, reject) => {
    Taro.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          Taro.setStorage({
            key: "loginCode",
            data: res.code,
          });
          resolve(res.code);
        } else {
          console.log("登录失败！" + res.errMsg);
          reject();
        }
      },
    });
  });
};

/**
 * @description: 价格除以100
 * @param {string} val
 * @return {*}
 */
export const modifyTheCorrectPrice = (val: string | number) => {
  return +val / 100;
};

export const statusList = [
  { text: "待付款", status: 0 },
  { text: "待发货", status: 10 },
  { text: "待收货", status: 20 },
  { text: "待评价", status: 30 },
  { text: "已关闭", status: 40 },
];

export const renderStatusText = (status) => {
  console.log(
    status,
    status.toString() === status.toString(),
    "item.status === status"
  );
  const res = statusList.find(
    (item) => item.status.toString() === status.toString()
  );
  console.log(res, "-=-=-");
  return res.text;
};

/**
 * @description: 获得过期时间
 * @param {number} startTime
 * @param {number} et 设置过期时间 默认2个小时
 * @return {Array} [endTime,nowTime]
 */
export function getExpirationTime(startTime: number, et: number = 7200) {

  return [startTime + 7200 * 1000, dayjs().valueOf()];
}

/**
 * 数字分割为数组
 *
 * @param num 需要分割的数字
 * @param length 需要分割为n位数组
 */
export function prefixInteger(num, length) {
  return (Array(length).join("0") + num).slice(-length).split("");
}
/**
 * @description: 转化时间显示YYYY-MM-DD
 * @param {*} date
 * @return {*}
 */
export function formatDate(date) {
  return dayjs(date).format("YYYY-MM-DD");
}

// 0-暂无轨迹信息
// 1-已揽收
// 2-在途中
// 3-签收
// 4-问题件
// 5-转寄
// 6-清关
export const logisticsList = [
  {
    status: 0,
    text: "暂无轨迹信息",
  },
  {
    status: 1,
    text: "已揽收",
  },
  {
    status: 2,
    text: "在途中",
  },
  {
    status: 3,
    text: "已签收",
  },
  {
    status: 4,
    text: "问题件",
  },
  {
    status: 5,
    text: "转寄",
  },
  {
    status: 6,
    text: "清关",
  }
];
export function renderLogisticsStatusText(stauts: number) {
  // item.stuats等于status的第一位
  console.log(stauts.toString().split('')[0], 'stauts.toString().split(\'\')[0]')
  const res = logisticsList.find((item) => item.status === Number(stauts.toString().split('')[0]));
  if(res) {
    return res.text;
  } else {
    return stauts;
  }
}
