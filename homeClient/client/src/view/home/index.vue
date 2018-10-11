<template>
  <div :class="$style.root">
    <!-- nav -->
    <TopNav
      :ENV="menusType"
      :menus="menus"
    />
  </div>
</template>

<script>
import TopNav from '@/components/top-nav'
import logo from '@/assets/logo01.png'

export default {
  name: 'Home',
  components: {
    TopNav
  },
  data () {
    return {
      menusType: {
        type: 'horizontal',
        target: 'home',
        textColor: '#fff',
        logoSrc: logo,
        border: 'border-bottom: 1px solid rgba(255,255,255,0.3);'
      },
      menus: [
        {
          name: '首页',
          path: '/home/index'
        }
      ]
    }
  }
}
</script>

<style lang="less" module>
  .root{
    background: #1F2325;
  }
</style>
