<template>
  <div class="share">
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

export default {
  name: 'Share',
  data () {
    return {
      topics:[],
      loadingIsShow:true,
      page:1
    }
  },

   // 钩子函数
	mounted(){
   //调用查询数据的函数
	 getTopicList({tab:'share'}).then((data)=>{
		 this.topics = data.data.data
	 });
	},

   methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        getTopicList({tab:'share',limit:15,page:++(this.page)}).then((data)=>{
          this.topics = this.topics.concat(data.data.data);
          if(data.data.data==0){
            this.loadingIsShow = false
          }else{
            $state.loaded();
          }
        })
       
      }, 1000);
    },
  },

	//加载组件
	components:{
		TopicList,
    InfiniteLoading
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  // 加载基础的样式
@import "../../assets/sass/base.scss";

.share{
  margin-bottom: rem(100px);
}


</style>
