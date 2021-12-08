import { createStore } from 'vuex'

export default createStore({
  state: {
    state:1,
    msg:'',
  },
  mutations: {
    ShowHint(state,msg){
      state.state+=1;
      state.msg =msg;
    }
  },
  actions: {
  },
  modules: {
  }
})
