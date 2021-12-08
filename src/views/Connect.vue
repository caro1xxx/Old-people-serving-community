<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div
        id="body"
        class="col-md-10 rounded-2 shadow-sm p-3 mb-5 bg-body rounded"
      >
        <div class="row">
          <div class="col-md-12">
            <span style="margin-left: 10px">联系管理员</span>
          </div>
          <div class="col-md-12" style="padding:20px">
            <textarea v-model="content" class="form-control" aria-label="With textarea"></textarea>
          </div>
          <div class="col-md-12 d-flex justify-content-end">
            <button type="button" class="btn btn-primary" @click="BackProblem()">发送问题</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name: "Connect";
import { get, post } from "@/http/api.js";
import { reactive, ref } from "@vue/reactivity";
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
const $router = useRouter();
const $store = useStore();
const content = ref('')
const BackProblem =() =>{
    if (Cookies.get('token') == undefined){
        $store.commit('ShowHint','请先登录');
        $router.push('/login');
    }else{
        post('/api/v1/Back/',{token:Cookies.get('token'),content:content.value})
        .then((res)=>{
            console.log(res);
            $store.commit('ShowHint',res.data.msg);
        })
    }
};
</script>

<style lang="scss" scoped>
#body {
  margin-top: 70px;
  background-color: white;
}
</style>
