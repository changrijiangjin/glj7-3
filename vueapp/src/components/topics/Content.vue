<template>
  <div class="contents">
		<div class="tops">
			<div class="zhi" :class="{top:contentData.top || contentData.good}">
				<div v-if="contentData.top">置顶</div>
				<div v-else-if="contentData.good">精华</div>
				<div v-else-if="$route.path=='/index'?'item.tab':''" class="item_tab">{{tab[contentData.tab]}}</div>
				<div v-else></div>
			</div>
			<div class="title" v-if="contentData.good==true || contentData.top==true ">
				&nbsp;&nbsp;&nbsp;&nbsp;{{contentData.title}}
			</div>
			<div class="title" v-else>
				{{contentData.title}}
			</div>
			
		</div>

		<span class="before">
			<span>· 作者 {{contentData.author.loginname}}</span>
			<span>· {{contentData.visit_count}} 次浏览</span>
			<span>· 来自 {{tab[contentData.tab]}}</span>
		</span>

		<div class="bbs">
			<div class="bbsContent">
				<a class="li">社区推荐：</a><a href="https://juejin.im/welcome/frontend?utm_source=vuejs&utm_medium=word&utm_content=qianduan&utm_campaign=q4_website">掘金</a>是一个面向程序员的技术社区，从Vue到React，从前端教程到开源库，无论是入门还是进阶，来<a href="https://juejin.im/welcome/frontend?utm_source=vuejs&utm_medium=word&utm_content=qianduan&utm_campaign=q4_website">掘金</a>你不会错过前端开发的任何一个技术干货。
			</div>
		</div>

		<div class="content" v-html="contentData.content"></div>

		<div class="response">
			<div class="res">{{contentData.replies.length}} 回复</div>
			<ul class="items">
				<li v-for="(item,index) in contentData.replies" class="item">
					<div class="one">
						<div class="img">
							<img :src="item.author.avatar_url">
						</div>
						<div class="two">
							<div class="left">
								<span class="name">{{item.author.loginname}}</span>
								<span class="floor">{{index+1}}楼</span>
							</div> 
							<div class="right">
								<span class="iconfont icon-good"> {{item.ups.length}}</span>
							</div>
						</div>
					</div>
					<div class="cont" v-html="item.content">
					</div>
				</li>
			</ul>
			
		</div>

    
    
  </div>
</template>

<script>
//引入请求数据模块
import {getContentShow} from "@/getData/topic"

export default{
    name:'Content',
    data(){
        return{
            contentData:[],
			tab:{
				weex:'weex',
				share:'分享',
				ask:'问答',
				job:'招聘'
			}
        }
    },
    //钩子函数
    mounted(){
        getContentShow(this.$route.params.id).then((data)=>{
            this.contentData = data.data.data
			//console.log(this.contentData);
        })
    }

}
</script>


<style lang="scss">
    //加载基础样式
    @import "../../assets/sass/base.scss";

    .contents{
        margin:rem(90px) 0;
		.tops{
			word-break:all-break;
			padding:rem(30px) 0 rem(20px) rem(10px);
			display:flex;
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
			.zhi{
				position:absolute;
			}
			.title{
				width:70%;
				font-size:rem(40px);
				font-family:黑体;
				font-weight:bold;
				color:#333;
			}
			
		}
		.before{
			padding-left:rem(20px);
			span{
				color:#aaa;
				font-size:rem(10px);
				margin-top:rem(150px);
			}
			
		}
		.bbs{
			border-top:1px solid #ccc;
			margin-top:rem(20px);
			.bbsContent{
				border-left:rem(5px) solid #099436;
				margin:rem(30px);
				padding:rem(15px);
				background:#F6F6F6;
				font-size:rem(11px);
				line-height:rem(38px);
				color:#778087;
				.li{
					color:#333;
				}
				a{
					color:#0088CC;
				}
			}
		}


		.content{
			padding:0 rem(20px);
			font-size:rem(32px);
			line-height:rem(50px);
			img{
				max-width:100%;
			}
		}
		.response{
			margin-top:rem(70px);
			.res{
				background:#F6F6F6;
				color:#1C6132;
				font-size:rem(15px);
				padding:rem(20px);
				border-bottom:1px solid #F2F6F0;
			}
			.items{
				padding:0 rem(20px);
				.item{
					border-bottom:2px solid #ddd;
					padding-bottom:rem(35px);
				}
				.one{
					padding-top:rem(20px);
					display:flex;
					justify-content:flex-start;
					align-items:center;
					img{
						width:rem(60px);
					}
					.two{
						width:95%;
						display:flex;
						justify-content:space-between;
						margin-left:rem(20px);
						margin-top:rem(-25px);
						font-size:rem(23px);
						.name{
							color:#333;
						}
						.floor{
							color:#0088CC;
						}
						.icon-good{
							font-size:rem(23px);
						}
					}
				}
				.cont{
					margin-top:rem(10px);
					font-size:rem(15px);
				}
			}


		}

		
    }

    
</style>
