<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div
        id="body"
        class="col-md-10 rounded-2 shadow-sm p-3 mb-5 bg-body rounded"
      >
        <div class="row">
          <div class="col-md-12">
            <span style="margin-left: 10px">老人反馈</span>
          </div>
          <div v-if="show">
                <div v-for="item,index in ProblemData.data" :key="index" class="col-md-12" style="padding:0px 20px;">
                    <div class="alert alert-primary" role="alert">
                    老人{{ item.fields.name }}:{{ item.fields.content }}&nbsp;&nbsp;&nbsp;<span @click="check()">查看详情</span>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name: "ElderManage";
import { get, post } from "@/http/api.js";
import { reactive, ref } from "@vue/reactivity";
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { onMounted } from "@vue/runtime-core";
const $router = useRouter();
const $store = useStore();
const show = ref(false);
const ProblemData = reactive({
    data:{
        model:String,
        pk:Number,
        fields:{
            token:String,
            name:String,
            content:String,
            uploaded_date:String,
        }
    }
});
const check = (msg) => {
    alert(msg);
}
const getProblem = () =>{
    get('/api/v1/Problem/')
        .then((res)=>{
            ProblemData.data = JSON.parse(res.data.data);
            show.value=true;
            // console.log(res.data.data);
        })
};
onMounted(()=>{
    getProblem();
})
</script>

<style lang="scss" scoped>
#body {
  margin-top: 70px;
  background-color: white;
}
</style>
