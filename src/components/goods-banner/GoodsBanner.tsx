import React, { useState, useRef, useEffect } from "react";
import { Swiper } from "@nutui/nutui-react-taro";
import { Block, Image, Navigator, Text, View, Video } from "@tarojs/components";
import "./index.less";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import Goods from "src/pages/goods/goods";
// import { Video } from "@nutui/nutui-react-taro";

// 根据机型分辨率计算
const systemInfo = Taro.getSystemInfoSync();
const { screenWidth } = systemInfo;
const GoodsBanner = (props) => {
  const height = (352 / 375) * screenWidth;
  const [current, setCurrent] = useState(0);
  const onChange = (e) => {
    setCurrent(e.detail.current);
  };
  const [bannerList, setBannerList] = useState([]);
  useEffect(() => {
    const list = [];
    props.sliderPicUrls.forEach((element) => {
      list.push({
        type: "image",
        src: element,
      });
    });

    if (props.videoUrl && props.videoUrl !== "") {
      list.unshift({
        type: "video/mp4",
        src: props.videoUrl,
      });
    }
    setBannerList(list);
  }, [props]);
  const options = {
    autoplay: false,
    muted: true,
    controls: true,
  };

  const [playStatus, setPlayStatus] = useState("play");

  const play = (elm: any) => {
    setPlayStatus("play");
  };
  const pause = (elm: any) => {
    setPlayStatus("pause");
  };
  const playend = (elm: any) => {
    setPlayStatus("playend");
  };
  const playVideo = () => {
    setPlayStatus("play");
  };
  return (
    <>
      <View className="goods-banner">
        {bannerList && (
          <>
            <View className="page-count">
              {current + 1}/{bannerList.length}
            </View>
            {/* {playStatus !== "play" && (
              <Image
                className="video-play-icon"
                src={require("../../static/svg/video_play.svg")}
                onClick={() => playVideo()}
              ></Image>
            )} */}

            <Swiper
              height={height}
              defaultValue={0}
              onChange={onChange}
              indicator={false}
              loop
            >
              {bannerList.map((item, index) => {
                return (
                  <Swiper.Item>
                    <>
                      {item.type === "image" && (
                        <view className="banner">
                          <Image className="img" src={item.src} mode="widthFix" />
                        </view>
                      )}
                      {item.type === "video/mp4" && item.src && item.src.length > 0 && (
                        <View className="video">
                          <Video
                            src={item.src}
                            autoplay={false}
                            show-mute-btn={true}
                            show-bottom-progress={false}
                            show-center-play-btn={true}
                            show-play-btn={true}
                            show-fullscreen-btn={false}
                            onPlay={play}
                            onPause={pause}
                            onPlayEnd={playend}
                            style={{
                              height: height - 15 + "px",
                              width: "100%",
                            }}
                          />
                        </View>
                      )}
                    </>
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </>
        )}
      </View>
    </>
  );
};
export default GoodsBanner;
