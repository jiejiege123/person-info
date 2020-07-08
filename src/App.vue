<template>
  <div id="app">
    <layout class="layout"></layout>
  </div>
</template>
<script>
import layout from '@/layout'
export default {
  name: 'App',
  components: {
    layout
  },
  created () {
    localStorage.setItem('userName', '周长江')
    localStorage.setItem('userImg', './assets/img/userimg.jpg')
  }
}
</script>
<style lang="scss">
.layout{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
