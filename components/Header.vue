<template>
  <div class="header">
    
    <ul class="nav_box clearfix">
      <nuxt-link tag="li" :to="{ name: 'index' }" :class="curMenuUrl === 'index' ? 'focus' : ''">
        <i class="t">首页</i>
        <span class="m"></span>
      </nuxt-link>
      <nuxt-link tag="li" :to="{ name: 'index' }" class="focus">
        <i class="t">热点模型</i>
        <span class="m"></span>
      </nuxt-link>
      <nuxt-link tag="li" :to="{ name: 'warn' }" :class="curMenuUrl === 'warn' ? 'focus' : ''">
        <i class="t">预警信息</i>
        <span class="m"></span>
      </nuxt-link>
      <nuxt-link tag="li" :to="{ name: 'guide' }" :class="curMenuUrl === 'guide' ? 'focus' : ''">
        <i class="t">成引导向</i>
        <span class="m"></span>
      </nuxt-link>
      <nuxt-link tag="li" :to="{ name: 'oetitioners' }" class="nav_tit_margin" :class="curMenuUrl === 'oetitioners' ? 'focus' : ''">
        <i class="t">信访人像</i>
        <span class="m"></span>
      </nuxt-link>
      <nuxt-link tag="li" :to="{ name: 'company' }" :class="curMenuUrl === 'company' ? 'focus' : ''">
        <i class="t">单位画像</i>
        <span class="m"></span>
      </nuxt-link>
      <nuxt-link tag="li" :to="{ name: 'judged' }" :class="curMenuUrl === 'judged' ? 'focus' : ''">
        <i class="t">形式研判</i>
        <span class="m"></span>
      </nuxt-link>
    </ul>
    <div class="header_r">
    <a href="#">区直单位</a> <a href="#">地市桌面</a><span class="time_tit">2022年2月23日</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        menuVisible: false
      }
    },
    computed: {
      ...mapState({
          curMenuUrl: (state) => {
          return state.base.curMenuUrl
        }
      })
    },
    mounted () {},
    methods: {
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
    ul{width:11%;opacity:0.9;position:relative;
    top:30px; z-index:1;
    position: absolute;
      li{
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }

    .header_r{
      width:30%;font-size:18px;
       text-align:right;
       position:relative;
       top:35px;
       z-index:10;
       color: #92d2ff;
       float:right;
       margin:0 12px;
       a{color: #92d2ff;margin: 0 8px;border:1px solid #3772ba;padding:5px 15px;border-radius:2px;}
       .time_tit{margin-left:15px;}
       }
  }
  .nav_box {
    margin: 0 10px;
     background:#081b5b;
     display:inline-block;
     transition: all 0.5s ease;
     height: 34px;
     overflow: hidden;
      transition: height 0.5s ease;
      -webkit-transition: height 0.5s ease;
      -moz-transition: height 0.5s ease;
      -ms-transition: height 0.5s ease;
      -o-transition: height 0.5s ease;
      &:hover {
        height: 222px
      }
     li {
      color: #4fd9fc;
      font-size:18px;
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
        background:＃10469b;
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

</style>
