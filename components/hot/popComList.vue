<template>

      <div>
      	<el-table
        stripe
	      :data="tableData"
        @cell-click="accountList"
        style="width: 100%">
	      <el-table-column
	        prop="index"
	        label="序号"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="comName"
	        label="单位名称"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="comType"
	        label="机构类别"
	        width="180">
	      </el-table-column>
	      <el-table-column
	        prop="tel"
	        label="联系电话">
	      </el-table-column>
	      <el-table-column
	        prop="contact"
	        label="单位负责人">
	      </el-table-column>
	      <el-table-column
	        prop="count"          
	        label="账号数量">
	      </el-table-column>
	      <el-table-column
	        prop="lowCom"
	        label="下属机构">
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
</template>

<script>
  import $ from 'jquery'
  import common from '~/assets/js/common.js'
  import echarts from 'echarts'

  export default {
    props: {},
    data() {
      return {
      	tableData: [],
        areaDataList: [],
        typeOptions: [] // 信访形式
      }
    },
    created () {
      this.areaDataList = common.getAreaData()
      this.typeOptions = [
        {value: 1, label: '直属单位'}
      ];      
    },
    mounted() {
      let self = this;
      this.$root.$on('comListSearch', () => {
        console.log('comListSearch be trigger');
        // 加载
        self.doSearch()
      });
      // 加载
      this.doSearch()
    },
    methods: {
      
      // 查询
      doSearch () {
        this.tableData = [];
        
          this.tableData = [
            {
              index: '1',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            },{
              index: '2',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            },{
              index: '3',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            },{
              index: '4',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            },{
              index: '5',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            },{
              index: '6',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            },{
              index: '7',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            },{
              index: '8',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            },{
              index: '9',
              comName: '南宁市信访局',
              comType: '地市信访局',
              tel: '0771-26133707',
              contact: '黄威铭',
              count: 25,
              lowCom: 25
            }
          ];
        

      },
      accountList(row, cell){
        if(cell.property === 'count'){
          //this.$router.push({path: `/accountList?index=${row.index}`});
          this.$emit('accountEvent', row);
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