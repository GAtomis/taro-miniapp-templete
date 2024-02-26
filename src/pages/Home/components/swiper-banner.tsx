import React, { useState } from "react";
import { Swiper, SwiperItem,View} from "@tarojs/components";
import "./swiper-banner.less";
const list = [
  "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
  "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
  "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
  "https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
];

const SwiperBanner = () => {
  return (
    <Swiper
      className="test-h"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      vertical
      circular
      indicatorDots
      autoplay
    >
      <SwiperItem>
        <View className="demo-text-1">1</View>
      </SwiperItem>
      <SwiperItem>
        <View className="demo-text-2">2</View>
      </SwiperItem>
      <SwiperItem>
        <View className="demo-text-3">3</View>
      </SwiperItem>
    </Swiper>
  );
};
export default SwiperBanner;
