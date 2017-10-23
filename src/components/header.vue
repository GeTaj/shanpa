<template>
    <header class="header">      
      <span class="action" @dblclick="back">后退</span>
      <span class="title">{{title}}</span>
    </header>
</template>

<script>
export default {
  name: 'header',
  data:function(){
    return {
      title:'傻帕'
    }
  },
  methods:{
    back:function(){
      alert(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 20px;
  text-align: center;
  line-height: 44px;
  background: #252525;
  z-index: 9999;
  color: #fff;
  border-bottom: 1px solid rgba(204,204,204,0.8);
}
header .action{
  width: 44px;
  height: 44px;
  font-size:16px;
  text-align: center;
  line-height: 44px;
  position: absolute;
  left:0;top: 0;
}
</style>
