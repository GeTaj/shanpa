import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//state
const state = {
  count: 0,    //counter actions 操作的值
  user:null   //fetch action 操作的值
};

//把上面的融到一起
export default new Vuex.Store({
  state,
  mutations:{
    showUserName(state){
        alert(state.user_name);
    }
  }
});
