import React, { useState } from "react";
import { Block, Image, Text, View } from "@tarojs/components";
import "./index.less";
import Taro from "@tarojs/taro";
const GoodsCardM = (props) => {
  const goods = props.goods;
  const goPage = (id) => {
    if (props.isSwipe) {
      props.onCloseSwipe();
      return;
    }
    Taro.navigateTo({
      url: `/pages/goods/goods?id=${id}`,
    });
  };
  return (
    <>
      <View className="goods-item-m" onClick={() => goPage(goods.id)}>
        <Image className="img" src={goods.picUrl} mode="aspectFill"></Image>
        <View className="content">
          <Text className="name">{goods.name}</Text>
          <View className="price">
            {goods && (
              <>
                <Text className="sale-price">¥{goods?.price / 100}</Text>
                {goods?.marketPrice > goods.price && (
                  <Text className="market-price">
                    ¥{goods?.marketPrice / 100}
                  </Text>
                )}
              </>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default GoodsCardM;
