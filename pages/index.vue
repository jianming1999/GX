<template>
  <div class="pages_hot_box">
    <div class="pages_hot_visit_box">
      <span class="t_l">&nbsp;</span><!--
      --><span class="t_c"><i class="tit">年度信访量</i><i :class="item === ',' ? 't' : 'n'" :key="key" v-for="(item, key) in formatNumber(visitNum)">{{item}}</i></span><!--
      --><span class="t_r">&nbsp;
        <em class="n">{{visitPer}}<i class="u">%</i><i class="t">同比上升</i></em>
      </span>
    </div>

    <div id="globalMap" class="pages_hot_map_box"></div>

    <div class="pages_hot_pop_box pages_hot_left_box pages_hot_left1_box">
      <div class="tit_box">
        <span class="t_l dot"></span><i class="t_c">年度信访总量</i><span class="com_more" @click="doShowMore('hotLeft1', '年度信访总量')">更多</span><span class="t_r"></span>
      </div>
      <div class="con_box">
        
        <div id="hotLeft1" @dblclick="doShowMore('hotLeft1', '年度信访总量')" class="show_map"></div>
      </div>
    </div>
    <div class="pages_hot_pop_box pages_hot_left_box pages_hot_left2_box">
      <div class="tit_box">
        <span class="t_l dot"></span><i class="t_c">年度信访量同比</i><span class="com_more" @click="doShowMore('hotLeft2', '年度信访量同比')">更多</span><span class="t_r"></span>
      </div>
      <div class="con_box">
        <div id="hotLeft2" @dblclick="doShowMore('hotLeft2', '年度信访量同比')" class="show_map"></div>
      </div>
    </div>
    <div class="pages_hot_pop_box pages_hot_left_box pages_hot_left3_box">
      <div class="tit_box">
        <span class="t_l dot"></span><i class="t_c">全区接入单位人员占比</i><span class="com_more" @click="doShowMore('hotLeft3', '全区接入单位人员占比')">更多</span><span class="t_r"></span>
      </div>
      <div class="con_box">
        <div id="hotLeft3" @dblclick="doShowMore('hotLeft3', '全区接入单位人员占比')" class="show_map"></div>
      </div>
    </div>

    <div class="pages_hot_pop_box pages_hot_right_box pages_hot_right1_box">
      <div class="tit_box">
        <span class="t_l dot"></span><i class="t_c">今日信访</i><span class="com_more" >全区录入：188件</span><span class="t_r"></span>
      </div>
      <div class="con_box">
        <div id="hotRight1" class="show_map"></div>
      </div>
    </div>

    <div class="pages_hot_pop_box pages_hot_right_box pages_hot_right2_box">
      <div class="tit_box">
        <span class="t_l dot"></span><i class="t_c">红黄灯情况</i><span class="com_more" @click="doShowMore('visitList', '年度信访总量-来访')">更多</span><span class="t_r"></span>
      </div>
      <div class="con_box clearfix" @dblclick="doShowMore('年度信访总量-来访')" @click="doShowMore('visitList', '年度信访总量-来访')">
        <div id="hotRight3" class="show_map"></div>
        <!-- <PopHotRight3></PopHotRight3> -->
        <!--
        <div id="hotRight3_1" class="show_map"></div>
        <div id="hotRight3_2" class="show_map"></div>
        -->
      </div>
    </div>

    <div class="pages_hot_pop_box pages_hot_right_box pages_hot_right3_box">
      <div class="tit_box">
        <span class="t_l dot"></span><i class="t_c">热点词云</i><span class="com_more" @click="doShowMore('hotRight2', '热点词云')">更多</span><span class="t_r"></span>
      </div>
      <div class="con_box">
        
        <word-cloud
          @callback="wordClick"
          v-if="wordCloudData.length"
          :data="wordCloudData"
          className="indexWordClass"
          id="hotRight2"
        />
      </div>
    </div>
    

    <div class="pages_hot_pop_box pages_hot_bottom_box pages_hot_bottom1_boxx">
      <div class="tit_box">
        <span class="t_l dot"></span><i class="t_c">考核四率统计</i><span class="com_more" @click="doShowMore('hotBottom1', '考核四率统计')">更多</span><span class="t_r"></span>
      </div>
      <div class="con_box clearfix">
        
        <div id="hotBottom1_1" @click="doShowMore('hotBottom1', '考核四率统计')" @dblclick="doShowMore('hotBottom1', '考核四率统计')" class="show_map"></div>
        <div id="hotBottom1_2" @click="doShowMore('hotBottom1', '考核四率统计')" @dblclick="doShowMore('hotBottom1', '考核四率统计')" class="show_map"></div>
        <div id="hotBottom1_3" @click="doShowMore('hotBottom1', '考核四率统计')" @dblclick="doShowMore('hotBottom1', '考核四率统计')" class="show_map"></div>
        <div id="hotBottom1_4" @click="doShowMore('hotBottom1','考核四率统计')" @dblclick="doShowMore('hotBottom1', '考核四率统计')" class="show_map"></div>
      </div>
    </div>
    <!-- :width="dialogWidth" -->
    <el-dialog
      :fullscreen="true"      
      :append-to-body="true"
      :close-on-click-modal="false"
      :before-close="moreBeforeClose"
      :visible.sync="more.visible">
      <Header slot="beforeHeader"></Header>
      <div slot="title" class="el-dialog__title">        
        <i class="dot"></i>{{more.title}}

        <el-button v-if="more.type === 'visitList'" class="com_right marR30" type="primary" size="small">下载</el-button>
        <template v-if="more.type === 'comList'">
          <el-button class="com_right marR30" type="primary" size="small" @click="doSearch">查询</el-button>
          <el-select class="com_right marR10 w140px" v-model="search.type" placeholder="信访单位" clearable>
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          
        </template>
      </div>

      <div>
        <PopHotLeft1 v-if="more.type === 'hotLeft1'"></PopHotLeft1>
        <PopHotLeft2 v-if="more.type === 'hotLeft2'"></PopHotLeft2>
        <PopHotLeft3 v-if="more.type === 'hotLeft3'"></PopHotLeft3>
        <PopHotRight1 v-if="more.type === 'hotRight1'"></PopHotRight1>
        <PopHotRight2 v-if="more.type === 'hotRight2'"></PopHotRight2>
        <!-- <PopHotRight3 v-if="more.type === 'hotRight3'"></PopHotRight3> -->
        <PopHotBottom1 v-if="more.type === 'hotBottom1'"></PopHotBottom1>
        <PopHotWordDetail v-if="more.type === 'hotWordDetail'" @doWordCloud="doWordCloud"></PopHotWordDetail>
        <PopVisitList v-if="more.type === 'visitList'"  @visitItemClick="visitItemClick"></PopVisitList>
        <PopVisitDetail v-if="more.type === 'visitDetail'"></PopVisitDetail>
        <PopComList v-if="more.type === 'comList'" @accountEvent="accountEvent"></PopComList>
        <PopAccountList v-if="more.type === 'accountList'" @daibanEvent="daibanEvent"></PopAccountList>
      </div>
    </el-dialog>
  </div>


</template>

<script>
  import $ from 'jquery'
  import apiPath from '~/assets/js/api.js'
  import common from '~/assets/js/common.js'
  import redYellowLight from '~/assets/js/redYellowLight.js'
  import { Loading } from 'element-ui'
  import echarts from 'echarts'
  import WordCloud from '~/components/WordCloud.vue'
  import PopHotLeft1 from '~/components/hot/popHotLeft1.vue'
  import PopHotLeft2 from '~/components/hot/popHotLeft2.vue'
  import PopHotLeft3 from '~/components/hot/popHotLeft3.vue'
  import PopHotRight1 from '~/components/hot/popHotRight1.vue'
  import PopHotRight2 from '~/components/hot/popHotRight2.vue'
  // import PopHotRight3 from '~/components/hot/popHotRight3.vue'
  import PopHotBottom1 from '~/components/hot/popHotBottom1.vue'
  import PopHotWordDetail from '~/components/hot/popHotWordDetail.vue'
  import PopAccountList from '~/components/hot/popAccountList.vue'
  import PopComList from '~/components/hot/popComList.vue'
  import PopVisitList from '~/components/hot/popVisitList.vue'
  import PopVisitDetail from '~/components/hot/PopVisitDetail.vue'
  import Header from '~/components/Header.vue'

  export default {
    components: {
      WordCloud,
      PopHotLeft1,
      PopHotLeft2,
      PopHotLeft3,
      PopHotRight1,
      PopHotRight2,
      // PopHotRight3,
      PopHotBottom1,
      PopHotWordDetail,
      Header,
      PopAccountList,
      PopComList,
      PopVisitList,
      PopVisitDetail
    },

    data () {
      return {
        // accountList弹出层-信访形式
        typeOptions: [
          {value: 1, label: '直属单位'}
        ],
        // accountList弹出层
        search: this.clearSearchValue(), // 搜索条件
        visitNum: '00000000', // 年度信访量
        visitPer: 0, // 年度信访量 - 同比上升
        globalObj: null, // 地图对象
        mapRoam: false, // 主地图是否缩放、移动
        mapZoom: 0.7, // 主地图对象缩放,大于768的屏默认值
        mapTop: '-2.15%', // 主地图与上面的距离,大于768的屏默认值
        globalOption: '',
        curMapName: 'Guangxi', // 当前地图名称
        curCountryName: '', // 当前国家名
        wordCloudData: [], // 词云
        radiusRight3: ['30%', '58%'], // 控制右3的饼图大小
        more: this.clearMoreValue(),
        myChartList: [], // 存放渲染的地图实例,以便切换页面时进行销毁
        dialogWidth: '70%'
      }
    },

    created () {
      this.$store.dispatch('getItemBase', {curTitle: this.headOptions.tit})
    },
    mounted () {
      // 处理地图高度
      const getMapH = $('.wrap').width()
      if (getMapH <= 768) {
        $('.pages_hot_map_box').height(getMapH)
        this.mapZoom = 1
        this.mapTop = '5%'
        this.mapRoam = false
        this.dialogWidth = '90%'
        this.radiusRight3 = ['40%', '55%']
      } else if (getMapH <= 1024) {
        this.dialogWidth = '80%'
      }
      this.loadGlobalMap(this.curMapName) // 主地图
      this.mapInit() // 加载主地图对应的数据
      this.loadRight2() // 加载词云
    },

    // 方法集合
    methods: {
      // 点击词云详情中的词-回调
      doWordCloud (row) {
        this.doShowMore('visitList', '年度信访总量-来访', row);
      },
      // 点击账号列表中的-待办数量-回调
      visitItemClick (row) {
        this.doShowMore('visitDetail', '信访详情', row);
      },
      // 点击账号列表中的-待办数量-回调
      daibanEvent (row) {
        this.doShowMore('visitList', '年度信访总量-来访', row);
      },
      // 点击自治区接入单位中的-账号数字-回调
      accountEvent (row) {
        this.doShowMore('accountList', '账号列表[ 南宁市信访局 ]', row);
      },
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
      doSearch() {},
      // 词云item - click
      wordClick (word) {
        // this.doShowMore('hotWordDetail', '热点词云', {word: word});
        this.doShowMore('visitList', '热点词云', {word: word});
      },
      // 地图对应加载的数据
      mapInit () {
        this.loadLeft1() // 加载年度信访总量
        this.loadLeft2() // 加载年度信访量同比
        this.loadLeft3() // 加载年度重复集体访
        this.loadRight1() // 加载今日信访
        this.loadRight3() // 加载红黄灯情况
        this.loadBottom1() // 加载考核四率统计
      },

      /**
       * 主地图
       * mapName 地图名称
       *
       * */
      loadGlobalMap (mapName) {
        const mapContanier = document.getElementById('globalMap')
        var geo = {
          map: mapName, // 名称
          top: this.mapTop, // 地图与顶部距离
          roam: this.mapRoam, // scale、move
          scaleLimint: {min: 0.5, max: 3},
          zoom: this.mapZoom,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#ffffff'
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#fffefe'
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#0f3b71',
              borderColor: '#6aaae4'
            },
            emphasis: {
              areaColor: '#3a678f',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderColor: '#5892c5',
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          // 标志当前
          regions: [{
            name: this.curCountryName,
            selected: true,
            label: {
              normal: {
                show: true,
                textStyle: {color: '#33bf64'}
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#5b6895',
                borderColor: 'rgba(0, 0, 0, 0.5)',
                opacity: 1
              }
            }
          }, {
            name: '',
            selected: false,
            label: {
              normal: {
                show: true,
                textStyle: {color: '#33bf64'}
              }
            }
          }]
        }
        var series = []

        $.getJSON('/gx/json/Guangxi.json', (mapData) => {
          echarts.registerMap(mapName, mapData)
          this.globalObj = echarts.init(mapContanier)

          this.globalOption = {
            tooltip: {
              trigger: 'item'
            },
            geo: geo,
            series: series
          }
          this.globalObj.setOption(this.globalOption)

          // 当浏览器大小变化时
          $(window).resize(() => {
            this.globalObj && this.globalObj.resize()
          })

          // 点击选择地图时
          this.globalObj.on('click', (params) => {
            if (params.name !== '' && params.componentType === 'geo') {
              this.curCountryName = params.name
              this.globalOption.geo.regions[0].name = this.curCountryName
              // 设置地图参数
              this.globalObj.setOption(this.globalOption)
              // 销毁操作
              this.doDestroyChartList()
              // 加载对应的数据
              this.mapInit()
            }
          })
        })
      },

      // 年度信访总量
      loadLeft1 () {
        const obj = {
          eId: 'hotLeft1',
          // legend: {
          //   orient: 'vertical',
          //   left: 'left',
          //   top: 'center',
          //   data:['来信','来访','网信','复查复核'],
          //   itemWidth: 10,
          //   itemHeight: 10,
          //   textStyle: {
          //     color: '#fff'
          //   }
          // },
          legend: {
            orient: 'vertical',
            top: 'center',
            right: '3%',
            data:['来信','来访','网信','复查复核'],
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#fff'
            }
          },
          series: [
            {
              name:'年度信访总量',
              type:'pie',
              radius: ['45%', '60%'],
              center : ['40%', '50%'],
              label: {
                normal: {
                  formatter: '{b|{b} }\n{c|{c}}\n[{per|{d}%}]',
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
                  length: 10,
                  length2: 10
                }
              },
              data:[
                {
                  itemStyle: {
                    color: '#1886ff'
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
                  value:105,
                  name:'网信'
                }
              ]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)

        // 年度信访量
        this.visitNum = '00089654'

        // 年度信访量 - 同比上升
        this.visitPer = 11
      },

      // 格式化年度访问量数据
      formatNumber (val) {
        return common.formatNumber(val)
      },

      // 收集渲染的地图实例
      getMyChartList (obj) {
        let self = this;
        obj.on('click', (params) => {
          console.log('params:');
          console.log(params);
          if(params.seriesName === '考核四率统计'){
            return;
          }else if(params.seriesName === '全区接入单位人员占比'){
            self.doShowMore('comList', '自治区接入单位-地市信访局', params);
          }else{
            self.doShowMore('visitList', '年度信访总量-来访', params);  
          }
          
          
        });
        this.myChartList.push(obj)
      },

      // 销毁处理方法
      doDestroyChartList () {
        this.myChartList.forEach((item) => {
          item.dispose()
        })
        this.myChartList = []
      },

      // 年度信访量同比
      loadLeft2 () {
        const obj = {
          eId: 'hotLeft2',
          grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            top: '30',
            containLabel: true
          },
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
            }
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
      },

      // 年度重复集体访
      loadLeft3 () {
        const obj = {
          eId: 'hotLeft3',
          tooltip : {
            trigger: 'item',
            formatter: "{b} {c} [{d}%]"
          },
          legend: {
            // type: 'scroll',
            // orient: 'vertical',
            right: '3%',
            top: 'center',
            left: '50%',
            data: ['区直单位[202/268]', '地市信访[14/300]', '市直单位[1305/1591]', '县区信访[117/707]', '县直单位[5567/5995]', '县以下单位[5567/5995]'],
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#fff'
            }
          },
          series : [
            {
              name: '全区接入单位人员占比',
              type: 'pie',
              center: ['25%', '50%'],
              label: {
                normal: {
                  position: 'inside',
                  formatter: '{d}%', //${c} \n[{d}%]
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
                  name: '区直单位[202/268]',
                  value: 128
                },
                {
                  itemStyle: {
                    color: '#0666e8'
                  },
                  name: '地市信访[14/300]',
                  value: 120
                },
                {
                  itemStyle: {
                    color: '#3eb177'
                  },
                  name: '市直单位[1305/1591]',
                  value: 45
                },{
                  itemStyle: {
                    color: '#3ecc77'
                  },
                  name: '县区信访[117/707]',
                  value: 45
                },{
                  itemStyle: {
                    color: '#ccb177'
                  },
                  name: '县直单位[5567/5995]',
                  value: 45
                },{
                  itemStyle: {
                    color: '#3eff77'
                  },
                  name: '县以下单位[5567/5995]',
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
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 今日信访
      loadRight1 () {
        const obj = {
          eId: 'hotRight1',
          textStyle: {
            color: '#fff'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            top: '5%',
            left: '60',
            right: '4%',
            bottom: '5%'
          },
          xAxis: {
            type : 'value',
            nameGap: 100,
            boundaryGap: false,
            axisLine: {show: false},
            axisLabel: {show: false},
            splitLine: {show: false},
            axisTick: {show: false,alignWithLabel: true}
          },
          yAxis: {
            type: 'category',
            data: ['来信总量','来访总量','网信总量','复查复核','督查督办','国家转交']
          },
          series: [
            {
              name: '来信总量',
              type: 'bar',
              barMaxWidth: '10',
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{c}',
                  textStyle: {
                    fontSize: 10,
                    color: '#fff'
                  }
                }
              },
              data: [
                {
                  value:3260,
                  itemStyle:{
                    normal:{
                      color: '#d8ef5f'
                    }
                  }
                },
                {
                  value:1060,
                  itemStyle:{
                    normal:{
                      color: '#55c5f4'
                    }
                  }
                },
                {
                  value:2200,
                  itemStyle:{
                    normal:{
                      color: '#edb930'
                    }
                  }
                },
                {
                  value:1260,
                  itemStyle:{
                    normal:{
                      color: '#4248cd'
                    }
                  }
                },
                {
                  value:3060,
                  itemStyle:{
                    normal:{
                      color: '#2779bd'
                    }
                  }
                },
                {
                  value:2160,
                  itemStyle:{
                    normal:{
                      color: '#d452d6'
                    }
                  }
                }
              ]
            }
          ]
        }
        // 渲染地图
        common.loadColumnMap(obj, this.getMyChartList)
      },

      // 词云
      loadRight2 () {
        this.wordCloudData = [
          {
            name: "十九大精神",
            value: 15000
          },
          {
            name: "两学一做",
            value: 10081
          },
          {
            name: "中华民族",
            value: 9386
          },
          {
            name: "马克思主义",
            value: 7500
          },
          {
            name: "民族复兴",
            value: 7500
          },
          {
            name: "社会主义制度",
            value: 6500
          },
          {
            name: "国防白皮书",
            value: 6500
          },
          {
            name: "创新",
            value: 6000
          },
          {
            name: "民主革命",
            value: 4500
          },
          {
            name: "文化强国",
            value: 3800
          },
          {
            name: "国家主权",
            value: 3000
          },
          {
            name: "武装颠覆",
            value: 2500
          },
          {
            name: "领土完整",
            value: 2300
          },
          {
            name: "安全",
            value: 2000
          },
          {
            name: "从严治党",
            value: 1900
          },
          {
            name: "现代化经济体系",
            value: 1800
          },
          {
            name: "国防动员",
            value: 1700
          },
          {
            name: "信息化战争",
            value: 1600
          },
          {
            name: "局部战争",
            value: 1500
          },
          {
            name: "教育",
            value: 1200
          },
          {
            name: "职业教育",
            value: 1100
          },
          {
            name: "兵法",
            value: 900
          },
          {
            name: "一国两制",
            value: 800
          },
          {
            name: "特色社会主义思想",
            value: 700
          }
        ]
      },

      // 红黄灯情况
      loadRight3 () {
        redYellowLight.init({
          eId: 'hotRight3',
          // 今日过期
          toDayTimout: 11,
          // 受理黄灯 
          acceptYellow: 222,
          // 办结黄灯
          completeYellow: 3,
          // 受理红灯
          acceptHot: 4,
          // 办结红灯
          completeHot: 5
        })
      },

      // 考核四率统计
      loadBottom1 () {
        // 考核四率统计 - 信访受理率
        const obj1 = {
          eId: 'hotBottom1_1',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '考核四率统计',
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
        common.loadColumnMap(obj1, this.getMyChartList)


        // 考核四率统计 - 按期办结率
        const obj2 = {
          eId: 'hotBottom1_2',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '考核四率统计',
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
        common.loadColumnMap(obj2, this.getMyChartList)


        // 考核四率统计 - 信访满意率
        const obj3 = {
          eId: 'hotBottom1_3',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '考核四率统计',
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
        common.loadColumnMap(obj3, this.getMyChartList)


        // 考核四率统计 - 信访参评率
        const obj4 = {
          eId: 'hotBottom1_4',
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: '考核四率统计',
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
        common.loadColumnMap(obj4, this.getMyChartList)
      },
      doShowMore (type, tit, params) {
        this.more.visible = true
        this.more.type = type
        this.more.title = tit
        this.more.params = params
      },
      // 点击more弹框
      // doShowMore (type, params) {
      //   // this.more.visible = true
      //   // this.more.type = type
      //   // this.more.title = tit
      //   this.$router.push({path: `/${type}`, params: params});
      // },

      // more弹框对象
      clearMoreValue () {
        const obj = {
          visible: false,
          type: '',
          title: ''
        }
        return obj
      },
      // more弹框关闭前
      moreBeforeClose () {
        this.more = this.clearMoreValue()
      }
    },

    async asyncData ({ app }) {
      const headOptions = {
        tit: '热点模型',
        kw: '热点模型KW',
        desc: '热点模型Desc'
      }
      return {headOptions: headOptions}
    },

    head() {
      return this.$seo(this.headOptions)
    },

    // 页面退出时处理
    beforeDestroy () {
      // 释放主地图的内存
      if (!this.globalObj) {
        return
      }
      this.globalObj.dispose()
      this.globalObj = null
      this.doDestroyChartList()
    },

    filters: {}
  }
</script>

<style lang="scss" scoped>
  .pages_hot_box {
    overflow: hidden;
    position: fixed;
    top: calc(2% + 81px);
    left: 0;
    height: calc(96% - 81px);
    width: 98%;
    margin: 0 1%;
    overflow: hidden;
  }
  .pages_hot_map_box {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .pages_hot_visit_box {
    width: 100%;
    position: absolute;
    z-index: 2;
    white-space: nowrap;
    text-align: center;
    color: #4fd9fc;
    font-size: 20px;
    line-height: 60px;
    .t_l, .t_r {
      height: 60px;
      display: inline-block;
    }
    .t_l {
      width: 50px;
      background: url('/gx/img/hot/visit_l.png') no-repeat;
      background-size: auto 60px;
    }
    .t_r {
      text-align: left;
      padding-left: 20px;
      width: 134px;
      position: relative;
      background: url(/gx/img/hot/visit_r.png) no-repeat right 0;
      background-size: auto 60px;
      .n {
        position: absolute;
        top: 27%;
        line-height: 14px;
        font-size: 23px;
        .u {
          font-size: 12px;
        }
      }
      .t {
        top: 100%;
        left: 0;
        position: absolute;
        line-height: 20px;
        font-size: 12px;
      }
    }
    .t_c {
      height: 60px;
      display: inline-block;
      background: url('/gx/img/hot/visit_c.png') repeat-x;
      background-size: auto 60px;
      .tit {
        font-weight: bold;
        padding-right: 10px;
      }
      .n, .t {
        font-weight: bold;
        color: #ee4b4a;
        font-family: Arial;
        margin: 0 2px;
      }
      .n {
        background: rgba(0,0,0,.3);
        padding: 0 4px;
      }
    }
  }
  .pages_hot_pop_box {
    position: absolute;
    z-index: 4;
    .tit_box {
      background:#0f3b71;
      white-space: nowrap;           
      color: #4fd9fc;
      font-size: 14px;
      padding:0 6px;

       .com_more {
        position: absolute;        
        right: 6px;       
        color: #6a92ef;
        z-index:5;
        font-size:9px;        
        cursor:pointer;
        line-height: 24px;
      }
      .t_l, .t_r {
        width: 54px;
        height: 7px;
        display: inline-block;
      }
    
      .t_c {
        margin: 0 5px;
      }
      .dot{width:8px;height:8px;background:#0569af;margin:0 6px 3px;vertical-align: middle;display: inline-block;}
    }
    .con_box {
      overflow: hidden;
      position: relative;
      height: calc(98% - 26px);
      background:#130049;
      padding: 1%;
      box-shadow: 0px 0px 5px #0e607f inset;
      border-radius: 2px;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      
      
      .show_map {
        width: 100%;
        height: 100%;
      }
      &:hover {
       box-shadow: 0px 0px 5px #00faff inset;
      }
    }
  }
  .pages_hot_bottom1_boxx {
    .con_box {
      .show_map {
        float:left;
        width: 25%;
        height: 100%;
      }
    }
  }
  .pages_hot_left_box,
  .pages_hot_right_box{
    top: 0;
    width: calc((98% / 4);
    height: calc(98% / 3 + 1%);
  }
  .pages_hot_left2_box,
  .pages_hot_right2_box{
    top: calc(98% / 3 + 2%);
  }
  .pages_hot_right2_box {
    .con_box {
      padding-top: 0px;
    }
  }
  .pages_hot_left3_box,
  .pages_hot_right3_box{
    top: auto;
    height: calc(98% / 3 - 2%);
    bottom: 0;
  }
  .pages_hot_left_box {
    left: 0;
  }
  .pages_hot_right_box {
    right: 0;
  }

  .pages_hot_right3_box {
    .con_box {
      .show_map {
        float:left;
        width: 50%;
        height: 100%;
      }
    }
  }

  .pages_hot_bottom_box {
    width: calc(98% / 2);
    height: calc(98% / 3 - 2%);
    left: calc(98% / 4 + 1%);
    bottom: 3px;
    .con_box {
      height: calc(98% - 26px);
      padding: 0.5%;
    }
  }

  @media screen and (max-width: 1024px) {}

  @media screen and (max-width: 768px) {
    .pages_hot_box {
      position: relative;
      height: auto;
      top: auto;
      width: 100%;
      overflow: visible;
      left: auto;
      margin: 0;
    }
    .pages_hot_map_box {
      position: relative;
      right: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 320px;
    }
    .pages_hot_visit_box {
      position: relative;
      .t_l {
        display: none;
      }
      .t_r {
        display: none;
        height: auto;
        background: none;
        width: auto;
      }
      .t_c {
        height: auto;
        background: none;
        .tit {
          font-size: 14px;
        }
      }
    }
    .pages_hot_pop_box {
      position: relative;
      width: 100%;
      height: 320px;
      margin-bottom: 3%;
      left: 0;
    }
    .pages_hot_right3_box {
      height: auto;
      .con_box {
        .show_map {
          width: 100%;
          height: 320px;
          margin: -5% 0;
        }
      }
    }
    .pages_hot_bottom1_boxx {
      height: auto;
      .con_box {
        .show_map {
          width: 50%;
          height: 170px;
        }
      }
    }
  }
</style>
