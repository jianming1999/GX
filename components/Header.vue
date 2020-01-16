<template>
  <div class="header">
    <ul class="nav_box clearfix">
      <nuxt-link tag="li" :to="{ name: 'index' }" :class="curMenuUrl === 'index' ? 'focus' : ''">
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
        <i class="t">信访人画像</i>
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
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState({
          curMenuUrl: (state) => {
          return state.base.curMenuUrl
        }
      })
    },
    mounted () {}
  }
</script>

<style lang="scss" scoped>
  .header {
    background: url('/gx/img/nav/bg.png') no-repeat center 0;
    border-bottom: 1px solid #1561a4;
    background-size: auto 80px;
  }
  .nav_tit_margin {
    margin-left: 500px;
  }
  .nav_box {
    padding-top: 20px;
    line-height: 60px;
    margin: 0 10px;
    li {
      position: relative;
      color: #4fd9fc;
      float:left;
      width: calc((100% - 500px) / 6);
      font-size: 20px;
      text-align: center;
      white-space: nowrap;
      cursor: pointer;
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
        transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
      }

      &:hover {
        .m {
          background: url('/gx/img/nav/hover.png') repeat-x center bottom;
          background-size: auto 60px;
        }
      }
      &.focus {
        .m {
          background: url('/gx/img/nav/focus.png') repeat-x center bottom;
          background-size: auto 60px;
        }
      }
      &.focus, &:hover {
        .m {
          transform:scaleX(1);
          -webkit-transform:scaleX(1);
          -moz-transform:scaleX(1);
          -ms-transform:scaleX(1);
          -o-transform:scaleX(1);
        }
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
