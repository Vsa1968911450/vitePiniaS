<template>
 <div>1234</div>
  <h1>{{obj.age}}</h1>
  <!-- <p>{{msg}}</p> -->
   <input type="text" v-model="ss">
  <input type="text" v-model="aaa">
   <input type="text" v-model="msgs">
   <input type="text" v-model="obj.arr">
   <button @click="go">121221</button>
   <List v-model:msg="msg" @fn="changeHome"></List>
</template>

<script lang="ts" setup>
// import {  onMounted, reactive,toRefs,computed,watch } from 'vue'
// import { useRouter,useRoute} from 'vue-router'
import List from './children.vue'
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
        if(newVal){
            ss = msg
        }

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
