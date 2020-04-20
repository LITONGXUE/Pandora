import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 10,
        num: 2,
        todo:[
            {id: 1},
            {id: 0},
            {id: 5},
            {id: 3},
            {id: 4}
        ]
    },
    getters:{
        todoSort(state){
            return state.todo.sort((a,b)=>{return a.id - b.id})
        }
    },
    mutations: {
        increment(state,payload) {
            state.count+=payload.amount
        },
        upNum(state,payload){
            state.num = payload.num
        }
    },
    actions: {
        incrementAsync ({commit},obj) {
            setTimeout(()=>{
                commit('increment',obj)
            },1000)
        }
      }
})
export default store