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
        v-model="search.sYear"
        type="year"
        :editable="false"
        placeholder="选择开始年份">
      </el-date-picker>
      <el-date-picker
        class="com_left marB10 marR10 w140px"
        v-model="search.eYear"
        type="year"
        :editable="false"
        placeholder="选择结束年份">
      </el-date-picker>

      <el-select class="com_left marB10 marR10 w140px" v-model="search.type" placeholder="请选择信访形式" clearable>
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-button class="com_left marB10 marR10" type="primary" size="small" @click="doSearch">查询</el-button>

    </div>
    <div class="com_more_pop_body_box clearfix">
      <div id="popHotLeft3_1" class="popHotLeft3_box"></div>
      <div id="popHotLeft3_2" class="popHotLeft3_box"></div>
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
        typeOptions: [], // 信访形式
        search: this.clearSearchValue() // 搜索条件
      }
    },
    created () {
      this.areaDataList = common.getAreaData()
      this.typeOptions = [
        {value: 1, label: '信访形式1'},
        {value: 2, label: '信访形式2'},
        {value: 3, label: '信访形式3'}
      ]
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
          sYear: '',
          eYear: '',
          type: ''
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
        console.log(this.search.sYear)
        console.log(this.search.eYear)
        console.log(this.search.type)

        this.doDestroyChartList()

        // 对比图左
        const obj1 = {
          eId: 'popHotLeft3_1',
          tooltip : {
            trigger: 'item',
            formatter: "{b} {c} [{d}%]"
          },
          legend: {
            bottom: '0',
            data: ['2018重复访', '2018集体访', '2018初次访'],
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#fff'
            }
          },
          series : [
            {
              name: '年度重复集体访',
              type: 'pie',
              center: ['50%', '50%'],
              label: {
                normal: {
                  position: 'inside',
                  formatter: '{c}\n[{d}%]',
                  textStyle: {
                    fontSize: 10
                  },
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  itemStyle: {
                    color: '#fea21f'
                  },
                  name: '2018重复访',
                  value: 128
                },
                {
                  itemStyle: {
                    color: '#0666e8'
                  },
                  name: '2018集体访',
                  value: 120
                },
                {
                  itemStyle: {
                    color: '#3eb177'
                  },
                  name: '2018初次访',
                  value: 45
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj1, this.getMyChartList)

        // 对比图右
        const obj2 = {
          eId: 'popHotLeft3_2',
          tooltip : {
            trigger: 'item',
            formatter: "{b} {c} [{d}%]"
          },
          legend: {
            bottom: '0',
            data: ['2019重复访', '2019集体访', '2019初次访'],
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#fff'
            }
          },
          series : [
            {
              name: '年度重复集体访',
              type: 'pie',
              center: ['50%', '50%'],
              label: {
                normal: {
                  position: 'inside',
                  formatter: '{c}\n[{d}%]',
                  textStyle: {
                    fontSize: 10
                  },
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  itemStyle: {
                    color: '#fea21f'
                  },
                  name: '2019重复访',
                  value: 128
                },
                {
                  itemStyle: {
                    color: '#0666e8'
                  },
                  name: '2019集体访',
                  value: 120
                },
                {
                  itemStyle: {
                    color: '#3eb177'
                  },
                  name: '2019初次访',
                  value: 45
                }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
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
  .popHotLeft3_box {
    float: left;
    width: 50%;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    .popHotLeft3_box {
      float: none;
      width: 100%;
      height: 170px;
    }
  }
</style>