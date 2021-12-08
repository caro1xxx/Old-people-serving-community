<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div
        id="body"
        class="col-md-10 rounded-2 shadow-sm p-3 mb-5 bg-body rounded"
      >
        <div class="row">
          <div class="col-md-12">
            <span style="margin-left: 10px">注册账号</span>
          </div>
        </div>
        <div class="row" style="margin-top: 30px">
          <div class="col-md-4">
            <label class="form-label">账号</label>
            <input v-model="RegInfo.username" type="text" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">密码</label>
            <input v-model="RegInfo.password" type="password" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">重复密码</label>
            <input v-model="RegInfo.repassword" type="password" class="form-control" />
            <div class="form-text">请重复上一次密码</div>
          </div>
          <div class="col-md-2">
            <label class="form-label">姓名</label>
            <input v-model="RegInfo.name" type="text" class="form-control" />
            <div class="form-text">请填写真实姓名</div>
          </div>
          <div class="col-md-1">
            <label class="form-label">性别</label>
            <input v-model="RegInfo.sex" type="text" class="form-control" />
          </div>
          <div class="col-md-3">
            <label class="form-label">出生日期</label>
            <input v-model="RegInfo.dob" type="text" class="form-control" />
          </div>
          <div class="col-md-3">
            <label class="form-label">联系方式</label>
            <input v-model="RegInfo.tel" type="text" class="form-control" />
            <div class="form-text">默认手机号</div>
          </div>
          <div class="col-md-6">
            <label class="form-label">身份证</label>
            <input v-model="RegInfo.idnum" type="text" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label">居住地址</label>
            <input v-model="RegInfo.address" type="text" class="form-control" />
          </div>
        </div>
        <div class="row" style="margin-top: 30px">
          <div class="col-md-12">
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
            <button @click="Reg()" style="width: 100%" class="btn btn-primary" type="button">
              注册
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name: "Register";
import { get, post } from "@/http/api.js";
import { reactive } from "@vue/reactivity";
import { useStore } from 'vuex';
// import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
const $router = useRouter();
const $store = useStore();
const RegInfo = reactive({
  username: '',
  password: '',
  repassword: '',
  name: '',
  dob: '',
  sex: '',
  address: '',
  idnum: '',
  tel: '',
});
const Reg = () => {
  if ( RegInfo.username == ''){
    $store.commit('ShowHint','请输入账号');
  }
  else if ( RegInfo.password == ''){
    $store.commit('ShowHint','请输入密码');
  }
  else if ( RegInfo.repassword != RegInfo.password){
    $store.commit('ShowHint','两次密码不一致');
  }
  else if ( RegInfo.name == ''){
    $store.commit('ShowHint','请输入姓名');
  }
  else if ( RegInfo.dob == ''){
    $store.commit('ShowHint','请输入出生日期');
  }
  else if ( RegInfo.sex == ''){
    $store.commit('ShowHint','请输入性别');
  }
  else if ( RegInfo.address == ''){
    $store.commit('ShowHint','请输入居住地址');
  }
  else if ( RegInfo.idnum == ''){
    $store.commit('ShowHint','请输入身份证');
  }
  else if ( RegInfo.tel == ''){
    $store.commit('ShowHint','请输入联系方式');
  }
  else {
    let data = {
      username: RegInfo.username,
      password: RegInfo.password,
      name: RegInfo.name,
      dob: RegInfo.dob,
      sex: RegInfo.sex,
      address: RegInfo.address,
      idnum: RegInfo.idnum,
      tel: RegInfo.tel,
    };
    post("/api/v1/Register/", data).then((res) => {
      if (res.data.code == 200){
        // Cookies.set('token',res.data.token, {expires:7});
        $router.push('/login');
        $store.commit('ShowHint','注册成功');
      }else{
        $store.commit('ShowHint',res.data.msg);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#body {
  margin-top: 70px;
  background-color: white;
}
</style>
