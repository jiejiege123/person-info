<template>
  <div style="width: 100%;height:100%;position: relative;">
    <div :id="idNo" style="width: 100%;height:100%;"></div>
    <div class="legend-custom">
      <div class="legend-item layout-row align-center">
        <span class="legend-bar good"></span>
        <span>
          优秀
        </span>
      </div>
      <div class="legend-item layout-row align-center">
        <span class="legend-bar ok"></span>
        <span>
          良好
        </span>
      </div>
      <div class="legend-item layout-row align-center">
        <span class="legend-bar soso"></span>
        <span>
          合格
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarFiveEcharts',
  props: {
    interval: {
      type: Number,
      default: 0
    },
    idNo: {
      type: String,
      default: 'bar'
    },
    eData: {
      type: Array,
      default () {
        return []
      }
    },
    xData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    eData (news, old) {
      this.initOption(news)
    }
  },
  data: function () {
    return {
      myChart: '',
      viewBar: {}
    }
  },
  mounted: function () {
    this.myChart = this.$echarts.init(document.getElementById(this.idNo))
    window.resize = () => {
      this.myChart.resize()
    }
    this.initOption()
  },
  methods: {
    initOption (data) {
      // this.myChart.clear()
      const options = {
        title: {
          text: '五年考核：',
          textStyle: {
            fontSize: 13
          }
        },
        grid: { // 图表的上下左右边距
          left: '5%',
          right: '8%',
          top: '42%',
          bottom: '20%'
        },
        xAxis: { // X轴
          data: this.xData,
          boundaryGap: true, // 刻度点与值的是否对齐
          axisLine: {
            show: true,
            lineStyle: {
              color: '#E5E5E5'
            }
          },
          axisTick: { // 刻度线
            show: false
          },
          splitLine: { // 网格线
            show: false,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisLabel: { // 坐标轴标签
            // style: {
            //   fill: '#4a5969'
            // }
            // interval: 0,
            color: function (value, index) {
              return '#CBCBCB'
            },
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          min: 0,
          axisTick: { // 刻度线
            show: false
          },
          splitLine: { // 网格线
            show: false,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisLine: { // 坐标轴线
            show: false,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisLabel: { // 坐标轴标签
            // style: {
            //   fill: '#4a5969'
            // }
            show: false,
            color: function (value, index) {
              return '#4a5969'
            },
            fontSize: 10
          }
        },
        series: [{
          data: data || [84, 92, 76, 68, 88],
          type: 'bar',
          barWidth: '6', // 柱状宽度
          label: {
            show: true,
            position: 'top',
            color: '#CBCBCB'
          },
          // independentColor: true // 独立配色,
          itemStyle: {
            color: function (params) {
              let color
              if (params.data < 70) {
                color = '#8DC73F'
              } else if (params.data <= 90) {
                color = '#0197F8'
              } else {
                color = '#E94D8A'
              }
              return color
            },
            barBorderRadius: [3, 3, 0, 0]
          }
        }]
      }
      if (this.interval) {
        if (this.interval === 1) {
          options.xAxis.axisLabel.interval = 0
        } else {
          options.xAxis.axisLabel.interval = this.interval
        }
      }
      this.myChart.setOption(options)
    }
  }
}
</script>

<style  scoped>
.legend-custom{
  position: absolute;
  right: 10px;
  top: 10px;
}
.legend-item{
  font-size: 8px;
  color: #000;
}
.legend-bar{
  width: 17px;
  height: 4px;
  background: #000;
  display: inline-block;
  border-radius: 2px;
  margin-right: 5px;
}
.good{
  background: #E94D8A
}
.ok{
  background: #0197F8
}
.soso{
  background: #8DC73F
}
</style>
