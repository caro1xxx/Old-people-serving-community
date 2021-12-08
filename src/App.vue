<template>
<div class="container-fluid position-relative" id="body">
  <div class="row">
    <div v-if="hit.state" id="hint" class="col-md-12 position-absolute top-0 start-50 translate-middle-x">
      {{ $store.state.msg }}
    </div>
    <div class="col-md-8 offset-md-2">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">
            独居老人服务社区
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">社区</router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="Show.login" class="nav-link active" aria-current="page" to="/login">登录</router-link>
                <router-link v-if="!Show.login" class="nav-link active" aria-current="page" to="/user">个人</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/message">消息</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/manage">管理</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/connect">联系</router-link>
              </li>
              <li v-if="showmanage" class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/eldermanage">反馈管理</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>
<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { get, post } from "@/http/api.js";
const $store = useStore();
const hit = reactive({
  state:false,
});
watch(()=> $store.state.state,
  ((val,old)=>{
    hit.state =true;
    setTimeout(()=>{
        hit.state =false;
    },1500);
  })
);
const Show = reactive({
  state:false,
  login:false,
});
const Showlogin = () => {
  setInterval(()=>{
    if (Cookies.get('token') == undefined){
      Show.login = true;
    }else{
      Show.login = false;
    }
  },500);
}
onMounted(()=>{
  Showlogin();
  Vif();
});
// 验证是否管理员
const Vif =() =>{
  post('/api/v1/Vif/',{token:Cookies.get('token')})
    .then((res)=>{
      if (res.data.data == '管理员'){
        showmanage.value = true;
      }
    })
};
const showmanage = ref(false);
</script>
<style lang="scss" scoped>
#body{
  nav{
    color:white;
  }
}
#hint{
  margin-top:55px;
  background-color: #FFF3CD;
  padding: 20px 0px;
  text-align: center;
}
</style>
