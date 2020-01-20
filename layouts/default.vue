<template>
  <div>
    <div class="wrap">
      <Header></Header>
      <div class="container">
        <nuxt />
      </div>
    </div>
    <Sky></Sky>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Header from '~/components/Header.vue'
  import Sky from '~/components/Sky.vue'
  export default {
    components: {Header, Sky},
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
</style>
