import { createStore } from 'vuex';
import user from './uses'
const store = createStore({
	state: {
        num: 10,
		test: 'test1',
	},
    modules:{
        user
    },
	mutations: {
        changeNum(state,val){
            state.num = val
        }
    },
	actions: {
        changeBtn(state){
            console.log('111')
        }
    },
	getters: {},
});

export default store;