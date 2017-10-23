<template>
  <div id="app">
    <headerbar></headerbar>
    <div class="wrapbox"><router-view></router-view></div>
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

<style>


</style>
