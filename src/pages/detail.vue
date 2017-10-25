<template>
<div class="details-party" id="details-tpl">
	<h4 class="party-title" v-cloak>{{dets.aname}}</h4>
	<div class="party-info-box">
	    <div class="border_top">
	        <div class="mui-pull-left "><span class="iconfont">&#xe602;</span>
	            <span>￥<span class="orange" v-cloak>{{dets.min_price}}</span>起    </span>
	        </div>
	        <div class="mui-pull-right "  v-if="dets.youhui!=''"><span class="icon-hui">惠</span>{{dets.youhui}}</div>
	        <div class="mui-clearfix"></div>
	    </div>
	    <div class="border_top">
	        <div class="mui-pull-left"><span class="iconfont">&#xe612;</span>{{dets.address}}<span class="gray mt2">（点击查看）</span></div>
	        <div class="mui-clearfix"></div>
	    </div>
	</div>
	<div class="apply-list-box">
            <div class="mui-clearfix"></div>
            <div class="apply-tab" v-cloak>
            	<div class="item" v-for="(value,index) in dets.dates_list" @click="showCom(index)">{{value.start_time}}</div>
            </div>
        </div>
	<dateComponent :list="datesorder"></dateComponent>
</div>  
</template>

<script>
import axios from 'axios'
export default{
	data(){
		return {
		    id: this.$route.query.id,
		    dets:{},
		    datesorder:[]
		}
	},
	created(){
	  this.fetchData();
	},
	components:{
		dateComponent:{
			template:'<ul><li v-for="value in list">{{value.nickname}}</li></ul>',
			props:["list"]
		}
	},
	methods:{
	  fetchData(){
	    var _this = this;
	    axios.get('http://localhost:8080/static/detail.json').then(function(res){
		        _this.dets = res.data;
		    }).catch(function(err){
		        console.log(err);
		    })
	  },
	  showCom:function(index){
	  	this.datesorder = this.dets.dates_list[index].apply_list;
	  	console.log(this.datesorder)
	  }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details-party .party-title { font-size: 16px; line-height: 1.8; color: #f9ac07; padding: 10px; }
.details-party .party-mins { line-height: 24px; padding: 10px 0px; color: #fff; position: relative; margin: 0 15px; }
.details-party .party-mins .user-name { color: #fff; }
.details-party .party-mins .user-pic { width: 24px; height: 24px; }
.details-party .party-mins:after { content: ''; height: 3px; box-sizing: border-box; width: 100%; position: absolute; left: 0; background: linear-gradient(#191919, #282828); top: 0; }
.details-party .user-pic { float: left; width: 28px; height: 28px; border-radius: 50%; margin-right: 7px; }
.details-party .party-info-box { background: #1f1f1f; border-radius: 5px; padding: 5px 15px; border-top: solid 1px #161616;border-bottom: solid 1px #161616; margin: 10px 0 5px; line-height:30px; color: #fff;}
.details-party .party-info-box .iconfont { margin: 0 3px; }
.details-party .user-name, .details-party .orange { color: #f9ac07 }
.details-party .mui-icon-location { position: relative; top: 2px; }
.details-party .title-details {color: #fff; margin:15px 10px 0; font-size:16px; font-weight:normal;}
.details-party .title-details .iconfont {position: relative; }
.details-party .apply-list-box { position:relative; margin-bottom:10px;}
.details-party .apply-list-box .apply-tab{ height:50px; overflow:hidden; width:100%; position:relative; z-index:3; margin-bottom:-1px; margin-top:10px; display:flex;}
.details-party .apply-tab .item{ float:left; text-align:center; line-height:20px; color:#888787; font-size:12px; width:33.333333%; height:50px; padding:5px 0;}
.details-party .apply-tab .item p{ display:block; border-right: solid 1px #161616;height:20px; overflow:hidden; font-size:10px;}
.details-party .apply-tab .cur{ background:#1f1f1f;color:#f39d06;}
.details-party .apply-list-box ul{ background: #1f1f1f; border-radius: 5px; padding: 5px 15px; border-top: solid 1px #161616;border-bottom: solid 1px #161616;line-height: 27px; color: #fff; animation: all 2s infinite;}
.details-party .apply-list { height: auto; overflow: hidden; animation: all 2s infinite; }
.details-party .apply-list li { height:30px; overflow: hidden; margin:5px 0; line-height: 30px; }
.details-party .apply-list .gray{ color:#999; font-size:14px;}
.details-party .apply-list .user-pic { height: 30px; width: 30px; margin-right: 5px; }
.details-party .apply-list .user-name { color:#fff;}
.details-party .gofollow { float: right;opacity:0.6; overflow:hidden; height:24px; font-size:11px; padding:0px 5px; border-radius:3px; border:solid 1px #f9ac07; color:#999; line-height:22px;}

</style>
