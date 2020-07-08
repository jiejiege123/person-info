<!--
 * @Author: your name
 * @Date: 2020-06-29 17:45:01
 * @LastEditTime: 2020-07-03 16:56:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\PersonInfoSystem\AppMain.vue
-->
<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
      <!-- <keep-alive>
      </keep-alive> -->
      <!-- keep-alive 组件会不会刷新的问题 -->
      <router-view :key="key" ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    key: function () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /* 60= navbar  60  */
  /* min-height: calc(100vh - 60px); */
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  /* overflow-y: auto; */
  background: #F4F4F4;
}

.fixed-header+.app-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
  overflow-x: hidden !important;
}

</style>
