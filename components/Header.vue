<template>
  <div class="header">
      <ul class="nav_box clearfix">
        
        <nuxt-link v-for="(nav,$index) in navList" :key="$index" tag="li" :to="{ name: nav.name }"  :class="curMenuUrl === nav.name ? 'focus' : ''">
          <i class="t" @click="changeNavHeight(40)">{{nav.title}}</i>
          <span class="m"></span>
        </nuxt-link>
        
      </ul>
    
    <div class="header_r">
    <i class="arrow_l"></i><a href="#">区直单位</a> <a href="#">地市桌面</a><i class="arrow_r"></i><span class="time_tit">{{curTime}}</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        curTime: '',
        menuVisible: false,
        navBoxHeight: 40,
        navList: [
			{
			  name: 'index',
			  title: '首页'
			},
          {
            name: 'hot',
            title: '热点模型'
          },
          {
            name: 'warn',
            title: '预警信息'
          },
          {
            name: 'guide',
            title: '成引导向'
          },
          {
            name: 'oetitioners',
            title: '信访人像'
          },
          {
            name: 'company',
            title: '单位画像'
          },
          {
            name: 'judged',
            title: '形式研判'
          }
        ]
      }
    },
    computed: {
      ...mapState({
          curMenuUrl: (state) => {
          return state.base.curMenuUrl
        }
      }),
      curMenuTit(){
        let arr = this.navList.filter(item => {
          return item.name === this.curMenuUrl
        });
        if(arr && arr.length){
          return arr[0].title;
        }else{
          return '首页';
        }
      }
    },
    mounted () {
      var today = new Date();
      function initArray() {
          this.length = arguments.length;
          for (var i = 0; i < this.length; i++)
              this[i + 1] = arguments[i];
      }
      var d = new initArray(
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六");
      this.curTime = [today.getFullYear(), "年",
      today.getMonth() + 1, "月",
      today.getDate(), "日 ",
      d[today.getDay() + 1]].join('');
    },
    methods: {
      changeNavHeight(ht){
        this.navBoxHeight = ht;
      },
      toggleMenu(){
        this.menuVisible = !this.menuVisible;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background: url('/gx/img/nav/bg.png') no-repeat center 0;
    border-bottom: 1px solid #1561a4;
    background-size: auto 80px;
    height:81px;
    ul{width:11%;opacity:0.9;position:relative;top:30px; z-index:1;position: absolute;line-height: 40px;height:40px;
     overflow: hidden;
      transition: height 0.5s ease;
      -webkit-transition: height 0.5s ease;
      -moz-transition: height 0.5s ease;
      -ms-transition: height 0.5s ease;
      -o-transition: height 0.5s ease;
      &:hover {
        height: 287px
      }
    }

    .header_r{
      width:50%;font-size:18px;
       text-align:right;
       position:relative;
       top:20px;
       z-index:10;
       color: #92d2ff;
       float:right;
       margin:0 12px;
       a{color: #92d2ff;margin: 0 8px;background: #3772ba;padding:5px 15px;border-radius:2px;}
       .time_tit{margin-left:15px;}
       }
	  .arrow_l{
    height:0;
    width:0;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-color:transparent #3772ba transparent transparent;
    border-style:solid dashed dashed dashed;
    border-width:18px;	
	position: relative;
	top:10px;
	right:-9px;
	display: inline-block;
}
.arrow_r{
    height:0;
    width:0;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-color:transparent transparent transparent #3772ba;
    border-style:solid dashed dashed dashed;
    border-width:18px;
	position: relative;
	top:10px;
	left:-9px;
	display: inline-block;
}
.round{width:50px;height:50px;border-radius:50px;}
 
  .nav_box {
    margin: 0 10px;
     background:#081b5b;
     display:inline-block;
     transition: all 0.5s ease;
     
     
     li {
	  border-bottom: 1px solid #093d6a;
      color: #4fd9fc;
      font-size:16px;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -ms-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      &:hover {
          background:#10469b;
          background-size:auto 60px;
      }  
      &.focus {
        background:#10469b;
        background-size: auto 60px;
      }
      &.focus, &:hover {
        transform:scaleX(1);
        -webkit-transform:scaleX(1);
        -moz-transform:scaleX(1);
        -ms-transform:scaleX(1);
        -o-transform:scaleX(1);
      }

      .t {
        white-space: nowrap;
        overflow: hidden;
        margin: 0 5%;
        text-overflow: ellipsis;
        display: block;
      }
      .m {
        position: absolute;
        display: block;
        height: 100%;
        width: 90%;
        bottom: 0;
        margin: 0 5%;
        z-index: -1;
        transform:scaleX(0);
        -webkit-transform:scaleX(0);
        -moz-transform:scaleX(0);
        -ms-transform:scaleX(0);
        -o-transform:scaleX(0);        
      }
      
    }
  }

  @media screen and (max-width: 1024px) {
    .nav_box {
      li {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      background-size: auto 60px;
      height: 60px;
    }
    .nav_tit_margin {
      margin-left: 280px;
    }
    .nav_box {
      display: none;
      padding-top: 12px;
      line-height: 48px;
      li {
        width: calc((100% - 280px) / 6);
        font-size: 12px;
      }
    }
  }
}
</style>
