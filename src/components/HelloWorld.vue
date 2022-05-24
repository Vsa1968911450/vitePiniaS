<template>
 <div>1234</div>
  <h1>{{obj.age}}</h1>
  <!-- <p>{{msg}}</p> -->
   <input type="text" v-model="ss">
  <input type="text" v-model="aaa">
   <input type="text" v-model="msgs">
   <input type="text" v-model="obj.arr">
   <button @click="go">121221</button>
    <button @click="btns">哈哈</button>
    <button @click="btnss">muata  tion哈哈</button>
    {{num}}
    <button @click="changeNUm">changeNum</button>
    {{name}}
    {{changePiniaNum}}
   <List v-model:msg="msg" @fn="changeHome"></List>
</template>

<script lang="ts" setup>
import {storeToRefs} from 'pinia'
// import {  onMounted, reactive,toRefs,computed,watch } from 'vue'
import { useRouter,useRoute} from 'vue-router'
import { useStores } from '../store/pinia'
import { useStore } from 'vuex';
import List from './children.vue'
const vuexStore = useStore as any
let store = new vuexStore()
const vuexStores = useStores as any
let stores = new vuexStores()
console.log(stores)
let {name,num,changePiniaNum} = storeToRefs(stores)
let changeNUm = ()=>{
    // name.value = 'hahaha'
    stores.$patch((state)=>{
        console.log(state.counter)
        state.counter++
    })
}
function fn<T,K>(a:T,b:K){
    // T 任意类型
    return a
}
// fn<string>('hello')  // 转成string
console.log(store)
fn<number,string>(1,'2')
interface Iner{
    length:number
}
function fns<T extends Iner>(a:T){
    return a.length
}
fns([123])
class MyClass<T>{
    name:T
    constructor(name:T){
        this.name = name
    }
}
let mc = new MyClass<string>('aaa')
// 可以使用type和interface
type mytype = {
    name:string,
    age:number
}
// 接口可以限制定义类  接口中所有属性都不能有实际值 只定义结构
interface myinterface {
     name:string,
     age:number
}
const objs:myinterface = {
    name:"wdy",
    age:12
}
interface haha{
    name:string,
    say():void
}
class myFunc implements haha{
    name:string;
    constructor(name:string){
        this.name=name
    }
    say(){}
}
// let num = computed(()=>store.state.num)
// console.log(num)
const useS = useRouter as any
let uses = new useS()
const useSS = useRoute as any
let usess = new useSS()
let go = ()=>{
    console.log(uses)
    console.log(usess)
    uses.push('/about')
}

let msg = ref('father1')
let ss = ref('123')
let aaa = ref('woshinidie')
let msgs = ref('121223423')
let obj = reactive({
    name:'123',
    age:123,
    arr:[1,2,3,4,5]
})
onMounted(()=>{
    console.log(obj)
   
})
let btns = ()=>{
    store.commit('changeNum',300)
}
let btnss = ()=>{
    store.dispatch('changeBtn')
}
let changeHome = (n:any)=>{
     console.log(n)
    ss = msg
}
// watch(()=>obj.arr,(newVal,oldVal)=>{ // 监听对象
//     console.log(newVal,oldVal)
// })
watch([msgs,aaa,ss],(newVal,oldVal)=>{
    console.log(newVal,oldVal)
},{immediate:true,deep:true})
watch(msg,(newVal,oldVal)=>{
    if(newVal){ss = msg }
},{immediate:true,deep:true})
// let msg = computed(()=>{
//     return obj.age + 1
// })
// export default({
//   name: 'HelloWorld',
//   setup(){   // setup没有this
//     const useS = useRouter as any
//     let uses = new useS()
//     const useSS = useRoute as any
//     let usess = new useSS()
//     let go = ()=>{
//         console.log(uses)
//         console.log(usess)
//         uses.push('/about')
//     }
//     let msg = ref('father')
//     let aaa = ref('woshinidie')
//     let msgs = ref('121223423')
//     let obj = reactive({
//         name:'123',
//         age:123,
//         arr:[1,2,3,4,5]
//     })
//     onMounted(()=>{
//         console.log(obj)
       
//     })
//     watch(()=>obj.arr,(newVal,oldVal)=>{ // 监听对象
//         console.log(newVal,oldVal)
//     })
//     watch([msgs,aaa],(newVal,oldVal)=>{
//         console.log(newVal,oldVal)
//     },{immediate:true,deep:true})
//     // let msg = computed(()=>{
//     //     return obj.age + 1
//     // })
//     return {...toRefs(obj),msgs,aaa,go}  // 解构
//   },
// })
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
