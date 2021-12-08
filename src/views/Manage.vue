<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div id="body" class="col-md-10 rounded-2 shadow-sm p-3 mb-5 bg-body rounded">
        <div class="row">
          <div class="col-md-12">
            <svg t="1635944542615" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6213" width="30" height="30"><path d="M384 96H192a96 96 0 0 0-96 96v192a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96V192a96 96 0 0 0-96-96z m32 288a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V192a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v192zM384 544H192a96 96 0 0 0-96 96v192a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96v-192a96 96 0 0 0-96-96z m32 288a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v192zM832 544h-192a96 96 0 0 0-96 96v192a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96v-192a96 96 0 0 0-96-96z m32 288a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v192z" p-id="6214" fill="#1296db"></path><path d="M736 288m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z" p-id="6215" fill="#1296db"></path></svg>
            <span style="margin-left:10px;margin-right:20px">管理</span>
            <span style="margin-left:10px;color:blue;margin-right:20px" data-bs-toggle="modal" data-bs-target="#exampleModa2">点我创建帮助</span>
            <span style="margin-left:10px;color:blue" data-bs-toggle="modal" data-bs-target="#exampleModa3">点我发送消息</span>
          </div>
        </div>
        <div class="row" style="margin-top:10px">
            <div class="col-md-2  d-flex justify-content-center">
                <span style="margin-left:10px">标题</span>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <span style="margin-left:10px">老人</span>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <span style="margin-left:10px">联系方式</span>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <span style="margin-left:10px">居住地址</span>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <span style="margin-left:10px">创建时间</span>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
                <span style="margin-left:10px">操作</span>
            </div>
        </div>
        <div v-if="Show.state">
            <div v-for="item,index in Info.data" :key="index" class="row" style="margin-top:10px">
                <div class="col-md-2  d-flex justify-content-center">
                    <span style="margin-left:10px">{{ item.fields.title }}</span>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <span style="margin-left:10px">{{ item.fields.elder_name }}</span>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <span style="margin-left:10px">{{ item.fields.tel }}</span>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <span style="margin-left:10px">{{ item.fields.address }}</span>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <span style="margin-left:10px">{{ item.fields.uploaded_date }}</span>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <span style="margin-left:10px;color:red" @click="DeleteTask(item.pk)">删除</span>
                    <span style="margin-left:10px;color:blue" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="Single_Task(item.pk)">编辑</span>
                </div>
            </div>
        </div>

        <!-- 修改Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">修改</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>标题</p>
                      <input type="text" class="form-control" v-model="rongqi.title">
                        <p>内容</p>
                      <input type="text" class="form-control" v-model="rongqi.content">
                        <p>老人</p>
                      <input type="text" class="form-control" v-model="rongqi.elder_name">
                        <p>联系方式</p>
                      <input type="text" class="form-control" v-model="rongqi.tel">
                        <p>居住地址</p>
                      <input type="text" class="form-control" v-model="rongqi.address">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                      <button  type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="Edit_Task()">保存</button>
                    </div>
                  </div>
                </div>
              </div>
            <!-- 创建Modal -->
              <div class="modal fade" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">创建</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>标题</p>
                      <input type="text" class="form-control" v-model="create_rongqi.title">
                        <p>内容</p>
                      <input type="text" class="form-control" v-model="create_rongqi.content">
                        <p>老人</p>
                      <input type="text" class="form-control" v-model="create_rongqi.elder_name">
                        <p>联系方式</p>
                      <input type="text" class="form-control" v-model="create_rongqi.tel">
                        <p>居住地址</p>
                      <input type="text" class="form-control" v-model="create_rongqi.address">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                      <button  type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="Create_Task()">保存</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 通知Modal -->
              <div class="modal fade" id="exampleModa3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">消息</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>标题</p>
                      <input type="text" class="form-control" v-model="Notify_data.title">
                        <p>内容</p>
                      <input type="text" class="form-control" v-model="Notify_data.content">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                      <button  type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="Create_Notify()">保存</button>
                    </div>
                  </div>
                </div>
              </div>



      </div>
    </div>
  </div>
</template>

<script setup>
name:'Manage';
import { get, post } from "@/http/api.js";
import { reactive, ref } from "@vue/reactivity";
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { onMounted } from "@vue/runtime-core";
const $router = useRouter();
const $store = useStore();
const Manage = () => {
    get('/api/v1/Manage/')
        .then((res)=>{
            if(res.data.code == 200){
                Info.data = JSON.parse(res.data.data);
                // console.log(res.data);
                Show.state = true;
            }
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
        title:String,
        content:String,
        elder_name:String,
        tel:String,
        address:String,
        uploaded_date:String,
        receive_state:String,
    }
  }
});
const rongqi = reactive({
    title:'',
    content:'',
    elder_name:'',
    tel:'',
    address:'',
    pk:0,
});
// create
const create_rongqi = reactive({
    title:'',
    content:'',
    elder_name:'',
    tel:'',
    address:'',
    pk:0,
});
onMounted(()=>{
    Manage();
});
// 删除
const DeleteTask = (id) => {
  if (Cookies.get('token') == undefined){
    $store.commit('ShowHint','请先登录');
    $router.push('/login')
  }
  else{
    post('/api/v1/Delete/',{id:id})
        .then((res)=>{
            Show.state = false;
            if(res.data.code == 200){
                $store.commit('ShowHint','删除成功');
                Manage();
            }else{
                $store.commit('ShowHint','删除失败');
                Manage();
            }
        })
  }
};
const Single_Task = (id) => {
    post('/api/v1/Single/',{id:id})
        .then((res)=>{
            rongqi.title = res.data.title
            rongqi.content = res.data.content
            rongqi.elder_name = res.data.elder_name
            rongqi.tel = res.data.tel
            rongqi.address = res.data.address
            rongqi.pk = res.data.pk
        })
};
// 修改
const Edit_Task = () => {
  if (Cookies.get('token') == undefined){
    $store.commit('ShowHint','请先登录');
    $router.push('/login')
  }
  else{
    let data ={
        id:rongqi.pk,
        title:rongqi.title,
        content:rongqi.content,
        elder_name:rongqi.elder_name,
        tel:rongqi.tel,
        address:rongqi.address
    }
    post('/api/v1/Edit/',data)
        .then((res)=>{
             $store.commit('ShowHint','修改成功');
            Show.state = false;
            // console.log(res.data);
            Manage();
        })
  }
};
// 创建
const Create_Task = () => {
    let data ={
        title:create_rongqi.title,
        content:create_rongqi.content,
        elder_name:create_rongqi.elder_name,
        tel:create_rongqi.tel,
        address:create_rongqi.address
    }
    post('/api/v1/Create/',data)
        .then((res)=>{
             $store.commit('ShowHint','创建成功');
            Show.state = false;
            // console.log(res.data);
            Manage();
        })
};
const Notify_data = reactive({
    title:'',
    content:'',
})
// 通知
const Create_Notify = () => {
  if (Cookies.get('token') == undefined){
    $store.commit('ShowHint','请先登录');
    $router.push('/login')
  }else{
    let data ={
        title:Notify_data.title,
        content:Notify_data.content,
        token:Cookies.get('token'),
    }
    post('/api/v1/Notify/',data)
        .then((res)=>{
            console.log(res);
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