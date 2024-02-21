import React, { useState } from "react";
import { Block, Image, Navigator, Text, View } from "@tarojs/components";
import "./index.less";
import Taro from "@tarojs/taro";

type Props = {
  goods: any;
};

const GoodsCardS = (props) => {
  const goods = props.goods;
  const goPage = (id) => {
    Taro.navigateTo({
      url: `/pages/goods/goods?id=${id}`,
    });
  };
  return (
    <>
      <View className="goods-item" onClick={() => goPage(goods.id)}>
        <Image className="img" src={goods.picUrl} mode="aspectFill"></Image>
        <View className="content">
          <View className="info">
            <Text className="shop-name">数艺数尔</Text>
            <Text className="name">{goods.name}</Text>
          </View>
          <View className="price">
            {goods && (
              <>
                <Text className="sale-price">¥{goods?.price / 100}</Text>
                {goods?.marketPrice > goods?.price && (
                  <Text className="market-price">
                    ¥{goods.marketPrice / 100}
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

export default GoodsCardS;
