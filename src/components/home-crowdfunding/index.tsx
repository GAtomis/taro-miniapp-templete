import React, { useState } from "react";
import {
  Block,
  Image,
  Navigator,
  ScrollView,
  Text,
  View,
} from "@tarojs/components";
import { Swiper, Indicator } from "@nutui/nutui-react-taro";
import "./index.less";
import Taro, { useLoad } from "@tarojs/taro";
import { getGoodsList } from "../../api/search";
import { Skeleton } from "@nutui/nutui-react-taro";
import { modifyTheCorrectPrice } from "../../utils/utils";
const systemInfo = Taro.getSystemInfoSync();
const { screenWidth } = systemInfo;
const HomeCrowfunding = () => {
  const [list, setList] = useState([]);
  useLoad(() => {
    getGoodsListFn();
  });
  const getGoodsListFn = async () => {
    const params = {
      pageSize: 10,
      pageNo: 2,
    };
    const res = await getGoodsList(params);
    const list = res.data.list;
    setList(list);
  };

  const height = ((344 / 375) * screenWidth) / 2;

  const [current, setCurrent] = useState(0);
  const onChange = (e) => {
    setCurrent(e.detail.current);
  };

  const goDetailPage = (item: any) => {
    console.log(item);
    // pages/crowdfunding-detail/index
    Taro.navigateTo({
      url: `/pages/crowdfunding/crowdfunding-detail/index?id=${item.id}`,
    })
  };

  return (
    <>
      <View className="home-crowfunding">
        <Image
          className="sksg"
          src={require("../../static/svg/home-sksg.svg")}
          mode="widthFix"
        ></Image>
        <Image
          className="go"
          src={require("../../static/images/home-go.png")}
          mode="widthFix"
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/crowdfunding/crowdfunding-list/crowdfunding-list",
            });
          }}
        ></Image>
        <ScrollView className="crowfunding-container" scrollX>
          <View className="list">
            {list.map((item) => (
              <View
                className="card"
                key={item.id}
                onClick={() => goDetailPage(item)}
              >
                <Image className="cover" src={item.picUrl} mode="aspectFill" />
                <Text className="name">{item.name}</Text>
                <Text className="price">
                  ¥{modifyTheCorrectPrice(item.price)}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeCrowfunding;
