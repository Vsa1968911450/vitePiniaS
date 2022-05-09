<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue'
defineProps<{msg:string}>()
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
