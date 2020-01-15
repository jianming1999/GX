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

      <el-button class="com_left marB10 marR10" type="primary" size="small" @click="doSearch">查询</el-button>

    </div>
    <div class="com_more_pop_body_box clearfix">
      <div id="popHotRight3_1" class="popHotRight3_box"></div>
      <div id="popHotRight3_2" class="popHotRight3_box"></div>
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
          area: []
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
        const obj1 = {
          eId: 'popHotRight3_1',
          tooltip : {
            trigger: 'item',
            formatter: '{b}：{c} [{d}%]'
          },
          calculable : true,
          label: {
            fontSize: 11
          },
          title: {
            text: 280, // 这是总数
            textStyle: {
              color: '#fff',
              fontSize: 16
            },
            textAlign: 'center',
            left: '49%',
            top: '45%',
          },
          series : [
            {
              name:'红黄灯情况',
              type:'pie',
              radius : ['30%', '58%'],
              center : ['50%', '50%'],
              label: {
                normal: {
                  formatter: '{b|{b}}\n{c|{c}}',
                  rich: {
                    b: {
                      align: 'center'
                    },
                    c: {
                      align: 'center'
                    }
                  },
                  textStyle: {
                    fontSize: 10
                  },
                  show: true
                }
              },
              labelLine: {
                normal: {
                  length: 10,
                  length2: 10
                }
              },
              data:[
                {
                  itemStyle: {
                    color: '#dcca36'
                  },
                  value:50,
                  name:'受理黄灯'
                },
                {
                  itemStyle: {
                    color: '#f35945'
                  },
                  value:100,
                  name:'受理红灯'
                },
                {
                  itemStyle: {
                    color: '#11c0ff'
                  },
                  value:50,
                  name:'及时受理'
                }
              ]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj1, this.getMyChartList)

        const obj2 = {
          eId: 'popHotRight3_2',
          tooltip : {
            trigger: 'item',
            formatter: '{b}：{c} [{d}%]'
          },
          calculable : true,
          label: {
            fontSize: 11
          },
          title: {
            text: 180, // 这是总数
            textStyle: {
              color: '#fff',
              fontSize: 16
            },
            textAlign: 'center',
            left: '49%',
            top: '45%',
          },
          series : [
            {
              name:'红黄灯情况',
              type:'pie',
              radius : ['30%', '58%'],
              center : ['50%', '50%'],
              label: {
                normal: {
                  formatter: '{b|{b}}\n{c|{c}}',
                  rich: {
                    b: {
                      align: 'center'
                    },
                    c: {
                      align: 'center'
                    }
                  },
                  textStyle: {
                    fontSize: 10
                  },
                  show: true
                }
              },
              labelLine: {
                normal: {
                  length: 10,
                  length2: 10
                }
              },
              data:[
                {
                  itemStyle: {
                    color: '#f35945'
                  },
                  value:100,
                  name:'办结红灯',
                },
                {
                  itemStyle: {
                    color: '#11c0ff'
                  },
                  value:20,
                  name:'按期办结'
                },
                {
                  itemStyle: {
                    color: '#dcca36'
                  },
                  value:60,
                  name:'办结黄灯'
                }
              ]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj2, this.getMyChartList)
      }
    },

    beforeDestroy() {
      this.doDestroyChartList()
    }
  }
</script>
<style lang='scss' scoped>
  .popHotRight3_box {
    float: left;
    width: 50%;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    .popHotRight3_box {
      float: none;
      width: 100%;
      height: 170px;
    }
  }
</style>