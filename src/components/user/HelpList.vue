<template>
    <div v-if="Show.list" class="col-md-12">
        <div class="row">
            <div v-for="item,index in User_HelpTask_info.data" :key="index" class="col-md-12 border-bottom">
                <h5>{{item.fields.title}}&nbsp;&nbsp;&nbsp;<span @click="Check(item.pk)" style="font-size:14px;color:rgb(124, 165, 240)">查看详情</span></h5>
                <p>{{item.fields.content}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'HelpList';
import { post,get } from '@/http/api.js';
import Cookies from 'js-cookie';
import { onMounted, reactive } from '@vue/runtime-core';
import { useRouter} from 'vue-router';
import { useStore } from 'vuex';
const $store = useStore();
const $router = useRouter;
const getHelpTask = () => {
    post('/api/v1/UserTask/',{token:Cookies.get('token')})
        .then((res)=>{
            if(res.data.code == 200){
                User_HelpTask_info.data = JSON.parse(res.data.data)
                Show.list = true;
            }
        })
};
onMounted(()=>{
    getHelpTask();
});
const User_HelpTask_info = reactive({
    data:{
        model:String,
        pk:Number,
        fields:{
            token:String,
            help_task_id:String,
            title:String,
            content:String,
        }
    }
});
// 查看详细信息
const Check = (id) => {
    post('/api/v1/Check/',{id:id})
        .then((res)=>{
            alert(`标题:${res.data.title}`+'\n'+`内容:${res.data.content}`+'\n'+`老人:${res.data.elder_name}`+'\n'+`地址:${res.data.address}`+'\n'+`领取状态:${res.data.receive_state}`+'\n'+`时间:${res.data.uploaded_date}`)
        })
}
const Show = reactive({
    list:false,
})
</script>

<style lang="scss" scoped>

</style>