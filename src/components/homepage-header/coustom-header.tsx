import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useState } from "react";
import "./coustom-header.less";
import { Tabs } from "@nutui/nutui-react-taro";

type Props = {
  children?: any; //插槽
  back?: () => void;
};

export default function Public(props: Props) {
  const mBRect = Taro.getMenuButtonBoundingClientRect();
  console.log(mBRect);
  const { back } = props;
  const { height, top, left } = mBRect;
  const [tab1value, setTab1value] = useState("0");

  return (
    <View className="wrap" style={{height:height+top}}>
      <View className="public" style={{ height, top, width: left }}>
        <View className="icon">
          <Image
            onClick={() => {
              back ? back() : Taro.navigateBack();
            }}
            src={require("../../static/svg/back-bar.svg")}
            className="back-icon back"
          ></Image>
        </View>

        {props.children}
      </View>
    </View>
  );
}
