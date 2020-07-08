<!--
 * @Author: your name
 * @Date: 2020-07-02 14:50:12
 * @LastEditTime: 2020-07-02 17:23:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\PersonInfoSystem\components\CarList.vue
-->
<template>
  <div class="card-list" :style="{background: background}">
    <div class="title">
      {{itemData.title}}
    </div>
    <div class="recode-warp layout-row__between align-center">
      <div>
        <div class="recode-itme-title">
          {{itemData.leftTitle}}
        </div>
        <div class="recode-itme-num">
          {{itemData.leftNum}}
        </div>
      </div>
      <div class="recode-warp-shu"></div>
      <div>
        <div class="recode-itme-title">
          {{itemData.rightTitle}}
        </div>
        <div class="recode-itme-num">
          {{itemData.rightNum}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    background: {
      type: String,
      default: '#000'
    },
    itemData: {
      type: Object,
      default: function () {
        return {
          title: '总行重城市排位',
          leftTitle: '位次评估',
          leftNum: 6,
          rightTitle: '数据评价',
          rightNum: 84
        }
      }
    }
  },
  watch: {

  },
  data: function () {
    return {
      myChart: ''
    }
  },
  mounted: function () {

  },
  methods: {

  }
}
</script>

<style  scoped>
.card-list{
  width: 100%;height:100%;position: relative;
  color: #fff;
  padding: 15px 60px;
  padding-bottom: 10px;
  border-radius: 10px;
  text-align: center;
}
.title{
  letter-spacing: 2px;
  padding-bottom: 12px;
}
.recode-itme-title{
  font-size: 12px;
}
.recode-itme-num{
  font-size: 32px;
  margin-top: -5px;
}
.recode-warp-shu{
  width: 1px;
  height: 35px;
  background: #fff;
  margin-top: -5px;
}
</style>
