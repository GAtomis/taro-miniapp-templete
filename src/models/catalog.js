import Taro from "@tarojs/taro";
import { getCategoryList } from "../services/catalog";
import { getGoodsList } from "../services/goods";
export default {
  namespace: "catalog",
  state: {
    categoryList: [],
    currentCategory: {},
    currentSubCategory: [],
  },
  reducers: {
    saveCatalog: (state, { payload }) => {
      state.categoryList = payload.categoryList;
      state.currentCategory = payload.currentCategory;
      state.currentSubCategory = payload.currentSubCategory;
    },
    saveCurrentCategory: (state, { payload }) => {
      state.currentCategory = payload.currentCategory;
      state.currentSubCategory = payload.currentSubCategory;
    },
  },
  effects: {
    *getCategoryList({ payload }, { call, put }) {
      const res = yield call(getCategoryList, { parentId: 0 });
      const list = res.data;
      console.log(payload, "getCategoryList");
      if (payload && payload.type === "recommend") {
        list.unshift({
          id: 0,
          name: "热门推荐",
          picUrl: "",
          parentId: 0,
        });
      }
      let params = {
        categoryId: list[0].id,
      };
      if (payload && payload.type === "recommend") {
        params = {
          recommendType: "hot",
        };
      }
      // getGoodsList
      // console.log("list", list);
      const goodsList = yield call(getGoodsList, params);
      console.log("goodsList", goodsList);
      Taro.hideLoading();
      yield put({
        type: "saveCatalog",
        payload: {
          categoryList: list,
          currentCategory: list[0],
          currentSubCategory: goodsList.data.list,
        },
      });
    },
    *getCurrentCategory({ payload }, { call, put }) {
      if (payload.id === 0) {
        const goodsList = yield call(getGoodsList, { recommendType: "hot", pageNo: 1, pageSize: 50 });
        yield put({
          type: "saveCurrentCategory",
          payload: {
            currentCategory: payload,
            currentSubCategory: goodsList.data.list,
          },
        });
        return;
      }
      const goodsList = yield call(getGoodsList, { categoryId: payload.id, pageNo: 1, pageSize: 50 });
      yield put({
        type: "saveCurrentCategory",
        payload: {
          currentCategory: payload,
          currentSubCategory: goodsList.data.list,
        },
      });
    },
  },
};
