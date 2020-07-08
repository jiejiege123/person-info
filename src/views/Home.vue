<!--
 * @Author: your name
 * @Date: 2020-07-08 08:26:17
 * @LastEditTime: 2020-07-08 11:35:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\doit\vue admin\vue-cli3-base\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" :src="logoSrc">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getInfo } from '@/api/user'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      logoSrc: require('@/assets/logo.png')
    }
  },
  mounted () {
    this.testMockApi()
  },
  methods: {
    testMockApi () {
      getInfo().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
