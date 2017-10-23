<template>
    <ul class="footer">
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/order">订单</router-link></li>
      <li><router-link to="/home">我</router-link></li>
    </ul>
</template>

<script>
export default {
  name: 'footer',
  methods:{
  	back:function(){
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{ width: 100%; height: 45px; background: #252525; text-align: center; line-height: 45px; display: flex; position: fixed; bottom:0; left:0;}
.footer li{ height: 45px;flex:1;-webkit-flex:1; color: #fff;}
.footer li a{color: #fff; display: block; height:45px;}
.footer li .router-link-active{ color:#f00; }
</style>
