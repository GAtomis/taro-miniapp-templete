import React, { useEffect, useState, useRef } from "react";
import Taro, {
  useLoad,
  useReachBottom,
  usePullDownRefresh,
  useDidShow,
  useShareAppMessage,
  useShareTimeline,
} from "@tarojs/taro";
import {
  Block,
  Image,
  Navigator,
  Swiper,
  SwiperItem,
  Text,
  View,
} from "@tarojs/components";
import './home.less'
import SwiperBanner from "./components/swiper-banner";

const Index = () => {


  useDidShow(() => {});
  //下拉刷新
  usePullDownRefresh(() => {

    Taro.showNavigationBarLoading();

  });
  //看文档忘记了
  useReachBottom(() => {

  });
    // 来自页面内转发按钮
  useShareAppMessage((res) => {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "生活艺术电商|严选国风国潮颜值好物",
      path: "/pages/index/index",
    };
  });
    // 来自页面内看文档
  useShareTimeline(() => {
    return {
      title: "生活艺术电商|严选国风国潮颜值好物",
      path: "/pages/index/index",
    };
  });

  return (
    <>
      <View className="bar-container container">
        <SwiperBanner></SwiperBanner>
      </View>
    </>
  );
};

export default Index;
