<template>
  <div class="flex-wrap">
    <div class="first-wrap">
        <div class="btn-login" @click="login">微信登陆</div>
        <div class="btn-in" @click="login">账号密码登陆</div>
        <span class="regpage">还没账号？<strong>手机号快速注册 ＞</strong></span>
    </div>
    <div class="sb-wrap">
    	<div class="item">
        	<span class="name">账号</span><input type="number" value="" name="" class="username">
        </div>
    	<div class="item">
        	<span class="name">密码</span><input type="password" value="" class="password">
            <span class="forgot">忘记密码？</span>
        </div>
        <div class="btn-submit">登陆</div>
        <span class="regpage" =>还没账号？<strong>手机号快速注册 ＞</strong></span>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default{
	data(){
		return {
		}
	},
	created(){
		
	  
	},
	methods:{
	  login(){
	    var _this = this;
	    axios.get('http://localhost:8080/static/person.json').then(function(res){
	    	if(res.data.flag){	    		
		        _this.$store.state.user = res.data.data;
		        _this.$router.push({path:_this.$route.query.url})
	    	}
	        console.log(_this)
		    }).catch(function(err){
		        console.log(err);
		    })
	  },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{ box-sizing: border-box; }
.btn-login { display:block;height: 40px; line-height: 40px;background:rgba(250,133,9,0.90);font-size:14px; padding: 0 20px; margin:0px auto 0; color: #fff; width:100%; text-align:center; color:#fff;}
.flex-wrap{ background-size:100% auto; height:100%; position:relative; overflow: hidden;}
.btn-in{display:block;height: 40px; line-height: 40px;font-size:14px; padding: 0 20px; margin: 20px auto 0; color: #fff; width:100%; text-align:center; color:#fff; border:solid 1px #fff;}
.first-wrap{ padding:200px 20px 50px; height:100%; position:relative; overflow: hidden;}
.sb-wrap{padding:200px 20px 30px; text-align:right; display:none; height:100%; position:relative;}
.sb-wrap .item{margin-bottom:15px; height:50px;background:rgba(216,216,216,0.20); position:relative;}
.sb-wrap .item .name{ position:absolute; left:0; top:0; height:50px; line-height:50px; color:#fff; width:70px; text-align:center; border-right:solid 1px #000;}
.sb-wrap .item input{ display:block; height:50px; padding:0; margin:0; background:none; border:none; width:100%; padding:0 80px; color:#fff;}
.sb-wrap .item .forgot{  position:absolute; right:10px; top:0; height:50px; line-height:50px; color:#fff; text-align:center;}
.sb-wrap .btn-submit{ display:inline-block; width:120px; height:35px;background:rgba(250,133,9,0.90);font-size:14px; text-align:center; color:#fff; line-height:35px;}
.sb-wrap .or{ height:0; width:80%; border:solid 1px #979797; margin:30px 10%; text-align:center; position:relative;}
.sb-wrap .or span{ color:#fff; background:#000; position:relative; top:-10px; padding:0 10px; font-size:16px; line-height:16px;}
.regpage{ position:absolute; right:16px; bottom:20px; color:#fff; display:block; width:100%; text-align:right;}
.regpage strong{ font-weight:normal; color:rgba(250,133,9,0.90);}
</style>
