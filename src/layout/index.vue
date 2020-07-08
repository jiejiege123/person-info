<!--
 * @Author: your name
 * @Date: 2020-06-29 09:32:42
 * @LastEditTime: 2020-07-03 15:46:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\PersonInfoSystem\pages\layout\index.vue
-->
<template>
  <div class="lay-out">
    <navbar class="nav-bar"></navbar>
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> -->
    <div class="appmain">
      <app-main ></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar } from './components'
export default {
  name: 'myComponent',
  components: {
    AppMain,
    Navbar
  },
  data: function () {
    return {
      value: [20, 50]
    }
  }
}
</script>
<style scoped>
  .lay-out{
    position: relative;
  }
  .nav-bar{
    /* position: absolute !important; */
    position: fixed !important;
    background: #fff;
    max-width: 1200px;
  }
  .appmain{
    /* margin-top: 60px; */
    padding-top: 60px;
  }
</style>
