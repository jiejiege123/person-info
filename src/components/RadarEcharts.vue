<template>
  <div style="width: 100%;height:100%;position: relative;">
    <div :id="idNo" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>
export default {
  name: 'RadarEcharts',
  props: {
    interval: {
      type: Number,
      default: 0
    },
    idNo: {
      type: String,
      default: ''
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
      this.setXData(news)
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
        title: {
          text: '存贷款评估：',
          textStyle: {
            fontSize: 13
          },
          padding: 15
        },

        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#999',
              fontSize: 8
            }
          },
          indicator: [
            { name: '个人存款余额', max: 6500 },
            { name: '机构存款余额', max: 16000 },
            { name: '公司存款余额', max: 30000 },
            { name: '个人贷款余额', max: 38000 },
            { name: '机构贷款余额', max: 52000 },
            { name: '公司贷款余额', max: 25000 }
          ],
          center: ['50%', '55%'],
          radius: 98,
          startAngle: 0,
          splitArea: {
            areaStyle: {
              color: ['#96C4E5', '#A5CDE6', '#B8D9EC', '#CEE4F2', '#E4F1F7']
            }
          },
          splitLine: false,
          axisLine: false,
          nameGap: 8
        },
        series: [
          {
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
              }
            ],
            lineStyle: { // 线条颜色
              color: '#0396EF'
            },
            itemStyle: { // 拐点颜色
              color: '#0396EF'
            },
            symbol: 'rect'
          }
        ]
      }

      this.myChart.setOption(options)
    },
    setData (data) {
      const { viewBar } = this
      viewBar.series[0].data = data

      this.viewBar = { ...viewBar }
    },
    setXData (data) {
      const { viewBar } = this
      viewBar.xAxis.data = data

      this.viewBar = { ...viewBar }
    }
  }
}
</script>

<style  scoped>
.legend-custom {
  position: absolute;
  right: 10px;
  top: 10px;
}
.legend-item {
  font-size: 8px;
  color: #000;
}
.legend-bar {
  width: 17px;
  height: 4px;
  background: #000;
  display: inline-block;
  border-radius: 2px;
  margin-right: 5px;
}
.good {
  background: #e94d8a;
}
.ok {
  background: #0197f8;
}
.soso {
  background: #8dc73f;
}
</style>
