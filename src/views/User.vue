<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div id="body" class="col-md-10 rounded-2 shadow-sm p-3 mb-5 bg-body rounded">
        <div class="row">
          <div class="col-md-6">
            <div class="col-md-12">
              <svg t="1635933298951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2958" width="30" height="30"><path d="M831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169zM895.884854 831.998871A63.835408 63.835408 0 0 1 831.912173 895.884854H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V192.001129A64.236389 64.236389 0 0 1 192.087827 127.880338h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129v639.997742z" fill="#1296db" p-id="2959"></path><path d="M791.998335 351.851551h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM791.998335 607.973471h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM344.001722 527.997686c-61.855792 0-111.985607 50.144265-111.985607 111.985606s50.144265 111.985607 111.985607 111.985607 111.985607-50.144265 111.985606-111.985607-50.129815-111.985607-111.985606-111.985606z m33.982213 145.982269a48.045438 48.045438 0 1 1 14.088511-33.982213 47.745605 47.745605 0 0 1-14.088511 33.985826zM417.395643 297.394035L311.999125 402.78694 270.6078 361.392003a31.970084 31.970084 0 1 0-45.213286 45.213285l63.997968 64.001581a31.970084 31.970084 0 0 0 45.213286 0l127.999548-127.999549a31.970084 31.970084 0 0 0-45.209673-45.213285z" fill="#1296db" p-id="2960"></path></svg>
              <span style="margin-left:10px">帮助任务</span>
            </div>
            <div class="col-md-12">
              <span style="margin-left:50px;font-size:13px;">提示:在社区中添加的帮助任务都将在此显示</span>
            </div>
            <div id="list" class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <HelpList></HelpList>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-md-6" style="margin-top:20px">
          <div class="col-md-12">
            <svg t="1635930624972" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1850" width="30" height="30"><path d="M978.666667 920.58a53.3 53.3 0 0 1-52.82 60.753333H55.473333A53.3 53.3 0 0 1 2.666667 920.58c4.126667-28.78 12.893333-53.113333 26.786666-74.38 12.626667-19.333333 29.166667-35.56 50.58-49.66 38.1-25.086667 86.266667-39.6 137.266667-54.973333 20.433333-6.153333 41.56-12.52 62.666667-19.76 44-15.066667 68.606667-45.506667 75.046666-92.873334l-6.793333-5.093333a148.666667 148.666667 0 0 1-57.7-94.92l-3.073333-18.453333c-10.186667-2.866667-20.846667-9.513333-29.9-23.013334-8.62-12.873333-13.606667-28.8-18-42.846666-1.866667-5.96-3.626667-11.586667-5.42-16.186667C224.593333 404 218.666667 374.96 218.666667 352.666667c0-22.613333 9.58-35.786667 17.62-42.853334a50.12 50.12 0 0 1 19.713333-10.6V158.493333a85.073333 85.073333 0 0 1 37.433333-70.606666C328.913333 58.32 390 34.78 475.06 17.913333 538.873333 5.253333 600.08 0 618.666667 0a21.333333 21.333333 0 0 1 15.086666 36.42c-9.253333 9.253333-18.473333 19.3-25.866666 28l49.853333 10.593333A85.333333 85.333333 0 0 1 725.333333 158.493333v140.72a50.12 50.12 0 0 1 19.713334 10.6c8.04 7.066667 17.62 20.24 17.62 42.853334 0 22.293333-5.926667 51.333333-15.46 75.753333-1.793333 4.6-3.553333 10.226667-5.42 16.186667-4.4 14.046667-9.386667 30-18 42.846666-9.053333 13.5-19.713333 20.146667-29.9 23.013334l-3.073334 18.453333a148.666667 148.666667 0 0 1-57.7 94.92l-6.793333 5.093333c6.44 47.366667 31.073333 77.806667 75.046667 92.873334 21.126667 7.24 42.253333 13.606667 62.666666 19.76 51 15.373333 99.166667 29.886667 137.266667 54.973333 21.413333 14.1 37.953333 30.346667 50.58 49.66 13.913333 21.266667 22.673333 45.6 26.786667 74.38zM917.333333 298.666667h85.333334a21.333333 21.333333 0 0 0 0-42.666667h-85.333334a21.333333 21.333333 0 0 0 0 42.666667z m85.333334 469.333333h-21.333334a21.333333 21.333333 0 0 0 0 42.666667h21.333334a21.333333 21.333333 0 0 0 0-42.666667z m0-256h-128a21.333333 21.333333 0 0 0 0 42.666667h128a21.333333 21.333333 0 0 0 0-42.666667z" fill="#3fcb85" p-id="1851"></path></svg>
            <span style="margin-left:10px">个人</span>
            <!-- <span style="margin-left:10px;color:blue">退出登录</span> -->
          </div>
          <div v-if="Show.state" id="list" class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <label class="form-label">账号:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.username }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">密码:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.password }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">名字:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.name }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">权限:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.authority }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">token:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.token }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">性别:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.sex }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">出生日期:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.dob }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">居住地址:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.address }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">身份证:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.idnum }}</label>
                </div>
                <div class="col-md-12">
                  <label class="form-label">联系方式:</label>
                  <label class="form-label">{{ UserInfo.data[0].fields.tel }}</label>
                </div>
                <div class="col-md-12 d-flex justify-content-end">
                  <button style="margin-right:20px" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">修改信息</button>
                  <button type="button" class="btn btn-danger" @click="remove()">退出登录</button>
                </div>
              </div>

              <!-- 密码odal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">修改密码</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>密码</p>
                      <input type="text" class="form-control" v-model="UserInfo.data[0].fields.password">
                      <p>姓名</p>
                      <input type="text" class="form-control" v-model="UserInfo.data[0].fields.name">
                      <p>出生日期</p>
                      <input type="text" class="form-control" v-model=" UserInfo.data[0].fields.dob">
                      <p>性别</p>
                      <input type="text" class="form-control" v-model="UserInfo.data[0].fields.sex">
                      <p>地址</p>
                      <input type="text" class="form-control" v-model="UserInfo.data[0].fields.address">
                      <p>联系方式</p>
                      <input type="text" class="form-control" v-model="UserInfo.data[0].fields.tel">
                      
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                      <button  @click="UpdateUserInfo()" type="button" class="btn btn-primary" data-bs-dismiss="modal">保存</button>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name:'User';
import { get, post } from "@/http/api.js";
import { reactive, ref } from "@vue/reactivity";
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
const $router = useRouter();
const $store = useStore();
import HelpList from '@/components/user/HelpList.vue';
import { onMounted } from "@vue/runtime-core";
// 获取用户信息
const getUserInfo =() =>{
  post('/api/v1/Token/',{token:Cookies.get('token')})
    .then((res)=>{
      if(res.data.code == 200){
        UserInfo.data = JSON.parse(res.data.data);
        Show.state = true;
      }
    })
};
const UserInfo = reactive({
  data:{
    model:String,
    pk:Number,
    fields:{
        username:String,
        password:String,
        authority:String,
        token:String,
        name:String,
        dob:String,
        sex:String,
        address:String,
        idnum:String,
        tel:String
    }
  }
});
const Show = reactive({
  state:false
});
const values = ref('');
// 修改信息
const UpdateUserInfo =() =>{
  let data = {token:Cookies.get('token'),
              password:UserInfo.data[0].fields.password,
              name:UserInfo.data[0].fields.name,
              dob:UserInfo.data[0].fields.dob,
              sex:UserInfo.data[0].fields.sex,
              address:UserInfo.data[0].fields.address,
              tel:UserInfo.data[0].fields.tel,
              }
  post('/api/v1/Update/',data)
    .then((res)=>{
      Show.state = false;
      getUserInfo();
      $store.commit('ShowHint','修改成功');
    })
};
onMounted(()=>{
  getUserInfo();
});
const remove =() => {
  Cookies.remove('token');
  $router.push('/login');
}
</script>

<style lang="scss" scoped>
#body{
  margin-top: 70px;
  background-color: white;
}
#list{
    padding: 10px 50px;
}
</style>