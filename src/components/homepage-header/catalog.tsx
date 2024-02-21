import React from "react";
import { View } from "@tarojs/components";
import { Input } from "@nutui/nutui-react-taro";
import { Search } from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";

import NavInput from "../nav-input/NavInput";
import "./catalog.less";

type Props = {};
export default function catalog(props: Props) {
  console.log(Taro.getMenuButtonBoundingClientRect());
  const { top, height } = Taro.getMenuButtonBoundingClientRect();
  return (
    <View
      className="catalog-header"
      style={{ height: `${top + height + 2}px` }}
    >
      <View
        style={{
          height: `${top}px`,
        }}
      ></View>
      <View
        className="catalog-header-input"
        style={{
          position: "relative",
          height: `${height}px`,
        }}
      >
        <View
          style={{
            height: `${height}px`,
          }}
        >
          <NavInput />
        </View>
      </View>
    </View>
  );
}
