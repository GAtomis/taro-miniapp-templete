import React, { useState, useEffect } from "react";
import { Image, Navigator, Text, View } from "@tarojs/components";
import "./index.less";
import Taro, { useDidShow, useLoad } from "@tarojs/taro";
import { Rate, Progress } from "@nutui/nutui-react-taro";
const GoodsScores = (props) => {
  console.log(props, "GoodsScoresGoodsScoresGoodsScores");
  const scoreInfo = props.scoreInfo;
  const customStar = () => {
    return (
      <Image
        className="plus"
        src={require("../../static/svg/icon-plus.svg")}
      ></Image>
    );
  };

  return (
    <>
      {scoreInfo.totalCount && (
        <View className="goods-scores">
          <View className="goods-scores-left">
            <View className="title">综合评分</View>
            <View className="score-text">{scoreInfo.scores}</View>
            <View>
              <Rate allowHalf value={scoreInfo.scores} readOnly />
            </View>
          </View>
          <View className="goods-scores-right">
            <View className="goods-scores-right-item">
              <View className="rate-item">
                <Rate value={0} count={5} />
              </View>
              <Progress
                percent={
                  (scoreInfo.levelCount.star5 * 100) / scoreInfo.totalCount
                }
              />
            </View>
            <View className="goods-scores-right-item">
              <View className="rate-item">
                <Rate
                  value={0}
                  count={4}
                  checkedIcon={
                    <Image
                      className="rate_icon"
                      src={require("../../static/svg/rate_checked.svg")}
                    ></Image>
                  }
                  uncheckedIcon={
                    <Image
                      className="rate_icon"
                      src={require("../../static/svg/rate_unchecked.svg")}
                    ></Image>
                  }
                />
              </View>
              <Progress
                percent={
                  (scoreInfo.levelCount.star4 * 100) / scoreInfo.totalCount
                }
              />
            </View>
            <View className="goods-scores-right-item">
              <View className="rate-item">
                <Rate
                  value={0}
                  count={3}
                  checkedIcon={
                    <Image
                      className="rate_icon"
                      src={require("../../static/svg/rate_checked.svg")}
                    ></Image>
                  }
                  uncheckedIcon={
                    <Image
                      className="rate_icon"
                      src={require("../../static/svg/rate_unchecked.svg")}
                    ></Image>
                  }
                />
              </View>
              <Progress
                percent={
                  (scoreInfo.levelCount.star3 * 100) / scoreInfo.totalCount
                }
              />
            </View>
            <View className="goods-scores-right-item">
              <View className="rate-item">
                <Rate
                  value={0}
                  count={2}
                  checkedIcon={
                    <Image
                      className="rate_icon"
                      src={require("../../static/svg/rate_checked.svg")}
                    ></Image>
                  }
                  uncheckedIcon={
                    <Image
                      className="rate_icon"
                      src={require("../../static/svg/rate_unchecked.svg")}
                    ></Image>
                  }
                />
              </View>
              <Progress
                percent={
                  (scoreInfo.levelCount.star2 * 100) / scoreInfo.totalCount
                }
              />
            </View>
            <View className="goods-scores-right-item">
              <View className="rate-item">
                <Rate
                  value={0}
                  count={1}
                  checkedIcon={
                    <Image
                      className="rate_icon"
                      src={require("../../static/svg/rate_checked.svg")}
                    ></Image>
                  }
                  uncheckedIcon={
                    <Image
                      className="rate_icon"
                      src={require("../../static/svg/rate_unchecked.svg")}
                    ></Image>
                  }
                />
              </View>
              <Progress
                percent={
                  (scoreInfo.levelCount.star1 * 100) / scoreInfo.totalCount
                }
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};
export default GoodsScores;
