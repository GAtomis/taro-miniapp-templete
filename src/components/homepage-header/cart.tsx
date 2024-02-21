import React from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./cart.less";
type Props = {
  handleEdit: () => void;
};
export default function cart(props: Props) {
  console.log(Taro.getMenuButtonBoundingClientRect());

  const { top, height } = Taro.getMenuButtonBoundingClientRect();
  return (
    <>
      <View
        className="cart-header"
        style={{ height: `${top + height + 10}px` }}
      >
        <View
          onClick={props.handleEdit}
          style={{ position: "absolute", top: `${top + 5}px`, left: "14px" }}
        >
          管理
        </View>

        <View className="title" style={{
          marginTop: `${top + 5}px`,
        }}>购物车</View>
      </View>
      <View style={{ height: `${top + height + 10}px` }}></View>
    </>
  );
}
