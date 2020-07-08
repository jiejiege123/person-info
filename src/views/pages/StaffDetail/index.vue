<!--
 * @Author: your name
 * @Date: 2020-06-29 09:37:43
 * @LastEditTime: 2020-07-03 16:55:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bpsp-uie:\ICBC\PersonInfoSystem\pages\layout\components\Navbar.vue
-->
<template>
  <div class="staff-detail">
    <div class="top-bar">
      <div class="top-bar-goback" @click="goBack">
        <Icon type="ios-arrow-back"></Icon>返回
      </div>
      <span>干部信息详情</span>
    </div>
    <div class="staff-info layout-row__between">
      <img :src="staffInfo.photo" class="list-item-info-photo" />
      <div class="list-item-info-des layout-column flex1">
        <div class="layout-row__between">
          <span class="list-item-info-des-name">
            {{staffInfo.name}}
            <span style="font-size: 13px;font-weight:400">（{{staffInfo.birthday}}）</span>
          </span>
          <span class="lh16 w50">学历：{{staffInfo.education}}</span>
        </div>
        <div class="layout-row__between">
          <span class="lh16">机构：{{staffInfo.gover}}</span>
          <span class="lh16 w50">学校：{{staffInfo.school}}</span>
        </div>
        <div class="layout-row__between">
          <span class="lh16">职务：{{staffInfo.post}}</span>
          <span class="lh16 w50">专业：{{staffInfo.major}}</span>
        </div>
        <div class="layout-row__between">
          <span class>分管专业板块：{{staffInfo.plate | plateFilter}}</span>
          <span class="w50">专业特长：{{staffInfo.specialty}}</span>
        </div>
      </div>
    </div>
    <div class="staff-fivexperience layout-row">
      <div class="staff-fivexperience-five">
        <bar-five-echarts :x-data="fiveYear" id-no="barfive"></bar-five-echarts>
      </div>
      <div class="staff-fivexperience-experience layout-row">
        <div class="w50 experience-line">
          <span class="experience-title">主要任职经历：</span>
          <Timeline>
            <timeline-item v-for="(item, index) in experienceListLeft" :key="index">
              <span style="color: #BD2A2D" slot="dot">●</span>
              <p class="time">{{item.title}}</p>
              <p class="content">{{item.detail}}</p>
            </timeline-item>
          </Timeline>
        </div>
        <div class="w50 experience-line line-right">
          <Timeline>
            <timeline-item v-for="(item, index) in experienceListRight" :key="index">
              <span style="color: #BD2A2D" slot="dot">●</span>
              <p class="time">{{item.title}}</p>
              <p class="content">{{item.detail}}</p>
            </timeline-item>
          </Timeline>
        </div>
      </div>
    </div>
    <div class="staff-tabbar">
      <Tabs type="card" @on-click="tabChange" :style="{height: tabHeight}">
        <tab-pane label="业绩档案">
          <div class="achieve">
            <div class="achieve-card-list layout-row__between">
              <card-list
                style="width: 23.5%"
                v-for="(item, index) in cardListData"
                :key="index"
                :background="item.background"
              ></card-list>
            </div>
            <div class="achieve-assexam layout-row__between">
              <div class="achieve-assexam-assess layout-row">
                <div class="radar-warp">
                  <radar-echarts id-no="raderE"></radar-echarts>
                </div>
                <div class="assess-info flex1">
                  <div class="layout-column">
                    <span>全部存款余额</span>
                    <span class="num-sty">{{assessData.allCun}}</span>
                    <span>公司存款余额：{{assessData.comCun}}</span>
                    <span>机构存款余额：{{assessData.gomCun}}</span>
                    <span>个人存款余额：{{assessData.selfCun}}</span>
                  </div>
                  <div class="layout-column mt_20">
                    <span>全部贷款余额</span>
                    <span class="num-sty">{{assessData.allDai}}</span>
                    <span>公司贷款余额：{{assessData.comDai}}</span>
                    <span>机构贷款余额：{{assessData.gomDai}}</span>
                    <span>个人贷款余额：{{assessData.selfDai}}</span>
                  </div>
                </div>
              </div>
              <div class="achieve-assexam-examine">
                <bar-kaohe-echarts :x-data="[2020,2018,2017,2016]" id-no="kaohe"></bar-kaohe-echarts>
              </div>
            </div>
          </div>
        </tab-pane>
        <tab-pane label="业绩评价" class="evaluate">
          <div class="evaluate-content">
            <Table size="small" border :columns="columns" :data="tableData"></Table>
          </div>
          <div v-if="!showAll" class="show-all" @click="showAllRow">
            展示全部
            <Icon type="ios-arrow-down"></Icon>
          </div>
        </tab-pane>
        <tab-pane label="民主测评">标签三的内容</tab-pane>
      </Tabs>
      <div class="staff-hidebar"></div>
    </div>
  </div>
</template>

<script>
import BarFiveEcharts from '@/components/BarFiveEcharts.vue'
import BarKaoheEcharts from '@/components/BarKaoheEcharts.vue'
import CardList from '@/components/CardList.vue'
import RadarEcharts from '@/components/RadarEcharts.vue'
export default {
  name: 'StaffDetail',
  filters: {
    plateFilter: function (val) {
      if (val.length > 1) {
        return val.join('、')
      } else {
        return val[0]
      }
    }
  },
  components: {
    BarFiveEcharts,
    BarKaoheEcharts,
    CardList,
    RadarEcharts
  },
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
          id: 1,
          education: '本科',
          school: '川大',
          major: '金融',
          specialty: '金融学',
          plate: ['sss', 'xxx']
        }
      }
    },
    experienceList: {
      type: Array,
      default: function () {
        return [
          {
            title: '2017.9 至今',
            detail: '成都分行机构金融业务部 二级机构内设部室主要负责人'
          },
          {
            title: '2012.6 - 2017.9',
            detail: '成都分行机构金融业务部 二级机构内设部室主要负责人'
          },
          {
            title: '2012.6 - 2017.9',
            detail: '成都分行机构金融业务部 二级机构内设部室主要负责人'
          },
          {
            title: '2020.6 - 2020.9',
            detail: '成都分行机构'
          },
          {
            title: '2021.6 - 2021.9',
            detail: '成都分行机构金融业务部'
          }
        ]
      }
    },
    cardListData: {
      type: Array,
      default: function () {
        return [
          {
            background: '#00C0F7'
          },
          {
            background: '#607BFF'
          },
          {
            background: '#A18EF9'
          },
          {
            background: '#FF8788'
          }
        ]
      }
    },
    assessData: {
      type: Object,
      default: function () {
        return {
          allCun: '1,234,567,890',
          comCun: '78,222,333',
          gomCun: '443,321,456',
          selfCun: '344,233,212',
          allDai: '1,234,567,890',
          comDai: '78,222,333',
          gomDai: '443,321,456',
          selfDai: '344,233,212'
        }
      }
    },
    columns: {
      type: Array,
      default: function () {
        return [
          {
            title: '年度',
            align: 'center',
            key: 'age',
            width: '120'
          },
          {
            title: '时任职务',
            align: 'center',
            key: 'job',
            width: '220'
          },
          {
            title: '干部评价',
            align: 'center',
            key: 'evaluate',
            className: 'last-col'
          }
        ]
      }
    },
    tableDataAll: {
      type: Array,
      default: function () {
        return [
          {
            age: '2020',
            job: '二级分行内设部室主要负责人',
            evaluate: '政治坚定，思想稳定，能够忠实履行岗位职责，工作用心肯干，肯下功夫钻研业务，具有较强的组织协调能力，对分管工作尽职尽责，能吃苦，经常深入基层检查指导工作，正确处理了工作和家庭关系。遵纪守法，尊敬领导，团结同志，为人正直，作风正派，清正廉洁，不计较个人得失。'
          },
          {
            age: '2020',
            job: '二级分行内设部室主要负责人',
            evaluate: '政治坚定，思想稳定，能够忠实履行岗位职责，工作用心肯干，肯下功夫钻研业务，具有较强的组织协调能力，对分管工作尽职尽责，能吃苦，经常深入基层检查指导工作，正确处理了工作和家庭关系。遵纪守法，尊敬领导，团结同志，为人正直，作风正派，清正廉洁，不计较个人得失。'
          },
          {
            age: '2020',
            job: '二级分行内设部室主要负责人',
            evaluate: '政治坚定，思想稳定，能够忠实履行岗位职责，工作用心肯干，肯下功夫钻研业务，具有较强的组织协调能力，对分管工作尽职尽责，能吃苦，经常深入基层检查指导工作，正确处理了工作和家庭关系。遵纪守法，尊敬领导，团结同志，为人正直，作风正派，清正廉洁，不计较个人得失。'
          },
          {
            age: '2020',
            job: '二级分行内设部室主要负责人',
            evaluate: '政治坚定，思想稳定，能够忠实履行岗位职责，工作用心肯干，肯下功夫钻研业务，具有较强的组织协调能力，对分管工作尽职尽责，能吃苦，经常深入基层检查指导工作，正确处理了工作和家庭关系。遵纪守法，尊敬领导，团结同志，为人正直，作风正派，清正廉洁，不计较个人得失。'
          },
          {
            age: '2020',
            job: '二级分行内设部室主要负责人',
            evaluate: '政治坚定，思想稳定，能够忠实履行岗位职责，工作用心肯干，肯下功夫钻研业务，具有较强的组织协调能力，对分管工作尽职尽责，能吃苦，经常深入基层检查指导工作，正确处理了工作和家庭关系。遵纪守法，尊敬领导，团结同志，为人正直，作风正派，清正廉洁，不计较个人得失。'
          },
          {
            age: '2020',
            job: '二级分行内设部室主要负责人',
            evaluate: '政治坚定，思想稳定，能够忠实履行岗位职责，工作用心肯干，肯下功夫钻研业务，具有较强的组织协调能力，对分管工作尽职尽责，能吃苦，经常深入基层检查指导工作，正确处理了工作和家庭关系。遵纪守法，尊敬领导，团结同志，为人正直，作风正派，清正廉洁，不计较个人得失。'
          }
        ]
      }
    }
  },
  computed: {
    experienceListLeft: function () {
      if (this.experienceList.length > 3) {
        const list = this.experienceList.slice(0, 3)
        list.push({})
        return list
      } else {
        return this.experienceList
      }
    },
    experienceListRight: function () {
      if (this.experienceList.length > 3) {
        const list = this.experienceList.slice(3)
        list.unshift({
          title: 'null',
          detail: 'null'
        })
        return list
      } else {
        return []
      }
    }
  },
  data: function () {
    return {
      value: [20, 50],
      img: '',
      fiveYear: [2019, 2018, 2017, 2016, 2015],
      tabHeight: 'auto',
      showAll: false,
      tableData: []
    }
  },
  mounted: function () {
    this.tableData = this.tableDataAll.slice(0, 1)
  },
  methods: {
    goBack: function () {
      this.$router.push({
        path: '/list'
      })
    },
    tabChange: function (name) {
      if (name === 1 && !this.showAll) {
        this.tabHeight = '200px'
      } else {
        this.tabHeight = 'auto'
      }
    },
    showAllRow: function () {
      this.showAll = true
      this.tableData = this.tableDataAll
      this.tabHeight = 'auto'
    }
  }
}
</script>

<style scoped>
.staff-detail {
  width: 100%;
  /* height: 100%; */
  min-height: calc(100vh - 60px);
  padding: 30px;
  color: #1b1b1b;
  padding-top: 30px;
}
.top-bar-goback {
  display: inline-block;
  padding-right: 15px;
  cursor: pointer;
}

.staff-info {
  width: 100%;
  background: #fff;
  margin-top: 15px;
  border: 1px solid #cccccc;
  padding: 15px 25px;
}
.list-item-info-photo {
  width: 90px !important;
  height: auto;
  margin-right: 20px;
}
.w50 {
  width: 50%;
  display: inline-block
}
.lh16 {
  /* line-height: 34px; */
  padding-bottom: 12px;
  display: inline-block
}
.list-item-info-des {
  font-size: 13px;
}
.list-item-info-des-name {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 9px;
  display: inline-block
}

/* 考核经历 */
.staff-fivexperience {
  width: 100%;
  background: #fff;
  border: 1px solid #cccccc;
  margin-top: 10px;
  /* padding: 15px 25px; */
  height: 190px;
}
.staff-fivexperience-five {
  border-right: 1px solid #cccccc;
  width: 35%;
  padding: 10px 15px;
}
.staff-fivexperience-experience {
  width: 65%;
  padding: 10px 15px;
  padding-bottom: 20px;
}
.experience-title {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 15px;
}

.experience-line {
  height: 100%;
  overflow: hidden;
}
.line-right {
  margin-top: 15px;
  height: calc(100% - 15px);
  overflow-y: auto;
}
.line-right .ivu-timeline {
  margin-top: -22px;
}
.line-right
  .ivu-timeline
  .ivu-timeline-item:first-child
  .ivu-timeline-item-content
  .content {
  color: transparent;
}
.line-right
  .ivu-timeline
  .ivu-timeline-item:first-child
  .ivu-timeline-item-content
  .time {
  color: transparent;
}
.time {
  font-size: 12px;
  font-weight: bold;
}
.content {
  font-size: 12px;
  color: #999;
}
.ivu-timeline-item-content {
  padding-bottom: 8px;
}
.ivu-timeline-item-tail {
  border-left: 2px solid #cbcbcb;
}
.ivu-timeline-item {
  padding: 0;
}

/* 标签 */
.staff-tabbar {
  margin-top: 20px;
  /* margin-bottom: 30px; */
  position: relative;
}
.staff-tabbar .ivu-tabs {
  background: #fff;
}
.staff-hidebar {
  position: absolute;
  right: -2px;
  height: 31px;
  width: 30px;
  top: 0;
  background: #f4f4f4;
}
.ivu-tabs-bar {
  background: #f4f4f4;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 1px;
}
/* .ivu-tabs-content{
  border: 1px solid #cccccc;
  border-top: 0;
} */
.ivu-tabs-card {
  border: 1px solid #cccccc;
  border-top: 0;
}
/* .ivu-tabs-tabpane{
  border: 1px solid #cccccc;
  border-top: 0;
} */
.ivu-tabs-nav .ivu-tabs-tab {
  margin-right: 0 !important;
  border-right: 0 !important;
  border-radius: 0 !important;
  border: 1px solid #cccccc !important;
  border-bottom: 0 !important;
  border-right: 0 !important;
  font-size: 13px !important;
  padding: 3px 15px 0px !important;
  background: #fff !important;
  line-height: 25px;
  color: #000;
  /* height: 25px !important; */
}
.ivu-tabs-nav .ivu-tabs-tab:hover {
  color: #ca333f;
}
.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
  color: #ca333f;
}
.ivu-tabs-tab:last-child {
  border-right: 1px solid #cccccc !important;
}

.achieve {
  padding: 20px;
}

/* 业绩档案 */
.achieve-assexam {
  height: 300px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}
.achieve-assexam-assess {
  width: 49%;
  height: 100%;
  border: 1px solid #cccccc;
}
.achieve-assexam-examine {
  width: 49%;
  height: 100%;
  border: 1px solid #cccccc;
}
.radar-warp {
  width: 65%;
  height: 100%;
}

.assess-info {
  font-size: 11px;
  color: #000;
  padding-top: 55px;
}
.num-sty {
  font-size: 14px;
  color: #0096f3;
  margin-bottom: 10px;
}

/* 业绩评价 */
.evaluate {
  /* height: 170px; */
  padding: 40px;
  padding-top: 20px;
}
.ivu-table-header{
  border-right: 1.5px solid #000;
}
.ivu-table-header thead tr th{
  background: #EDA6AC;
  color: #000;
  border: 1px solid #000;
  border-right: 0;
  padding: 4px 0;
}
.ivu-table-column-center{
  padding-top: 8px;
  padding-bottom: 8px;
  background: #F2F2F2;
  color: #000;
}
.last-col{
  text-align: left;
}
.ivu-table-border td, .ivu-table-border th {
  border-right: 1px solid #D4D4D4;
}
.show-all{
  text-align: center;
  cursor: pointer;
  color: #0C63A7;
  font-size: 13px;
  margin-top: 10px;
  position: relative;
  margin: 0 auto;
  width: 70px;
  padding-top: 10px;
}
.show-all::after{
  content: '';
  height: 0px;
  background: #0C63A7;
  width: 65px;
  position: relative;
  display: block;
  text-align: center;
  border-top: 1px solid #0C63A7;
}
</style>
