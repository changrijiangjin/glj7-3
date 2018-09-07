<template>
  <div class="index">
 
	<nav>
		<!-- Swiper -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<router-link to="/" tag="li" :class="$route.path=='/index'?'bgc':'' ">全部</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index/good" tag="li" :class="$route.path=='/index/good'?'bgc':'' ">精华</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index/weex" tag="li" :class="$route.path=='/index/weex'?'bgc':'' ">weex</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index/share" tag="li" :class="$route.path=='/index/share'?'bgc':'' ">分享</router-link>	
				</div>
				<div class="swiper-slide">
					<router-link to="/index/ask" tag="li" :class="$route.path=='/index/ask'?'bgc':'' ">问答</router-link>	
				</div>
				<div class="swiper-slide">
					<router-link to="/index/job" tag="li" :class="$route.path=='/index/job'?'bgc':'' ">招聘</router-link> 	
				</div>

				<div class="swiper-slide">
					<router-link to="" tag="li">测试</router-link>
				</div>

				<div class="swiper-slide">
					<router-link to="" tag="li">测试</router-link>
				</div>
				
				<div class="swiper-slide">
					<router-link to="" tag="li">测试</router-link>
				</div>
			</div>
		</div>
	<!-- 放子组件的视图 -->
	</nav>

	<!--子组件视图-->
	<router-view/>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  //钩子函数
  mounted(){
	  //自己的js写这儿
	  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 25,
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	//加载基础样式
	@import '../assets/sass/base.scss';

	nav{
		display:flex;
		align-items:center;
		position:fixed;
		left:0;
		top:0;
		width:100%;
		height:rem(80px);
		background:#F6F6F6;
		.swiper-slide{
			height:100%;
			display:flex;
			justify-content:space-around;
			align-items:center;
			
			li{
				display:flex;
				justify-content:center;
				align-items:center;
				padding:0 rem(8px);
				height:60%;
				border-radius:rem(8px);
				color:#369219;
				font-size:rem(32px);
			}
			li.bgc{
				color:#fff;
				background:#369219;
			}
		}
	}

</style>
