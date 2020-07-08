<!--
 * @Author: your name
 * @Date: 2020-06-29 09:37:43
 * @LastEditTime: 2020-07-03 15:48:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\PersonInfoSystem\pages\layout\components\Navbar.vue
-->
<template>
  <div class="staff-detail">
    <div class="search-warp layout-row">
      <div style="display:inline-block;">
        <span>所属机构：</span>
        <!-- <i-select v-model="city" filterable clearable style="width:200px" size="large">
            <option-group label="机构选择">
              <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
            </option-group>
        </i-select>-->
        <Cascader
          :data="cityList"
          change-on-select
          filterable
          clearable
          placeholder="请选择机构"
          :render-format="cascaderFormat"
          style="width:200px;display: inline-block;"
          size="large"
        ></Cascader>
      </div>
      <div class="input-warp">
        <i-input
          v-model="name"
          prefix="ios-search"
          placeholder="可输入干部姓名、所属机构..."
          style="width: 400px;margin-left:30px"
          size="large"
        ></i-input>
        <button class="df-button in-botton">搜索</button>
      </div>
    </div>
    <div class="list-content">
      <div class="list-warp layout-row__between">
        <list-item class="list-item-warp"></list-item>
        <list-item class="list-item-warp"></list-item>
        <list-item class="list-item-warp"></list-item>
        <list-item class="list-item-warp"></list-item>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './components/ListItem'
import { getInfo } from '@/api/user'
export default {
  name: 'StaffList',
  components: {
    ListItem
  },
  data: function () {
    return {
      value: [20, 50],
      formItem: {},
      city: '',
      cityList: [
        {
          value: 1,
          label: '成都分行',
          children: [
            {
              value: 2,
              label: '武侯支行'
            }
          ]
        }
      ],
      name: '',
      cascaderFormat: function (labels, selectedData) {
        const index = labels.length - 1
        const data = selectedData[index] || false
        if (data && data.code) {
          return labels[index] + ' - ' + data.code
        }
        return labels[index]
      }
    }
  },
  mounted: function () {
    getInfo().then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
input:-ms-input-placeholder {
  color: #8f8f8f;
}
.staff-detail {
  width: 100%;
  /* height: 100%; */
  min-height: calc(100vh - 60px);
  padding: 35px;
  color: #1b1b1b;
}
.ivu-select-selection,
.ivu-input {
  border-radius: 1px;
  border: 1px solid #cbcbcb;
  /* box-shadow: 0px 1px 1px rgba(0, 12, 24, 0.123); */
}
.ivu-select-input,
.ivu-input {
  color: #1b1b1b;
  font-size: 14px;
}
.ivu-select-group-title {
  font-size: 12px;
}
.ivu-select-item {
  color: #1b1b1b;
}
.ivu-cascader-size-large .ivu-cascader-label {
  line-height: 40px;
  font-size: 14px;
}
.ivu-input {
}
.ivu-input-prefix {
  padding-left: 10px;
}
.ivu-input-prefix .ivu-icon {
  color: #b1b1b1 !important;
}
.input-warp {
  position: relative;
  display: inline-block;
}
.in-botton {
  position: absolute;
  top: 6px;
  right: 10px;
}
.search-warp {
  height: 40px;
  margin-bottom: 35px;

}
/* 人员列表 */
.list-content{
  /* max-height: 100%; */
  height: calc(100% - 75px);
  overflow-y: auto;
}
.list-warp {
  width: 100%;
  flex-wrap: wrap;
}
.list-item-warp {
  width: 49%;
}
</style>
<style>
.df-button {
  background: #f4d4d7;
  color: #ca242d;
  border: 0;
  font-size: 13px;
  padding: 4px 12px;
  cursor: pointer;
  /* outline:0 none !important; */
  outline: 0;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
}
.df-button:hover {
  background: #f1d8db;
}
.df-button:active {
  background: #f3cbcf;
}
</style>
