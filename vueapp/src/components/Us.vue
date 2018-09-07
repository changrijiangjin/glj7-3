<template>
<div class="us">
	<div class="content">
		<h1>关于</h1>
		<hr>
		<p>Vue中文社区是全球最大的Vueframework中文开源技术社区，致力于Vue在中国的学习、推广、研究工作。</p>
		<p>Vue中文社区正在努力建设中，如果你有什么想法，欢迎<a>吐槽</a>。</p>
	</div>
</div>
</template>

<script>
export default {
  name: 'Us',
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
		padding:rem(50px);
		h1{
			color:#333;
		}
		hr{
			margin:rem(20px) 0;
		}
		p{
			font-size:rem(30px);
			line-height:rem(70px);
		}
	}


</style>
