import {defineStore} from 'pinia'
export const useContent = defineStore('count',{
    // 创建state
    state:()=>({
        count:0
    }),
    // 计算
    getters:{},
    // 方法
    actions:{}
})