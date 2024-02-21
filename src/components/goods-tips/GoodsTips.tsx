import React, { useState } from "react";
import { Swiper } from "@nutui/nutui-react-taro";
import { Block, Image, Navigator, Text, View } from "@tarojs/components";
import "./index.less";
import Taro from "@tarojs/taro";
const Goodstips = () => {
  const list = [
    {
      id: 1,
      title: "划线价格",
      content:
        "商品的专柜价、吊牌价、正品零售、厂商指导价或该商品的曾经展厅过的销售价等，并非原价，仅供参考。",
    },
    {
      id: 2,
      title: "未划线价格",
      content:
        "商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，最终以订单结算页价格为准。",
    },
    {
      id: 3,
      title: "",
      content:
        "商家详情页（含主图）以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。",
    },
    {
      id: 4,
      title: "",
      content:
        "此说明仅当出现价格比较时有效，若商品单独对划线价格进行说明的，以商家的表述为准。",
    },
  ];
  return (
    <>
      <View className="goodstips">
        <Text className="goodstips__header-title">价格说明</Text>
        <View className="goodstips__list">
          {list.map((item, index) => {
            return (
              <View className="goodstips__list-item" key={item.id}>
                <View className="goodstips__list-item-key">
                  ·
                </View>
                <View className="goodstips__list-item-value">
                  <Text className="goodstips__list-item-title">
                    {item.title}
                  </Text>
                  <View className="goodstips__list-item-content">
                    {item.content}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
};
export default Goodstips;
