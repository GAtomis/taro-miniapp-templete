import React, { useState } from "react";
import { View, Input, Image } from "@tarojs/components";
import { Search } from "@nutui/icons-react-taro";
import NavInput from "../nav-input/NavInput";
import Taro, { usePageScroll } from "@tarojs/taro";
import { navigateToCheck } from "../../utils/app";
import "./index.less";
import { set } from "src/global_data";

export default function HomeHeader(props: Props) {
  console.log(Taro.getMenuButtonBoundingClientRect());
  const mBRect = Taro.getMenuButtonBoundingClientRect();
  const systemInfo = Taro.getSystemInfoSync();
  const [scrollTop, setScrollTop] = useState(0);
  console.log(systemInfo);
  usePageScroll((res) => {
    console.log(res);
    if (res.scrollTop > 5) {
      setScrollTop(res.scrollTop);
    }
    if (res.scrollTop < 5) {
      setScrollTop(0);
    }
    if (res.scrollTop > 50) {
      setScrollTop(50);
    }
  });
  return (
    <>
      <View className="home-header">
        <Image
          src={require("../../static/images/home-banner.png")}
          className="home-header-banner"
        ></Image>
        <View
          className="white-bg"
          style={{
            height: mBRect.top + mBRect.height + 8 + "px",
            opacity: (scrollTop / 50),
          }}
        ></View>
        <Image
          src={require("../../static/images/logo.png")}
          className="home-header-logo"
          style={{
            top: mBRect.top + 8 + "px",
            left: systemInfo.screenWidth - mBRect.right + "px",
          }}
        ></Image>
        <View
          className="home-header-slogan"
          style={{
            marginTop: mBRect.top + mBRect.height + "px",
          }}
        >
          <Image
            className="img"
            src={require("../../static/svg/slogan.svg")}
          ></Image>
          <View
            className="home-header-input"
            onClick={() =>
              navigateToCheck("/pages/search/good-list/good-list", false)
            }
          >
            <NavInput />
          </View>
        </View>
      </View>
    </>
  );
}
