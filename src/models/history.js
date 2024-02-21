import { getHistoryRecord } from "../utils/app"
import Taro from "@tarojs/taro";

export default {
  namespace: "history",
  state: {
    historyRecord: getHistoryRecord()  ,
    currentWord: ''
  },
  reducers: {
    setHistory: (state, { payload: { keyword } }) => {
      const list = state.historyRecord 
      console.log("setHistory", keyword);
      if(!keyword) return 

      if(list.find(item=>item.trim()==keyword.trim()))return
      if (list.length > 14) {
        list.shift()
      }
      list.push(keyword)
      Taro.setStorageSync('search-history', JSON.stringify(list))
      // state.historyRecord=list

    },
    setCurrentWord: (state, { payload: { keyword } }) => {
      console.log("setCurrentWord", keyword);
      state.currentWord = keyword
    },
    initHistory:(state)=>{
      state.historyRecord=[]
      Taro.setStorageSync('search-history',"")
    }


  },
  effects: {

  },
};
