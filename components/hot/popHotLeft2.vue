<template>
  <div class="com_more_pop_box">
    <div class="com_more_pop_header_box clearfix">
      <div class="com_left marB10 marR10 title">统计条件:</div>

      <el-cascader
        class="com_left marB10 marR10 area"
        v-model="search.area"
        placeholder="广西壮族自治区信访局"
        :options="areaDataList"
        clearable
        filterable>
      </el-cascader>

      <el-date-picker
        class="com_left marB10 marR10"
        v-model="search.date"
        format="yyyy/MM/dd"
        value-format="yyyy/MM/dd"
        type="daterange"
        :editable="false"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>

      <el-button class="com_left marB10 marR10" type="primary" size="small" @click="doSearch">查询</el-button>

    </div>
    <div class="com_more_pop_body_box">
      <div id="popHotLeft2" class="popHotLeft2_box"></div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import common from '~/assets/js/common.js'
  import echarts from 'echarts'

  export default {
    props: {},
    data() {
      return {
        myChartList: [], // 存放渲染的地图实例,以便切换页面时进行销毁
        areaDataList: [],
        search: this.clearSearchValue() // 搜索条件
      }
    },
    created () {
      this.areaDataList = common.getAreaData()
    },
    mounted() {
      // 默认加载
      this.doSearch()
    },
    methods: {
      // 搜索参数
      clearSearchValue () {
        const obj = {
          area: [],
          date: ''
        }
        return obj
      },

      // 收集渲染的地图实例
      getMyChartList (obj) {
        this.myChartList.push(obj)
      },

      // 销毁处理方法
      doDestroyChartList () {
        this.myChartList.forEach((item) => {
          item.dispose()
      })
        this.myChartList = []
      },

      // 查询
      doSearch () {
        // 搜索参数和请求方法在这
        console.log(this.search.area)
        console.log(this.search.date)

        this.doDestroyChartList()
        const obj = {
          eId: 'popHotLeft2',
          textStyle: {
            color: '#fff'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend: {
            data:['今年信访量', '同期信访量'],
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#fff'
            },
            bottom: 0
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle:{
                color: '#3f3347',
                type: 'dotted'
              }
            }
          },
          series: [
            {
              itemStyle: {
                color: '#36a4f2'
              },
              name:'今年信访量',
              type:'bar',
              data:[2.0, 22.2, 3.3, 4.5, 60.3, 10.2, 20.3, 120.4, 23.0, 16.5, 12.0, 6.2]
            },
            {
              itemStyle: {
                color: '#f35945'
              },
              name:'同期信访量',
              type:'line',
              data:[21.0, 41.9, 71.0, 23.2, 25.6, 76.7, 99.6, 100, 32.6, 20.0, 61.4, 31.3]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      }
    },

    beforeDestroy() {
      this.doDestroyChartList()
    }
  }
</script>
<style lang='scss' scoped>
  .popHotLeft2_box {
    width: 100%;
    height: 300px;
  }
</style>