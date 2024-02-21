import Taro from "@tarojs/taro";
import { loginByWeXin, logOut } from "../services/auth";
import { set as setGlobalData } from "../global_data";
import { wxLogin } from "./utils"
/**
 * Promise封装wx.checkSession
 */
function checkSession() {
  return new Promise(function (resolve, reject) {
    return Taro.checkSession()
      .then(() => resolve(true))
      .catch(() => reject(false));
  });
}

/**
 * Promise封装wx.login
 */
function login() {
  return new Promise(function (resolve, reject) {
    Taro.login({
      success: function (res) {
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
}

/**
 * 判断用户是否登录
 */
export function checkLogin() {
  return new Promise(function (resolve, reject) {
    const hasLogin =
      Taro.getStorageSync("userInfo") && Taro.getStorageSync("token");
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      return hasLogin ? resolve(true) : reject(false);
    }
    checkSession()
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  });
}

export function userLogout(to) {
  return logOut().then(() => {
    setGlobalData("hasLogin", false);
    Taro.removeStorageSync("token");
    Taro.removeStorageSync("openId");
    Taro.removeStorageSync("loginCode");
    Taro.removeStorageSync("userInfo");
    Taro.removeStorageSync("tab");
    Taro.removeStorageSync("SELECTED_CART_GOODS");
    wxLogin();
    Taro.reLaunch({
      url: to,
    });
  });
}
