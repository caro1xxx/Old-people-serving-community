<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div id="body" class="col-md-10 rounded-2 shadow-sm p-3 mb-5 bg-body rounded">
        <div class="row">
          <div class="col-md-12">
            <svg t="1635942653588" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5200" width="30" height="30"><path d="M512 136c-208 0-376 144-376 320 0 108.8 64 209.6 172.8 268.8 11.2 6.4 25.6 1.6 32-9.6 6.4-11.2 1.6-25.6-9.6-32-92.8-51.2-147.2-136-147.2-227.2 0-150.4 147.2-272 328-272s328 121.6 328 272-147.2 272-328 272c-6.4 0-12.8 3.2-17.6 6.4l-86.4 86.4V752c0-12.8-11.2-24-24-24s-24 11.2-24 24v128c0 9.6 6.4 19.2 14.4 22.4 3.2 1.6 6.4 1.6 9.6 1.6 6.4 0 12.8-3.2 17.6-6.4l121.6-121.6c203.2-4.8 366.4-145.6 366.4-320-1.6-176-169.6-320-377.6-320z" p-id="5201" fill="#13227a"></path><path d="M312 424h400c12.8 0 24-11.2 24-24s-11.2-24-24-24h-400c-12.8 0-24 11.2-24 24s11.2 24 24 24zM312 568H624c12.8 0 24-11.2 24-24s-11.2-24-24-24H312c-12.8 0-24 11.2-24 24s11.2 24 24 24z" p-id="5202" fill="#13227a"></path></svg>
            <span style="margin-left:10px">消息</span>
          </div>
          <div class="col-md-12" id="msg">
            <div class="row" style="border:1px solid #000;padding:10px">
              <div v-if="Show.state" class="col-md-12">
                <div v-for="item,index in Info.data" :key="index" style="margin-bottom:10px">
                    <div>
                      {{ item.fields.name }} &nbsp;&nbsp;{{ item.fields.title }} &nbsp;&nbsp;&nbsp;&nbsp;{{ item.fields.uploaded_date }}
                    </div>
                    <div>
                      {{ item.fields.content }} 
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12" style="padding:0px 40px">
            <div class="input-group mb-3">
              <input v-model="Notify_data.content" type="text" class="form-control" placeholder="请输入你想要发送的内容" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="Create_Notify()">发送</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name:'Message';
import { get, post } from "@/http/api.js";
import { reactive, ref } from "@vue/reactivity";
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { onMounted } from "@vue/runtime-core";
const $router = useRouter();
const $store = useStore();
const getMsg = () => {
    get('/api/v1/GetMessage/')
        .then((res)=>{
            Info.data = JSON.parse(res.data.data);
            Show.state = true;
        })
};
const Show = reactive({
    state:false
})
const Info = reactive({
    data:{
    model:String,
    pk:Number,
    fields:{
        token:String,
        title:String,
        content:String,
        uploaded_date:String,
    }
  }
})
onMounted(()=>{
    getMsg();
});
const Notify_data = reactive({
    title:'消息',
    content:'',
})
// 通知
const Create_Notify = () => {
  if (Cookies.get('token') == undefined){
    $store.commit('ShowHint','请先登录');
    $router.push('/login')
  }else{
    Show.state = false;
    let data ={
        title:Notify_data.title,
        content:Notify_data.content,
        token:Cookies.get('token'),
    }
    post('/api/v1/Notify/',data)
        .then((res)=>{
            // console.log(res);
            getMsg()
            Notify_data.content = ''
             $store.commit('ShowHint','发送成功');
        })
  }
};
</script>

<style lang="scss" scoped>
#body{
  margin-top: 70px;
  background-color: white;
}
#msg{
    padding:10px 50px;
}
</style>