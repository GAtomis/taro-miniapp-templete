export default {
  pages: [
    "pages/Home/home",
    "pages/Own/own"
   
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    backgroundColor: "#ffffff",
    borderStyle: "white",
    selectedColor: "#000000",
    color: "#000000",
    list: [
      {
        pagePath: "pages/Home/home",
        iconPath: "./static/tabar-icon/home.png",
        selectedIconPath: "./static/tabar-icon/home@selected.png",
        text: "首页",
      },
      {
        pagePath: "pages/Own/own",
        iconPath: "./static/tabar-icon/my.png",
        selectedIconPath: "./static/tabar-icon/my@selected.png",
        text: "我的",
      },
    ],
  },
  subpackages: [
    // {
    //   root: "pages/after-sales",
    //   pages: [
    //     "apply-for-AS/apply-for-AS",
    //     "request-refund/request-refund",
    //     "goods-refund-detail/goods-refund-detail",
    //     "request-product-refund/request-product-refund",
    //   ],
    // },
    // {
    //   root: "pages/crowdfunding",
    //   pages: [
    //     "crowdfunding-list/crowdfunding-list",
    //     "crowdfunding-detail/index",
    //   ],
    // },
    // {
    //   root: "pages/ucenter",
    //   pages: [
    //     "order/order",
    //     "orderDetail/orderDetail",
    //     "addressAdd/addressAdd",
    //     "address/address",
    //     "setting/index",
    //     "collectList/collectList",
    //     "orderRate/orderRate",
    //     "userIntegral/userIntegral",
    //     "integral-check-in/index",
    //     "coupon-list/index",
    //     "coupon-center/index",
    //     "goods-logistics/index",
    //     "footprints-list/index",
    //     "identity-auth/identity-auth",
    //   ],
    // },
    // {
    //   root: "pages/auth",
    //   pages: [
    //     "privacy-auth/privacy-auth",
    //     "readme/privacy-policy/index",
    //     "readme/user-policy/index",
    //     "login/login",
    //   ],
    // },
    // {
    //   root: "pages/search",
    //   pages: ["good-list/good-list"],
    // },
  ],
  networkTimeout: {
    request: 10000,
    downloadFile: 10000,
  },
  debug: true,
  requiredPrivateInfos: ["chooseAddress"],
  ["__usePrivacyCheck__"]: true,
};
