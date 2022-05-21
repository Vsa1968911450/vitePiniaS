<template>
    <div>
        子组件=>{{msg}}
        <button @click="btn">12121</button>
    </div>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue'
onMounted(()=>{
    console.log(props.msg)
})
// let num = ref<number>(10);

// const emit = defineEmits<{
//     (e:'fn',id:number):void
// }>()
// const gotoM = ()=>{
//     console.log(num)
//     emit('fn', num)
// }
let props = defineProps({
    msg:{
        type:String,
        default:123
    }
})
let str = ref('我是你爹')
const emit = defineEmits(['update:msg'])
const btn = ()=>{
    console.log(str)
    emit('update:msg', str.value)
}
</script>