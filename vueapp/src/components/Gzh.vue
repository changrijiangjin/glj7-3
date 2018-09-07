<template>
	<div class="gzh">
		<div class="content">
			<div class="img">
				<img src="../../static/images/erweima.jpg">
			</div>
			<p>Vue中文社区独家公众号，面向前端爱好者，每日更新最有料的文章，最前沿的咨询，内容包含但不限于Vue,React,Angular，前端工程化...等各种“大保健”知识点，点击关注，老司机带你弯道超车，不定期更有各种福利赠送</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Gzh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

		//加载基础样式
	@import '../assets/sass/base.scss';

	.content{
		.img{
			margin-left:rem(175px);
			margin-top:rem(170px);
			img{
				width:rem(400px);
			}
		}
		p{
			padding:rem(30px) rem(50px) 0 rem(50px);
			font-size:rem(30px);
		}
	}





</style>
