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
      <div id="popHotLeft1" class="popHotLeft1_box"></div>
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
          eId: 'popHotLeft1',
          legend: {
            data:['来信','来访','网信','复查复核'],
            itemWidth: 12,
            itemHeight: 12,
            textStyle: {
			fontSize:18,
              color: '#fff'
            },
            bottom: 0
          },
          series: [
            {
              name:'年度信访总量',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '35%'],
              center : ['50%', '55%'],
              label: {
                fontSize: 12,
                normal: {
                  position: 'inner'
                },
                emphasis: {
                  formatter: '{b|{b} }{c}  {per|{d}%}',
                  rich: {}
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  length: 12,
                  length2: 12
                }
              },
              data:[
              ]
            },
            {
              name:'年度信访总量',
              type:'pie',
              radius: ['45%', '60%'],
              center : ['50%', '55%'],
              label: {
                normal: {
                  formatter: '{b|{b}}\n{c|{c}}\n[{per|{d}%}]',
                  rich: {
                    b: {
                      align: 'center'
                    },
                    c: {
                      align: 'center'
                    },
                    per: {
                      align: 'center'
                    }
                  }
                }
              },
              labelLine: {
                normal: {
                  length: 12,
                  length2: 12
                }
              },
              data:[	
			
                {
                  itemStyle: {
                    color: '#1886ff',
				
                  },
                  value:113,
                  name:'复查复核'
                },
                {
                  itemStyle: {
                    color: '#f35945'
                  },
                  value:165,
                  name:'来信'
                },
                {
                  itemStyle: {
                    color: '#11c0ff'
                  },
                  value:113,
                  name:'来访'
                },
                {
                  itemStyle: {
                    color: '#dcca36'
                  },
				  textStyle:18,
                  value:105,
                  name:'网信'
                }
              ]
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
  .popHotLeft1_box {
    width: 100%;
    height: 500px;
  }
</style>