import React, { useState } from "react";
import { Block, Image, Navigator, Text, View } from "@tarojs/components";
import "./index.less";

const EmptyPage = (props:any) => {
  return (
    <>
      <View className="empty-page">
        <Image
          className="empty-img"
          src={props.src||require("../../static/images/empty-box.png")}
        ></Image>
        <View className="empty-text">{props.title||'暂无数据'}</View>
      </View>
    </>
  );
};

export default EmptyPage;
