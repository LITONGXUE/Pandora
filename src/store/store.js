import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
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
        increment(state) {
            state.count++
        }
    }
})
export default store