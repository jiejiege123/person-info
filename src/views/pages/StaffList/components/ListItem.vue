<!--
 * @Author: your name
 * @Date: 2020-06-29 09:37:43
 * @LastEditTime: 2020-07-01 08:42:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\PersonInfoSystem\pages\layout\components\Navbar.vue
-->
<template>
  <div class="list-item layout-row__between align-center">
    <div class="list-item-info layout-row">
      <img :src="staffInfo.photo" class="list-item-info-photo" />
      <div class="list-item-info-des layout-column">
        <span class="list-item-info-des-name">{{staffInfo.name}}</span>
        <span class="lh16">机构：{{staffInfo.gover}}</span>
        <span class="lh16">职务：{{staffInfo.post}}</span>
        <span class="lh16">出生年月：{{staffInfo.birthday}}</span>
      </div>
    </div>
    <button class="df-button" @click="goDetail(staffInfo.id)">查看详情</button>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    staffInfo: {
      type: Object,
      default: function () {
        return {
          photo: require('@/assets/img/userphoto.jpg'),
          name: '郑利名',
          gover: '成都分行国际业务部',
          post: '二级机构内设部主要负责人',
          birthday: '1928.06.22',
          id: 1
        }
      }
    }
  },
  data: function () {
    return {
      value: [20, 50]
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push(
        { path: '/detail', query: { id: id } }
      )
    }
  }
}
</script>

<style scoped>
.list-item{
  background: #fff;
  /* display: inline-block; */
  max-width: 800px;
  min-width: 40%;
  border: 1px solid #D3D3D3;
  padding: 25px;
  margin-bottom: 18px;
}
.list-item-info{

}
.list-item-info-photo{
  width: 90px;
  margin-right: 20px;
}
.list-item-info-des{
  font-size: 13px;
}
.list-item-info-des-name{
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 9px;
}
.lh16{
  line-height: 24px;
}
</style>
