<template>
    <div v-if="isShowList.loading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">loading...</span>
    </div>
    <!-- <div v-if="isShowList.error" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">{{ isShowList.msg }}</span>
    </div> -->
    <div v-if="isShowList.state">
        <div v-for="item,index in HelpTaskInfo.data" :key="index" id="Help" class="row border-bottom">
            <div class="col-md-12">
                <h5>{{ item.fields.title }}</h5>
            </div>
            <div class="col-md-12">
                <p>{{ item.fields.content }}</p>
            </div>
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-8">
                        <p>{{ item.fields.uploaded_date }}</p>
                    </div>
                    <div class="col-md-4 d-flex justify-content-end">
                        <span style="line-height:40px" @click="Check(item.pk)">查看详细信息</span>
                        <!-- &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-secondary">留言</button> -->
                        &nbsp;&nbsp;&nbsp;&nbsp;<button type="button" class="btn btn-primary" @click="Add(item.pk)">我想帮助</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
name:'Help';
import { post,get } from '@/http/api.js';
import Cookies from 'js-cookie';
import { onMounted, reactive } from '@vue/runtime-core';
import { useRouter} from 'vue-router';
import { useStore } from 'vuex';
const $store = useStore();
const $router = useRouter;
const getHelpTaskList = () => {
    get('/api/v1/HelpTaskList/')
        .then((res)=>{
            if(res.data.code == 200){
                HelpTaskInfo.data = JSON.parse(res.data.data)
                setTimeout(()=>{
                    isShowList.state = true;
                    isShowList.loading = false;
                },1000);
            }else {
                isShowList.msg = res.data.msg;
                isShowList.error = true;
            }
            
        })
};
const HelpTaskInfo = reactive({
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
            reactive_state:Boolean,
        },
    }
});
const isShowList =reactive({
    state:false,
    loading:true,
    error:false,
    msg:'加载失败,请重试',
})
onMounted(()=>{
    getHelpTaskList();
});
// 添加帮助任务
const Add = (id) => {
    if (Cookies.get('token')==undefined){
        $store.commit('ShowHint','请先登录')
    }else {
        let data = {token:Cookies.get('token'),id:id};
        post('/api/v1/Add/',data)
            .then((res)=>{
                if(res.data.code == 200){
                    $store.commit('ShowHint','添加成功,请前往个人页面查看')
                }else{
                    isShowList.loading=false
                    $store.commit('ShowHint',res.data.msg)
                }
            })
    }
};
// 查看详细信息
const Check = (id) => {
    post('/api/v1/Check/',{id:id})
        .then((res)=>{
            alert(`标题:${res.data.title}`+'\n'+`内容:${res.data.content}`+'\n'+`老人:${res.data.elder_name}`+'\n'+`地址:${res.data.address}`+'\n'+`领取状态:${res.data.receive_state}`+'\n'+`时间:${res.data.uploaded_date}`)
        })
}
</script>

<style lang="scss" scoped>
#Help{
    box-shadow: 2px 2px 2px 2px #0D6EFD;
    margin: 10px 10px;
    padding: 10px 10px;
    
}
</style>