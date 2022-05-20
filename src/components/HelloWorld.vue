<template>
 <div>1234</div>
  <h1>{{age}}</h1>
  <p>{{msg}}</p>
</template>

<script lang="ts">
import {  onMounted, reactive,toRefs,computed } from 'vue'
export default({
  name: 'HelloWorld',
  setup(){ 
    let obj = reactive({
        name:'123',
        age:123
    })
    onMounted(()=>{
        console.log(obj)
       
    })
    let msg = computed(()=>{
        return obj.age + 1
    })
    return {...toRefs(obj),msg}  // 解构
  },
})
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
