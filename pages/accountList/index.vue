<template>
  <div class="com_more_pop_box">
    <div class="com_more_pop_header_box clearfix">
      <div class="com_left marR10 title"><i class="dot"></i>账号列表[ 南宁市信访局 ]</div>
    </div>
    <div class="com_more_pop_body_box clearfix">
      <div>
      	<el-table
        stripe
        @cell-click="visitList"
	      :data="tableData"
	      style="width: 100%">
	      <el-table-column
	        prop="index"
	        label="序号"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="userName"
	        label="用户名"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="loginName"
	        label="登录账号"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="partName"
	        label="处室/科室">
	      </el-table-column>
	      <el-table-column
	        prop="pos"
	        label="岗位">
	      </el-table-column>
	      <el-table-column
	        prop="tel"
	        label="联系电话">
	      </el-table-column>
	      <el-table-column
	        prop="count"
	        label="待办数量">
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
	        userName: '张三',
	        loginName: 'gxxfzs',
	        partName: '接访科',
	        pos: '接访中心主任',
	        tel: '18998881233',
	        count: 20
	      },{
          index: '1',
          userName: '张三',
          loginName: 'gxxfzs',
          partName: '接访科',
          pos: '接访中心主任',
          tel: '18998881233',
          count: 20
        },{
          index: '1',
          userName: '张三',
          loginName: 'gxxfzs',
          partName: '接访科',
          pos: '接访中心主任',
          tel: '18998881233',
          count: 20
        },{
          index: '1',
          userName: '张三',
          loginName: 'gxxfzs',
          partName: '接访科',
          pos: '接访中心主任',
          tel: '18998881233',
          count: 20
        },{
          index: '1',
          userName: '张三',
          loginName: 'gxxfzs',
          partName: '接访科',
          pos: '接访中心主任',
          tel: '18998881233',
          count: 20
        },{
          index: '1',
          userName: '张三',
          loginName: 'gxxfzs',
          partName: '接访科',
          pos: '接访中心主任',
          tel: '18998881233',
          count: 20
        },{
          index: '1',
          userName: '张三',
          loginName: 'gxxfzs',
          partName: '接访科',
          pos: '接访中心主任',
          tel: '18998881233',
          count: 20
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

      },
      visitList(row, cell, aa){
        if(cell.property === 'count'){
          this.$router.push({path: `/visitList?index=${row.index}`});
        }
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