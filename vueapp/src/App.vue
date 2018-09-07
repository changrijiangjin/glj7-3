<template>
	<div id="app">

		<!--放子组件的视图-->
		<router-view/>

		<nav class="footer">
			<ul>
				<router-link to="/" tag="li" :class="respath=='index'?'bg':''" >首页</router-link>
				<router-link to="/gzh" tag="li" :class="respath=='gzh'?'bg':''" >公众号</router-link>
				<router-link to="/us" tag="li" :class="respath=='us'?'bg':''" >关于</router-link>
			</ul>
		</nav>

	</div>
</template>

<script>
	export default {
		name: 'App',
		//计算属性
		computed:{
			//计算路径
			respath:function(){
				//把路径分割成数组
				var pathArr = this.$route.path.split('/');
				//返回表示一级路由的str
				return pathArr[1];
			}

		}
	}
</script>


<style lang="scss">

	// 加载基础样式
	@import './assets/sass/base.scss'; 

	.footer{
		position:fixed;
		bottom:0;
		left:0;
		width:100%;
		height:rem(80px);
		background:#4F9639;
		ul{
			height:100%;
			display:flex;
			justify-content:space-around;
			align-items:center;
			li{
				display:flex;
				justify-content:space-around;
				align-items:center;
				width:33.333333333%;
				height:100%;
				font-size:rem(35px);
				color:#eee;
			}
			li.bg{
				color:#1C6132;
				background:#89D86C;
			}
		}
	}
	
</style>
