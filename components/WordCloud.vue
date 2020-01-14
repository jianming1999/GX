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
        //小鸟图片
        var maskImage = new Image();
      maskImage.src =  'data:image/svg+xml,<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1578725447260" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1842" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M512 825.856c-121.344 0-235.52-34.048-321.792-95.488-42.24-30.208-75.52-65.536-98.56-104.704-24.32-41.216-36.608-84.736-36.608-129.536 0-45.056 12.288-88.576 36.608-129.536 23.296-39.424 56.32-74.496 98.56-104.704C276.48 199.936 390.656 165.888 512 165.888s235.52 34.048 321.792 95.488c42.24 30.208 75.52 65.536 98.56 104.704 24.32 40.96 36.608 84.48 36.608 129.536s-12.288 88.576-36.608 129.536c-23.296 39.424-56.32 74.496-98.56 104.704-86.272 61.952-200.448 96-321.792 96z m0-640c-117.248 0-227.328 32.512-310.016 91.904-39.936 28.672-71.168 61.696-92.928 98.816-22.528 37.888-33.792 77.824-33.792 119.296 0 41.216 11.264 81.408 33.792 119.552 21.76 36.864 52.992 69.888 92.928 98.816 82.688 59.136 192.768 91.904 310.016 91.904s227.328-32.512 310.016-91.904c39.936-28.672 71.168-61.696 92.928-98.816 22.528-37.888 33.792-78.08 33.792-119.552s-11.264-81.408-33.792-119.552c-21.76-36.864-52.992-69.888-92.928-98.816-82.688-58.88-192.512-91.648-310.016-91.648z m0 603.392c-111.872 0-217.344-30.208-296.96-84.992-38.912-26.88-69.632-58.368-90.88-93.184-22.528-36.608-33.792-75.264-33.792-115.2 0-40.192 11.264-78.848 33.792-115.2 21.504-35.072 51.968-66.304 90.88-93.184C294.656 232.448 400.128 202.24 512 202.24s217.344 30.208 296.96 84.992c38.912 26.88 69.632 58.368 90.88 93.184 22.528 36.352 33.792 75.008 33.792 115.2s-11.264 78.848-33.792 115.2c-21.504 35.072-51.968 66.304-90.88 93.184-79.616 55.04-185.088 85.248-296.96 85.248z" p-id="1843" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path></svg>';
        const option = {
          // maskImage: maskImage,
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
.pages_hot_right3_box canvas {
  height: 133px!important;
  border-radius: 120px;
}
</style>