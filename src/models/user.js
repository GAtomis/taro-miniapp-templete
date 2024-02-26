// import {
//   getAddressListApi,
//   saveAddress,
//   updateAddress,
// } from "../services/address";
import { deleteAddress } from "../api/address";
import { getUserInfo, login } from "../api/user";
import Taro from "@tarojs/taro";

export default {
  namespace: "user",
  state: {
    addressList: [],
    selectedAddress: null,
    userInfo: null,
    token: Taro.getStorageSync("token") || null,
    openId: Taro.getStorageSync("openId") || null,
  },
  reducers: {
    // initList: (state, { payload }) => {
    //   state.addressList = payload;
    //   if (!state.selectedAddress) {
    //     let defaultAddr = payload.find((it) => it.defaultStatus === 1);
    //     if (!defaultAddr && payload.length > 0) {
    //       defaultAddr = payload[0];
    //     }
    //     state.selectedAddress = defaultAddr;
    //   }
    // },
    // updateSelected1: (state, { payload }) => {
    //   state.selectedAddress = payload;
    // },
    // updateItem1: (state, { payload }) => {
    //   const { index, item } = payload;
    //   state.addressList[index] = item;
    // },
    // updateAddress1: (state, { payload }) => {
    //   const { index, item } = payload;
    //   state.addressList[index] = item;
    //   // 其余的地址都设置为非默认
    //   state.addressList.forEach((it) => {
    //     if (it.id !== item.id) {
    //       it.defaultStatus = false;
    //     }
    //   });
    // },
    // updateUserInfe: (state, { payload }) => {
    //   console.log("更新userinfo");
    //   Taro.setStorageSync("userInfo", JSON.stringify(payload));

    //   state.userInfo = payload;
    // },
    // updataToken: (state, { payload }) => {
    //   Taro.setStorageSync("token", payload.accessToken);
    //   Taro.setStorageSync("openId", payload.openid);
    //   state.openId = payload.openid;
    //   state.token = payload.accessToken;
    // },
    // initUserState(state) {
    //   Taro.clearStorageSync();
    //   state.userInfo = {};
    //   state.token = null;
    // },
  },
  effects: {
    // *initAddressList(_, { call, put }) {
    //   const res = yield call(getAddressListApi);
    //   yield put({ type: "initList", payload: res.data });
    // },
    // *updateSelected({ payload }, { put }) {
    //   yield put({ type: "updateSelected1", payload });
    // },
    // *updateItem({ payload }, { put, call, select }) {
    //   const addressList = yield select((state) => {
    //     return state.user.addressList;
    //   });
    //   const { index, item } = payload;
    //   const res = yield call(() =>
    //     saveAddress({ ...addressList[index], ...item })
    //   );
    //   yield put({ type: "updateItem1", payload: { index, item: res } });
    // },
    // *updateAddress({ payload }, { call, put, select }) {
    //   const addressList = yield select((state) => {
    //     return state.user.addressList;
    //   });
    //   const { index, item } = payload;
    //   console.log(addressList, payload, item);
    //   let addressInfo = JSON.parse(JSON.stringify(addressList[index]));
    //   console.log(addressInfo, "addressInfo");
    //   addressInfo.defaultStatus = true;
    //   const res = yield call(() => updateAddress(addressInfo));
    //   yield put({
    //     type: "updateAddress1",
    //     payload: { index, item: addressInfo },
    //   });
    // },
    // *deleteAddress({ payload }, { call, put, select }) {
    //   const addressList = yield select((state) => {
    //     return state.user.addressList;
    //   });
    //   const { index } = payload;
    //   const res = yield call(() => deleteAddress(addressList[index].id));
    //   if (res.code === 0) {
    //     console.log(addressList, index);
    //     const list = yield call(getAddressListApi);
    //     yield put({ type: "initList", payload: list.data });
    //   }
    // },

    // *getUserInfo(_, { call, put }) {
    //   const { data } = yield call(getUserInfo);
    //   yield put({ type: "updateUserInfe", payload: data });
    // },
    // *login({ payload }, { call, put }) {
    //   console.log(payload);
    //   const { data } = yield call(() => login(payload));
    //   yield put({ type: "updataToken", payload: data });
    // },
    // *logout(_, { put }) {
    //   yield put({ type: "initUserState" });
    // },
  },
};
