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
        class="com_left marB10 marR10 w140px"
        v-model="search.year"
        format="yyyy"
        value-format="yyyy"
        type="year"
        :editable="false"
        placeholder="选择年">
      </el-date-picker>

      <el-button class="com_left marB10 marR10" type="primary" size="small" @click="doSearch">查询</el-button>

    </div>
    <div class="com_more_pop_body_box clearfix">
      <div id="PopHotBottom1_1" @click="visitListEvent('信访受理率')" class="popHotBottom1_box"></div>
      <div id="PopHotBottom1_2" @click="visitListEvent('按期办结率')" class="popHotBottom1_box"></div>
      <div id="PopHotBottom1_3" @click="visitListEvent('信访满意率')" class="popHotBottom1_box"></div>
      <div id="PopHotBottom1_4" @click="visitListEvent('信访参评率')" class="popHotBottom1_box"></div>
      <div id="PopHotBottom1_5" @click="visitListEvent('责任授理率')" class="popHotBottom1_box"></div>
      <div id="PopHotBottom1_6" class="popHotBottom1_box"></div>
      <div id="PopHotBottom1_7" @click="visitListEvent('责任满意率')" class="popHotBottom1_box"></div>
      <div id="PopHotBottom1_8" @click="visitListEvent('责任评选率')" class="popHotBottom1_box"></div>
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
      // 图标点击
      visitListEvent(title) {
         this.$emit('visitListEvent', {}, title);
      },
      // 搜索参数
      clearSearchValue () {
        const obj = {
          area: [],
          year: ''
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
        this.doDestroyChartList()
        this.loadBottom1_1()
        this.loadBottom1_2()
        this.loadBottom1_3()
        this.loadBottom1_4()
        this.loadBottom1_5()
        this.loadBottom1_6()
        this.loadBottom1_7()
        this.loadBottom1_8()
      },

      // 信访授理率
      loadBottom1_1 () {
        const obj = {
          eId: 'PopHotBottom1_1',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '85%',
              axisLine: {
                lineStyle: {//仪表盘轴线相关配置。
                  width:15,
                  color: [[0.2, '#09af1c'], [0.8, '#2b7bd3'], [1, '#ff4500']]
                }
              },
              splitLine: {// 分隔线样式相关
                length: 20 // 分割线的长度
              },
              axisLabel: {//大刻度标签。
                textStyle: {//数字刻度样式
                  fontSize: 7
                }
              },
              pointer: {
                width: 3
              },
              title: {
                color: '#fff',
                fontSize : 12,
                offsetCenter: [0, '90%']
              },
              detail: {
                formatter : '{value}',
                textStyle : {
                  fontSize : 20,
                }
              },
              data: [
                {
                  value: 20,
                  name: '信访受理率'
                }
              ]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 按期办结率
      loadBottom1_2 () {
        const obj = {
          eId: 'PopHotBottom1_2',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '85%',
              axisLine: {
                lineStyle: {//仪表盘轴线相关配置。
                  width:15,
                  color: [[0.2, '#09af1c'], [0.8, '#2b7bd3'], [1, '#ff4500']]
                }
              },
              splitLine: {// 分隔线样式相关
                length: 20 // 分割线的长度
              },
              axisLabel: {//大刻度标签。
                textStyle: {//数字刻度样式
                  fontSize: 7
                }
              },
              pointer: {
                width: 3
              },
              title: {
                color: '#fff',
                fontSize : 12,
                offsetCenter: [0, '90%']
              },
              detail: {
                formatter : '{value}',
                textStyle : {
                  fontSize : 20,
                }
              },
              data: [{value: 50, name: '按期办结率'}]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 信访满意率
      loadBottom1_3 () {
        const obj = {
          eId: 'PopHotBottom1_3',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '85%',
              axisLine: {
                lineStyle: {//仪表盘轴线相关配置。
                  width:15,
                  color: [[0.2, '#09af1c'], [0.8, '#2b7bd3'], [1, '#ff4500']]
                }
              },
              splitLine: {// 分隔线样式相关
                length: 20 // 分割线的长度
              },
              axisLabel: {//大刻度标签。
                textStyle: {//数字刻度样式
                  fontSize: 7
                }
              },
              title: {
                color: '#fff',
                fontSize : 12,
                offsetCenter: [0, '90%']
              },
              pointer: {
                width: 3
              },
              detail: {
                formatter : '{value}',
                textStyle : {
                  fontSize : 20,
                }
              },
              data: [{value: 60, name: '信访满意率'}]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 信访参评率
      loadBottom1_4 () {
        const obj = {
          eId: 'PopHotBottom1_4',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '85%',
              axisLine: {
                lineStyle: {//仪表盘轴线相关配置。
                  width: 15,
                  color: [[0.2, '#09af1c'], [0.8, '#2b7bd3'], [1, '#ff4500']]
                }
              },
              splitLine: {// 分隔线样式相关
                length: 20 // 分割线的长度
              },
              axisLabel: {//大刻度标签。
                textStyle: {//数字刻度样式
                  fontSize: 7
                }
              },
              title: {
                color: '#fff',
                fontSize : 12,
                offsetCenter: [0, '90%']
              },
              pointer: {
                width: 3
              },
              detail: {
                formatter : '{value}',
                textStyle : {
                  fontSize : 20
                }
              },
              data: [{value: 90, name: '信访参评率'}]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 责任授理率
      loadBottom1_5 () {
        const obj = {
          eId: 'PopHotBottom1_5',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '85%',
              axisLine: {
                lineStyle: {//仪表盘轴线相关配置。
                  width:15,
                  color: [[0.2, '#09af1c'], [0.8, '#2b7bd3'], [1, '#ff4500']]
                }
              },
              splitLine: {// 分隔线样式相关
                length: 20 // 分割线的长度
              },
              axisLabel: {//大刻度标签。
                textStyle: {//数字刻度样式
                  fontSize: 7
                }
              },
              pointer: {
                width: 3
              },
              title: {
                color: '#fff',
                fontSize : 12,
                offsetCenter: [0, '90%']
              },
              detail: {
                formatter : '{value}',
                textStyle : {
                  fontSize : 20,
                }
              },
              data: [
                {
                  value: 20,
                  name: '责任授理率'
                }
              ]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 网信占比率
      loadBottom1_6 () {
        const obj = {
          eId: 'PopHotBottom1_6',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '85%',
              axisLine: {
                lineStyle: {//仪表盘轴线相关配置。
                  width:15,
                  color: [[0.2, '#09af1c'], [0.8, '#2b7bd3'], [1, '#ff4500']]
                }
              },
              splitLine: {// 分隔线样式相关
                length: 20 // 分割线的长度
              },
              axisLabel: {//大刻度标签。
                textStyle: {//数字刻度样式
                  fontSize: 7
                }
              },
              pointer: {
                width: 3
              },
              title: {
                color: '#fff',
                fontSize : 12,
                offsetCenter: [0, '90%']
              },
              detail: {
                formatter : '{value}',
                textStyle : {
                  fontSize : 20,
                }
              },
              data: [{value: 50, name: '网信占比率'}]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 责任满意率
      loadBottom1_7 () {
        const obj = {
          eId: 'PopHotBottom1_7',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '85%',
              axisLine: {
                lineStyle: {//仪表盘轴线相关配置。
                  width:15,
                  color: [[0.2, '#09af1c'], [0.8, '#2b7bd3'], [1, '#ff4500']]
                }
              },
              splitLine: {// 分隔线样式相关
                length: 20 // 分割线的长度
              },
              axisLabel: {//大刻度标签。
                textStyle: {//数字刻度样式
                  fontSize: 7
                }
              },
              title: {
                color: '#fff',
                fontSize : 12,
                offsetCenter: [0, '90%']
              },
              pointer: {
                width: 3
              },
              detail: {
                formatter : '{value}',
                textStyle : {
                  fontSize : 20,
                }
              },
              data: [{value: 60, name: '责任满意率'}]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 责任评选率
      loadBottom1_8 () {
        const obj = {
          eId: 'PopHotBottom1_8',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '',
              type: 'gauge',
              radius: '85%',
              axisLine: {
                lineStyle: {//仪表盘轴线相关配置。
                  width: 15,
                  color: [[0.2, '#09af1c'], [0.8, '#2b7bd3'], [1, '#ff4500']]
                }
              },
              splitLine: {// 分隔线样式相关
                length: 20 // 分割线的长度
              },
              axisLabel: {//大刻度标签。
                textStyle: {//数字刻度样式
                  fontSize: 7
                }
              },
              title: {
                color: '#fff',
                fontSize : 12,
                offsetCenter: [0, '90%']
              },
              pointer: {
                width: 3
              },
              detail: {
                formatter : '{value}',
                textStyle : {
                  fontSize : 20
                }
              },
              data: [{value: 90, name: '责任评选率'}]
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
  .popHotBottom1_box {
    float: left;
    width: 25%;
    height: 200px;
  }
  @media screen and (max-width: 768px) {
    .popHotBottom1_box {
      width: 50%;
      height: 170px;
    }
  }
</style>