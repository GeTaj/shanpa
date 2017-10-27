<template>
<div>
	<bannerCom @uploadDate="bannerListen" :pages="showList"></bannerCom>
	<ul id="details-list" class="details-list" v-cloak>
	   <li v-for="(value,index) in showList" class="mui-table-view-cell list-item">
	   	<router-link :to="{query:{id:value.id},path:'/detail'}">
	        <div class="list-body">
	            <img :src="'http://static.shanpa98.com/thumb/640/'+value.icon" width="100%" class="list-pic">
	            <p>{{value.aname}}</p>
	            <div v-if="value.top>0" class="zan gray-color"><span>{{value.top}}</span>赞</div>
	            <div v-if="value.youhui"  class="tag">惠</div>
	        </div>
	    </router-link>
		</li>
	    <li v-show="showList.length==0" class="nomore">暂无更多的活动...</li>
	</ul>  
</div>
</template>

<script>
import axios from 'axios'
import bannerCom from '@/components/slider'
export default{
	data(){
	  return {
	    id: this.$route.query.id,
	    showList:[{icon:''}]
	  }
	},
	created(){
	  this.fetchData();
	},
	mounted:function(){

	  console.log(this.$store.state.user_name);
	},
	components:{
		bannerCom
	},
	methods:{
	  fetchData(){
	    var _this = this;
	    axios.get('http://localhost:8080/static/index.json').then(function(res){
		        _this.showList = res.data;
		    }).catch(function(err){
		        console.log(err);
		    })
	  },
	  toDetail(id){
	    router.go({name: 'detail', params: {id:id}});
	  },
	  bannerListen(value){
	  	alert(value)
	  },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details-list { width: 100%; background: #252525; position: relative; }
.details-list:before { background: none; }
.details-list:after { background: none; }
.details-list .mui-table-view-cell {background: #252525; padding: 2px 0 10px; margin: 0; }
.details-list li { position: relative; color: #fff; border-bottom: solid 1px #363636; }
.details-list li { position: relative; color: #fff; }
.details-list li:after { content: ''; height: 10px; box-sizing: border-box; width: 100%; position: absolute; left: 0; background: linear-gradient(#191919, #282828); bottom: 0; }
.details-list .list-header { height: 35px; overflow: hidden; padding: 0 10px; color: #f19c28; font-size: 14px; line-height: 30px; }
.details-list .list-header .pull-right { font-size: 12px; }
.details-list .gray-color { color: #999; }
.details-list .user-pic { width: 30px; height: 30px; border-radius: 50%; margin-right: 5px; float: left; }
.details-list .list-item {position: relative;}
.details-list .list-item .off-pic{ position: absolute; top:20px; right:40px; width:65px; height:65px; z-index:99;}
.details-list .list-item .list-href { margin: 0 !important; padding: 0 !important; }
.details-list .list-body { position: relative; width: 100%; height: 190px; overflow: hidden; }
.details-list .list-body .list-pic { width: 100%; min-height: 190px; }
.details-list .list-body .wait{ position:absolute; right:30px; top:-20px;width:80px; height:80px;}
.details-list .list-body .wait img{width:80px; height:80px;}
.details-list .list-body .full{ position:absolute; right:0px; top:0px;width:100px; height:100px;}
.details-list .list-body .full img{width:100px; height:100px;}
.details-list .list-body .zan{ position:absolute; right:10px; top:8px;}
.details-list .list-body .tag{ position:absolute; left:0; top:0; width:40px; height:40px; color:#fff;transform: rotate(-45deg);-webkit-transform: rotate(-45deg); font-size:14px; line-height:12px; text-align:center;}
.details-list .list-body .tag:after{ position:absolute; left:-3px; top:-3px; content:'';border:solid 20px transparent; border-left:20px solid #f00;border-top:20px solid #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg); z-index:-1;}
.details-list .list-body p { position: absolute; left: 0; bottom: 0;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)); font-weight: bold; color: #fff; text-align: center; text-overflow: ellipsis; width: 100%; height: 30px; line-height: 30px; padding: 0 10px; box-sizing: border-box; }
.details-list li .iconfont { display: inline-block; margin: 0 3px; }
.details-list li .mt2 { font-size: 12px; }
</style>
