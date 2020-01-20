<template>
  <div class="com_more_pop_box">
    <div class="com_more_pop_header_box clearfix">
      <div class="com_left marB10 marR10 title">统计条件:</div>


      <el-button class="com_left marB10" :type="search.type === 'week' ? 'success' : 'primary'" size="small" @click="doSearch('week')">按周</el-button>
      <el-button class="com_left marB10" :type="search.type === 'month' ? 'success' : 'primary'" size="small" @click="doSearch('month')">按月</el-button>
      <el-button class="com_left marB10" :type="search.type === 'year' ? 'success' : 'primary'" size="small" @click="doSearch('year')">按年</el-button>

    </div>
    <div class="com_more_pop_body_box clearfix">
      <div class="wordCloud_box">
        <word-cloud
          v-if="wordCloudData.length"
          :data="wordCloudData"
          id="popHotRight2"
          @callback="doWordCloud"
        />
      </div>

      <div class="list_box">
        <h2 class="title">快速增长速度关键警示</h2>
        <div class="con">
          <dl>
            <dd :key="key" v-for="(item, key) in kwList"><span class="kw" :class="item.num > 30 ? 'hig' : ''">{{curWordCloudKey}}</span>{{item.name}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import common from '~/assets/js/common.js'
  import WordCloud from '~/components/WordCloud.vue'

  export default {
    props: {},

    components: {
      WordCloud
    },

    data() {
      return {
        wordCloudData: [], // 词云
        curWordCloudKey: '', // 当前词云关键词
        kwList: [], // 当前词云关键词对应的列表
        search: this.clearSearchValue() // 搜索条件
      }
    },
    created () {},
    mounted() {
      // 默认加载
      this.doSearch()
    },
    methods: {
      // 搜索参数
      clearSearchValue () {
        const obj = {
          type: ''
        }
        return obj
      },

      /**
       * 加载词云
       * @param type 类型
       * 按周(week)
       * 按月(month)
       * 按年(year)
       */
      doSearch (type) {
        this.search.type = type

        // 数据
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

        // 如果词云有值,即加载默认值
        if (this.wordCloudData.length) {
          this.curWordCloudKey = this.wordCloudData[0].name

          // 默认加载词云对应的列表
          this.loadList()
        }
      },

      // 词云的点击回调方法
      doWordCloud (item) {
        if (item && item.name) {
          this.curWordCloudKey = item.name
          this.loadList()
        }
      },

      // 词云对应的列表数据
      loadList () {
        this.kwList = [
          {
            name: '较上周增长了70件（50％）',
            num: 70
          },
          {
            name: '较上周增长了60件（50％）',
            num: 60
          },
          {
            name: '较上周增长了30件（50％）',
            num: 30
          },
          {
            name: '较上周增长了30件（50％）',
            num: 30
          },
          {
            name: '较上周增长了30件（50％）',
            num: 30
          },
          {
            name: '较上周增长了30件（50％）',
            num: 30
          },
          {
            name: '较上周增长了25件（50％）',
            num: 25
          },
          {
            name: '较上周增长了30件（50％）',
            num: 30
          },
          {
            name: '较上周增长了10件（50％）',
            num: 10
          }
        ]
      }
    }
  }
</script>
<style lang='scss' scoped>
  .com_more_pop_body_box {
    .wordCloud_box {
      width: 50%;
      height: 300px;
      float: left;
    }
    .list_box {
      width: 50%;
      float: left;
      .title {
        color: #4fd9fc;
        text-align: center;
        margin-bottom: 2%;
        font-size: 18px;
        font-weight: normal;
      }
      .con {
        padding: 2%;
        background: #0b317d;
        border-radius: 5px;
        font-size: 12px;
        dl {
          max-height: 280px;
          overflow: auto;
          color: #88b3d1;
          dd {
            line-height: 28px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #d5e6ff;
            font-size: 14px;
            .kw {
              color: #fff;
              margin-right:2%;
              font-weight: bold;
              &.hig {
                 color: #f00;
             }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .com_more_pop_body_box {
      .wordCloud_box,
      .list_box {
        width: 100%;
        float: none;
      }
      .wordCloud_box {
        margin-bottom: 2%;
      }
    }
  }
</style>