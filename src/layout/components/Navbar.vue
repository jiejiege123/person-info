<!--
 * @Author: your name
 * @Date: 2020-06-29 09:37:43
 * @LastEditTime: 2020-06-30 14:30:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\PersonInfoSystem\pages\layout\components\Navbar.vue
-->
<template>
  <div class="navbar layout-row__between">
    <div class="logo">
      <span class="logo-title">干部可视化画像系统</span>
    </div>
    <div class="user-info">
      <Dropdown trigger="click">
        <a href="javascript:void(0)" class="user-info-title">
          周长江
          <Icon type="md-arrow-dropdown" ></Icon>
        </a>
        <Dropdown-menu slot="list">
          <Dropdown-item>这是选项</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
      <Avatar :src="img" alt srcset size="40" ></Avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data: function () {
    return {
      value: [20, 50],
      img: require('@/assets/img/userimg.jpg')
    }
  },
  mounted: function () {
    // this.img = localStorage.getItem('userImg')
  },
  methods: {}
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 4px rgba(0, 12, 24, 0.24);
  padding: 0 35px;
  position: relative;
  z-index: 9999;
}
.logo-title{
  font-size: 22px;
  color: #000;
  font-weight: 500;
  line-height: 60px;
}
.user-info{
  line-height: 60px;
}
.user-info-title{
  color: #333;
  font-weight: 500;
  padding-right: 5px;
}
</style>
