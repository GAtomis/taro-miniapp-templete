import React, { Component } from "react";
import { Provider } from "react-redux";
import Taro from "@tarojs/taro";

import dva from "./dva";
import models from "./models";
import * as user from "./utils/user";
import * as app from "./utils/app";
// import { set as setGlobalData } from "./global_data";
import "@nutui/nutui-react-taro/dist/style.css";
import "./app.less";
import { isLoginState, wxLogin } from "./utils/utils";
import { dictTypes } from "./utils/dictionary";

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    console.error(e);
    // dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();
window.onunhandledrejection = (event) => {
  console.error(event);
  // 阻止默认处理（例如将错误输出到控制台）
  event.preventDefault();
};

class App extends Component {
  componentWillMount() {
    try {
      this.update();
    } catch {}
  }
  
  update = () => {
    if (process.env.TARO_ENV === "weapp") {
      const updateManager = Taro.getUpdateManager();
      Taro.getUpdateManager().onUpdateReady(function () {
        Taro.showModal({
          title: "更新提示",
          content: "新版本已经准备好，是否重启应用？",
          success: function (res) {
            if (res.confirm) {
              updateManager.applyUpdate();
            }
          },
        });
      });
    }
  };

  componentDidShow() {

    //获取最新字典
    dictTypes.forEach((item) => {
      store.dispatch({
        type: "dictionary/initDictList",
        payload: item,
      });
    });
    // store.dispatch({
    //   type: 'user/getUserInfo',
    // })
    if (isLoginState()) {
      store.dispatch({
        type: "user/getUserInfo",
      });
    } else {
      // Taro.setStorageSync('token')
    }
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
