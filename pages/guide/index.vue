<template>
  <div style="text-align:center; padding: 10% 0; color:#4fd9fc">~成引导向空白页~</div>
</template>

<script>
  export default {
    components: {},

    data () {
      return {}
    },

    created () {
      this.$store.dispatch('getItemBase', {curTitle: this.headOptions.tit})
    },

    // 页面渲染后处理
    mounted () {},

    // 方法集合
    methods: {},

    async asyncData ({ app }) {
      const headOptions = {
        tit: '成引导向',
        kw: '成引导向KW',
        desc: '成引导向Desc'
      }
      return {headOptions: headOptions}
    },

    head() {
      return this.$seo(this.headOptions)
    },

    // 页面退出时处理
    beforeDestroy () {},

    filters: {}
  }
</script>

<style lang="scss" scoped></style>
