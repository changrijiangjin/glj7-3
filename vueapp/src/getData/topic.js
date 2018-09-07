//用来请求数据的模块

//加载axios模块（用来发送ajax 的请求的）
import axios from 'axios';

//基本配置
var $http = axios.create({
    baseURL: 'https://www.vue-js.com/api/v1/',
    headers: {'X-Custom-Header': 'foobar'}
  });

//请求主题列表的函数
function getTopicList(params){  //此params 接受的是从 TopicList.vue 传来的 props

  //  默认的参数
  var newParams = Object.assign({
    limit:20  //设置查多少条数据
  },params) //此params接收上面的params

  //return 返回值 返回给上面的getTopicList() 谁调用返回给谁
  return $http({
    //请求方法
    method:'get',
    //请求的url 会拼接到 baseURL 中
    url:'/topics',
    params:newParams
  })

}

//查主题 内容的函数
function getContentShow(id){
  return $http({
    method:'get',
    url:'/topic/'+id,
  })
}


//暴露出去
export {getTopicList,getContentShow}