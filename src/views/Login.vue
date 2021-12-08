<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div
        id="body"
        class="col-md-10 rounded-2 shadow-sm p-3 mb-5 bg-body rounded"
      >
        <div class="row">
          <div class="col-md-12">
            
            <span style="margin-left: 10px">登录账号</span>
          </div>
        </div>
        <div class="row d-flex justify-content-center" style="margin-top: 30px">
          <div class="col-md-4">
            <label class="form-label">账号</label>
            <input v-model="LogInfo.username" type="text" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">密码</label>
            <input v-model="LogInfo.password" type="password" class="form-control" />
          </div> 
        <div class="row" style="margin-top: 30px">
          <div class="col-md-12">
          <p style="color:blue" @click="reg()">注册账号</p>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >记住账号</label
              >
            </div>
            <button @click="login()" style="width: 100%" class="btn btn-primary" type="button">
              登录
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
name: "Login";
import { get, post } from "@/http/api.js";
import { reactive } from "@vue/reactivity";
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
const $router = useRouter();
const $store = useStore();
const LogInfo = reactive({
  username: '',
  password: '',
});
const login = () => {
  if ( LogInfo.username == ''){
    $store.commit('ShowHint','请输入账号');
  }
  else if ( LogInfo.password == ''){
    $store.commit('ShowHint','请输入密码');
  }
  else {
    let data = {
      username: LogInfo.username,
      password: LogInfo.password,
    };
    post("/api/v1/Login/", data).then((res) => {
      if (res.data.code == 200){
        Cookies.set('token',res.data.token, {expires:7});
        $router.push('/')
      }else{
        $store.commit('ShowHint',res.data.msg);
      }
    });
  }
};
const reg =()=>{
  $router.push('/register');
}
</script>

<style lang="scss" scoped>
#body {
  margin-top: 70px;
  background-color: white;
}
</style>
