<template>
  <div v-if="id" :id="id" :class="className" :style="{ height:height,width:width }"></div>
</template>

<script>
  import $ from 'jquery'
  import echarts from 'echarts'
  if (process.browser) {
    require('echarts-wordcloud')
  }

  export default {
    props: {
      className: {
        type: String,
        default: ""
      },
      id: {
        type: String,
        default: "wordCloud"
      },
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        default: "100%"
      },
      data: {
        type: Array,
        default: []
      },
      title: {
        type: String,
        default: ""
      },
      callback: {
        type: Function,
        default: function () {}
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      if (process.browser) {
        this.initChart()
      }
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id))
        
        const option = {
          title: {
            text: this.title,
            x: "center"
          },
          tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
          },
          series: [
            {
              type: "wordCloud",
              shape: 'circle',
              //用来调整词之间的距离
              gridSize: 10,
              //用来调整字的大小范围
              sizeRange: [12, 35],
              rotationRange: [0, 0],
              drawOutOfBound: true,
              //随机生成字体颜色
              textStyle: {
                normal: {
                  color: function() {
                    return (
                      "rgb(" +
                      Math.round(Math.random() * 255) +
                      ", " +
                      Math.round(Math.random() * 255) +
                      ", " +
                      Math.round(Math.random() * 255) +
                      ")"
                    );
                  }
                }
              },
              //位置相关设置
              left: "center",
              top: "center",
              right: null,
              bottom: null,
              width: "100%",
              height: "100%",
              //数据
              data: this.data
            }
          ]
        };
        this.chart.setOption(option)

        // 点击选择地图时,进行数据回调处理
        this.chart.on('click', (params) => {
            if (params.name) {
              this.$emit('callback', params)
            }
        })
        $(window).resize(() => {
          this.chart && this.chart.resize()
        })
      }
    },

    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    }
  }
</script>
<style lang='scss'>

</style>