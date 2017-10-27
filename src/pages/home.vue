<template>
<div>
	<div class="person-header"  v-cloak>
        <div class="person-info" id="personinfo">
        	<div class="editface"><img :src="'http://static.shanpa98.com/thumb/80/'+userinfo.face" class="pic"><span class="iconfont">&#xe613;</span></div>
            <p class="name">{{userinfo.nickname}} <em v-if="userinfo.vip_info" class="vip"></em> <span v-show="userinfo.sex==1" class="iconfont boy">&#xe607;</span><span v-show="userinfo.sex==2" class="iconfont girl">&#xe608;</span>

            <span class="loginout">注销</span></p>
            <p class="level"><span class="follow">已有{{userinfo.fens_num}}人关注</span></p>
            <a class="friend">好友关系</a>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
export default{
	data(){
		return {
			userinfo:{}
		}
	},
	created:function(){
		this.login()
	},
	methods:{
	  login(){
	    var _this = this;
	    axios.get('http://localhost:8080/static/person.json').then(function(res){
	    	if(res.data.flag){	    		
		        _this.userinfo = res.data.data;
	    	}
		    }).catch(function(err){
		        console.log(err);
		    })
	  },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-info { overflow: hidden; padding:20px 15px; position: relative; }
.person-info .pic { display: inline-block; border: solid 3px #89745c; width: 45px; height: 45px; border-radius: 50%; float: left; margin-right: 10px; }
.person-info .pos-arr{ position: absolute; right: 20px; top: 30px; color: #c7c2bd; font-size:24px; color:#fff; }
.person-info .name { font-size: 16px; color: #fff; }
.person-info .girl { margin-left:5px; color: #ff6cbc; }
.person-info .boy { margin-left:5px; color: #3a8cfb; }

.person-info .editface {width:48px; height:48px; border-radius: 50%; float:left; margin-right:10px;position:relative;}
.person-info .editface .iconfont{width:18px; height:18px;overflow:hidden; position: absolute; color:#c9cccd; right:0px; bottom:0px; font-size:18px; line-height:20px; text-align:center;}
.person-info .pic { display: inline-block; border: solid 2px #89745c; width:45px; height:45px; border-radius: 50%; float:left; margin-right:10px;}
.person-info .name { font-size: 16px; color: #fff;}
.person-info .status { position:absolute; right:20px; top:30px; height:30px; line-height:28px; background:#252525;display:block; width:70px; text-align:center; border-radius:3px; border:solid 1px #9f9f9f; color:#9f9f9f; font-size:14px;}
.person-info .friend { position:absolute; right:10px; bottom:20px;line-height:20px;background:#0E0E0E;display:inline-block; width:auto; text-align:center; border-radius:3px;color:#fff; font-size:12px; padding:2px;}
.person-info .msg { position:absolute; right:20px; top:10px; height:30px; line-height:30px; font-size:12px;text-align:center;font-size:18px; color:#faac07;}
.person-info .msg .iconfont{font-size:26px;color:#faac07;}
.person-info .new:after { content:''; width:0; height:0; position:absolute; right:-2px; top:-2px; border:solid 4px #F00; border-radius:50%;}
.person-info .cur{ background:#faac07; border-color:#faac07; color:#fff;}
.person-info .level { font-size: 14px; color: #c7c2bd; line-height:30px; }
</style>
