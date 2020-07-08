<template>
  <div style="width: 100%;height:100%;position: relative;">
    <div :id="idNo" style="width: 100%;height:100%;"></div>
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
    },
    xData (news, old) {
      this.initOption(news)
    }
  },
  data: function () {
    return {
      myChart: ''
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
        color: ['#00C1F8', '#607BFF', '#A18EF9', '#FF8788'],
        title: {
          text: '考核绩效趋势：',
          textStyle: {
            fontSize: 13
          },
          padding: 15
        },
        legend: {
          icon: 'circle',
          padding: [2, 0, 0, 0],
          itemGap: 20,
          itemHeight: 10,
          data: ['一季度', '二季度', '三季度', '四季度'],
          bottom: 30,
          textStyle: {
            fontSize: 10,
            color: '#CBCBCB',
            lineHeight: 15,
            padding: [2, 0, 0, -8]
          }
          // formatter: function (name) {
          //   console.log(name);
          //   return 'Legend ' + name;
          // }
        },
        grid: {
          // 图表的上下左右边距
          left: '12%',
          right: '10%',
          top: '20%',
          bottom: '25%'
        },
        xAxis: {
          // X轴
          data: this.xData,
          boundaryGap: true, // 刻度点与值的是否对齐
          axisLine: {
            show: true,
            lineStyle: {
              color: '#CECECE'
            }
          },
          axisTick: {
            // 刻度线
            show: false
          },
          splitLine: {
            // 网格线
            show: false,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisLabel: {
            // 坐标轴标签
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
          axisTick: {
            // 刻度线
            show: false
          },
          splitLine: {
            // 网格线
            show: true,
            lineStyle: {
              color: '#D2D2D2'
            }
          },
          axisLine: {
            // 坐标轴线
            show: false,
            lineStyle: {
              color: '#2f4253'
            }
          },
          axisLabel: {
            // 坐标轴标签
            // style: {
            //   fill: '#4a5969'
            // }
            show: true,
            color: function (value, index) {
              return '#D2D2D2'
            },
            fontSize: 10
          }
        },
        series: [
          {
            name: '一季度',
            data: data || [84, 92, 76, 68],
            type: 'bar',
            barWidth: '15', // 柱状宽度
            label: {
              show: false,
              position: 'top',
              color: '#CBCBCB'
            },
            // independentColor: true // 独立配色,
            showBackground: true,
            backgroundStyle: {
              color: '#F0F0F0'
            }
          },
          {
            name: '二季度',
            data: data || [92, 84, 76, 68],
            type: 'bar',
            barWidth: '15', // 柱状宽度
            label: {
              show: false,
              position: 'top',
              color: '#CBCBCB'
            },
            // independentColor: true // 独立配色,
            showBackground: true,
            backgroundStyle: {
              color: '#F0F0F0'
            }
          },
          {
            name: '三季度',
            data: data || [68, 84, 92, 0],
            type: 'bar',
            barWidth: '15', // 柱状宽度
            label: {
              show: false,
              position: 'top',
              color: '#CBCBCB'
            },
            // independentColor: true // 独立配色,
            showBackground: true,
            backgroundStyle: {
              color: '#F0F0F0'
            }
          },
          {
            name: '四季度',
            data: data || [92, 76, 45, 0],
            type: 'bar',
            barWidth: '15', // 柱状宽度
            label: {
              show: false,
              position: 'top',
              color: '#CBCBCB'
            },
            // independentColor: true // 独立配色,
            showBackground: true,
            backgroundStyle: {
              color: '#F0F0F0'
            }
          }
        ]
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
</style>
