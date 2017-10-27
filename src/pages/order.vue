<template>
      <div id="myorder-wrap" class="person-tab-box">
        <h5 class="total">共<span id="order-total" v-cloak>{{orderList.length}}</span>个订单</h5>
        <div class="person-order-list gapline" id="pullrefreshOrder">
            <ul id="applylist-wrap" v-cloak>
                <li  v-for="(value,index) in orderList">
                    <div class="info">
                    	<div class="mui-pull-left"><a class="orange"><img :src="'http://static.shanpa98.com/thumb/80/'+value.face" class="pic">{{value.nickname}}</a></div>
                        <div class="mui-pull-right"><span class="price">￥{{value.unit_price}}</span><span v-if="value.state==0">未支付</span><span v-if="value.state==1">已支付</span><span v-if="value.state==4">已验证</span></div>
                        <div class="clear"></div>
                    </div>
                    <div class="time">
                    	<div class="mui-pull-left"><span class="iconfont">&#xe601;</span> {{value.start_time | dateFormat('MM-dd hh:mm')}}-{{value.end_time | dateFormat('hh:mm k')}} </div>
                        <span class="comment" @click="goEva(value.id)" v-if="value.is_comment==1">评价得优惠券</span>
                        <span class="comment commented" v-if="value.is_comment==2">已评价</span>
                        <span class="comment commented" v-if="value.is_comment==3">不可评价</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
	data(){
		return {
		    orderList:[]
		}
	},
	created(){
	  this.fetchData();
	  console.log(2323)
	},
	methods:{
	  fetchData(){
	    var _this = this;
	    axios.get('http://localhost:8080/static/order.json').then(function(res){
		        _this.dets = res.data;
		    }).catch(function(err){
		        console.log(err);
		    })
	  }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-order-list { height: auto; overflow: auto; width: 100%; flex: 1; }
.person-order-list li { height: 160px; padding: 0 10px; border-bottom: solid 1px #363636; position: relative; padding-top: 8px; }
.person-order-list li .info { color: #f19c28; font-size: 16px; padding-top: 5px; padding-bottom: 10px; }
.person-order-list li .info .mui-pull-right { margin-top: -5px; }
.person-order-list li .time { line-height: 38px; color: #fff; height:auto; overflow: hidden; font-size: 14px; }
.person-order-list li .comment { border:solid 1px #ff991f; border-radius:4px; color:#ff991f; float:right; padding:0 5px; height:24px; line-height:24px; margin-top:10px; font-size:12px;}
.person-order-list li .commented { color:#777; border-color:#777; border:none;}
.person-order-list li .detail { height: 66px; overflow: hidden; line-height: 26px; color: #fff; margin-right: 50px; }
.person-order-list li .price { font-size: 12px; padding-right: 10px; }
.person-order-list li .info .price { color:#fff;}
.person-order-list li .status { position: absolute; right: 20px; top: 55px; color: #fff; color: #c9cccd; z-index: 10; }
.person-order-list li .detail p { height: 50px; overflow: hidden; line-height: 26px; color: #fff; color: #999; }
.person-order-list li .detail img { height: 60px; width: 60px; float: left; margin-right: 10px; margin-top: 5px; }
.person-order-list li .ml10 { margin-left: 10px; }
.person-order-list li .ordertime { height: 30px; line-height: 30px; color: #fff; }
.person-order-list li .pic { height: 24px; width: 24px; border-radius: 50%; float: left; margin-right: 5px; }
.person-order-list li .gray-btn { width: auto; height: 30px; padding: 0 10px; line-height: 28px; text-decoration: none; color: #f19c28; border: solid 1px #000000; border-radius: 5px; background: linear-gradient(#60646d, #31343d); box-shadow: 0px 1px 3px #000; }

</style>
