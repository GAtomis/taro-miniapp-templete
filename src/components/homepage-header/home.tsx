import React from "react";
import { View,Input } from "@tarojs/components";

import { Search } from "@nutui/icons-react-taro";
import NavInput from "../nav-input/NavInput";
import Taro from "@tarojs/taro";
import { navigateToCheck } from "../../utils/app";
import "./home.less";
type Props = {
  handleEdit: () => void;
};
export default function Home(props: Props) {
  console.log(Taro.getMenuButtonBoundingClientRect());

  const { top, height } = Taro.getMenuButtonBoundingClientRect();
  return (
    <>
      <View className="home-header" style={{ height: `${top + height+10}px` }}>
        <image
          src={`https://wiseid.oss-cn-shanghai.aliyuncs.com/Temp/ART/20230908/0bc9be79db2a4bc7a7b65858ee377123.png`}
          className="home-header-logo"
          style={{ position: "absolute", top: `${top}px`, left: "12rpx" }}
        ></image>
      </View>
      <View style={{ height: `${top + height + 10}px` }}></View>

      <View className="home-header-input"   onClick={() => navigateToCheck("/pages/search/good-list/good-list", false)}>
        {/* <Search size={15} style={{ color: "#444444;" }} />
        <Input
          disabled
          style={{ width: "280rpx",marginLeft:'20rpx',fontSize: "22rpx" }}
          placeholder="发现国潮好物"
        /> */}
        <NavInput />
      </View>
      {/* <View style={{ height: `${top + height}px` }}></View> */}
    </>
  );
}
