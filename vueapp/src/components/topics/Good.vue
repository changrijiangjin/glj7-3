<template>
  <div class="good">
    <topic-list :topics="topics"></topic-list>

		<infinite-loading @infinite="infiniteHandler" v-show="loadingIsShow"></infinite-loading>
  </div>
</template>

<script>
	//引入请求数据的模块
	import {getTopicList} from "@/getData/topic"

	//引入主题列表组件
	import TopicList from "@/components/topics/TopicList"

	import InfiniteLoading from 'vue-infinite-loading';

	export default{
		name:'good',
		data(){
			return{
				topics:[],
				page:1,
				loadingIsShow:true
			}
		},

		//钩子函数
		mounted(){
			//调用查询条件的函数
			getTopicList({tab:'good',limit:15}).then((data)=>{
				this.topics = data.data.data
			});
		},

		methods: {
			infiniteHandler($state) {
				setTimeout(() => {
					getTopicList({limit:15,tab:'good',page:++(this.page)}).then((data)=>{
						this.topics = this.topics.concat(data.data.data);
						if(data.data.data.length==0){
							this.loadingIsShow = false;
						}else{
							$state.loaded();
						}
					})
				}, 1000);
			}
		},
		//加载组件
		components:{
			TopicList,
			InfiniteLoading
		}

	}

</script>

<style lang="scss">

  // 加载基础的样式
@import "../../assets/sass/base.scss";

.good{
  margin-bottom: rem(100px);
}
	
</style>