import { defineStore } from "pinia"; //数据持久化 localstorage或者pinia插件
export const useStores = defineStore('storeId',{
    state:()=>{
        return{
            num:0,
            name:'123',
            counter:1
        }
    },
    getters:{
        changePiniaNum(state){
            return this.num + this.counter
        }
    },
    actions:{},
    persist:{
        enabled:true,
        strategies:[{
            key:"my_pinia",
            storage:localStorage
        }]
    }
})