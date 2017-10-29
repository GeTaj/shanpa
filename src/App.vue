<template>
  <div id="app" class="wrapbox">
    <headerbar></headerbar>
    <transition name="fade" model="in-out"><router-view></router-view></transition>
    <footerbar></footerbar>
  </div>
</template>

<script>
import footerbar from '@/components/footer'
import headerbar from '@/components/header'
export default {
  name: 'app',
  components: {
      footerbar,
      headerbar
  }
}
</script>
<style scoped>


</style>
