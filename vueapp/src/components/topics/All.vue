<template>
  <div class="all">
	<!-- 子组件-->
	<topic-list :topics="topics"></topic-list>

   <infinite-loading @infinite="infiniteHandler" v-show="loadingIsShow"></infinite-loading>

  </div>
</template>

<script>

//引入请求数据的模块
import {getTopicList} from "@/getData/topic.js"

//引入主题组件列表
import TopicList from "@/components/topics/TopicList"

//引入分页
import InfiniteLoading from 'vue-infinite-loading';


export default {
  name: 'All',
  data () {
    return {
      topics:[],
      //页面 原始的页码
      page:1,
      //控制 页面滑动到底 如有数据就显示loading 如没有 不显示
      loadingIsShow:true
    }
  },

   //钩子函数
   mounted(){    //第一页15条
	   getTopicList({limit:15,page:this.page}).then((data)=>{
		   this.topics = data.data.data
	   })
   },

  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        //加载
        getTopicList({limit:15,page:++(this.page)}).then(data=>{
          // console.log(data) 
          this.topics = this.topics.concat(data.data.data);
            if(data.data.data.length==0){
              this.loadingIsShow = false;
            }else{
              // 重新请求数据
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  // 加载基础的样式
@import "../../assets/sass/base.scss";

.all{
  margin-bottom: rem(100px);
}

</style>
