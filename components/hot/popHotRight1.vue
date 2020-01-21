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
      		index: '2',
	        id: '32325325325',
	        name: '张三',
	        idno: '3252352553535353',
	        status: '己办结',
	        viewStatus: '及时受理',
	        zrStatus: '及时受理',
	        bjStatus: '及时受理'
	      },{
      		index: '3',
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
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    .popHotLeft3_box {
      float: none;
      width: 100%;
      height: 170px;
    }
  }
</style>