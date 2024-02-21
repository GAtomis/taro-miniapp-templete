import {getDictType} from "../api/system"

export default {
  namespace: "dictionary",
  state: {

  },
  reducers: {
    initDict: (state, { payload:{key,val} }) => {
      state[key] = val;
      
    },
 
  
  },
  effects: {
    *initDictList({payload}, { call, put }) {
      const res = yield call(getDictType,payload);
      yield put({ type: "initDict", payload: {key:payload,val:res.data}});
    },
   
  },
};
