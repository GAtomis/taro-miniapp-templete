import { getGoodsDetail, getGoodsList } from "../services/goods";
import Taro from "@tarojs/taro";

export default {
  namespace: "goods",
  state: {
    productList: [],
    total: 0,
    goodsDetail: {},
  },
  reducers: {
    saveCount: (state, { payload }) => {
      state.goodsCount = payload;
    },
    saveProductList: (state, { payload }) => {
      if (payload.pageNo === 1) {
        state.productList = payload.data.list;
      } else {
        state.productList = state.productList.concat(payload.data.list);
      }
      state.total = payload.data.total;
    },
  },
  effects: {
    *getProductList({ payload }, { call, put }) {
      Taro.showLoading({
        title: "加载中...",
      });
      const res = yield call(getGoodsList, payload);
      Taro.hideLoading();
      const params = {
        pageNo: payload.pageNo,
        data: res.data,
      };
      yield put({ type: "saveProductList", payload: params });
    },
    *getGoodsDetail({ payload }, { call, put }) {
      const res = yield call(getGoodsDetail, payload);
      console.log("--goods detail", res);
    },
  },
};
