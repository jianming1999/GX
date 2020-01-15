<template>
  <div class="com_more_pop_box">
    <div class="com_more_pop_header_box clearfix">
      <div class="com_left marR10 title"><i class="dot"></i>年度信访总量-来访</div>

      <el-button class="com_right marR10" type="primary" size="small" @click="doSearch">下载</el-button>

    </div>
    <div class="com_more_pop_body_box clearfix">
      <div>
      	<el-table
        stripe
	      :data="tableData"
	      style="width: 100%">
	      <el-table-column
	        prop="index"
	        label="序号"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="id"
	        label="信访件编号"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="name"
	        label="信访人"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="idno"
	        label="证件号码">
	      </el-table-column>
	      <el-table-column
	        prop="status"
	        label="处理状态">
	      </el-table-column>
	      <el-table-column
	        prop="viewStatus"
	        label="信访受理状态">
	      </el-table-column>
	      <el-table-column
	        prop="zrStatus"
	        label="责任受理状态">
	      </el-table-column>
	      <el-table-column
	        prop="bjStatus"
	        label="办结状态">
	      </el-table-column>
	    </el-table>
	    <div class="page-box">
      	<el-pagination
		  :page-size="20"
		  :pager-count="11"
		  layout="prev, pager, next"
		  :total="1000">
		</el-pagination>
		</div>
      </div>
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
      	tableData: [{
      		index: '1',
	        id: '32325325325',
	        name: '张三',
	        idno: '3252352553535353',
	        status: '己办结',
	        viewStatus: '及时受理',
	        zrStatus: '及时受理',
	        bjStatus: '及时受理'
	      },{
      		index: '1',
	        id: '32325325325',
	        name: '张三',
	        idno: '3252352553535353',
	        status: '己办结',
	        viewStatus: '及时受理',
	        zrStatus: '及时受理',
	        bjStatus: '及时受理'
	      },{
      		index: '1',
	        id: '32325325325',
	        name: '张三',
	        idno: '3252352553535353',
	        status: '己办结',
	        viewStatus: '及时受理',
	        zrStatus: '及时受理',
	        bjStatus: '及时受理'
	      }],
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
      
      // 查询
      doSearch () {
        // 搜索参数和请求方法在这
        console.log(this.search.area)
        console.log(this.search.sYear)
        console.log(this.search.eYear)
        console.log(this.search.type)

      }
    }
  }
</script>
<style lang='scss' scoped>
	.page-box{text-align: center;margin-top: 30px;}
  .el-table, .el-table__expanded-cell{
  	background-color: transparent!important;
  }
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