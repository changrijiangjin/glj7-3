<template>
  <div class="topiclist">
    
    <ul class="items">

		<li v-for="(item,index) in topics" class="item">
			<div class="img">
				<img v-lazy="item.author.avatar_url">
			</div>

			<div class="zhi" :class="{top:item.top || item.good}">
                <div v-if="item.top">置顶</div>
				<div v-else-if="item.good">精华</div>
                <div v-else-if="$route.path=='/index'?'item.tab':''" class="item_tab">{{tab[item.tab]}}</div>
                <div v-else></div>
			</div>

			<div class="content"> 
				<router-link :to="'/index/content/'+item.id" tag="div" class="title">{{item.title}}</router-link>
				<div class="else">
					<span class="num"><span class="span">{{item.reply_count}}/</span>{{item.visit_count}}</span>
				<!--	<span class="time">{{item.create_at}}</span>  -->
				</div>
			</div>
		</li>

	</ul>

  </div>
</template>




<script>
//引入请求数据模块
import {getTopicList} from "@/getData/topic.js"


export default {
  name: 'TopicList',
  //数据
  data () {
    return {
     tab:{
         weex:'weex',
         share:'分享',
         ask:'问答',
         job:'招聘'
     }
    };
  },

    //接收 父组件传递过来的值
    props:['topics']

}
</script>





<style scoped lang="scss">

	//加载基础样式
	@import '../../assets/sass/base.scss';

	.topiclist{
		margin:rem(80px) 0;

    .items .item{
			display:flex;
			align-items:center;
			height:rem(100px);
			border-bottom:1px solid #F0F0F0;
			img{
				width:rem(60px);
				margin:0 rem(20px);
			}
			.top{
				width:rem(65px);
				height:rem(35px);
				line-height:rem(35px);
				text-align:center;
				background:#369219;
				color:#fff;
				border-radius:rem(6px);
				margin-right:rem(10px);
                
			}
            .item_tab{
                width:rem(65px);
                height:rem(35px);
                line-height:rem(35px);
                text-align:center;
                background:#E5E5E5;
                color:#999;
                border-radius:rem(6px);
                margin-right:rem(10px);
            }
			
			.content{
				width:75%;
				.title{
					margin-top:rem(10px);
					width:65%;
					color:#333;
					font-size:rem(28px);
					//溢出隐藏
					overflow:hidden;
					text-overflow:ellipsis;//显示省略号
					white-space:nowrap;//不折行
				}
				.else{
					display:flex;
					justify-content:space-between;
					color:#B4B4B4;
					font-size:rem(22px);
					margin-top:rem(-3px);
					.span{
						color:#A886C7;
					}
				}
			}
		}

	}
</style>
