<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div id="body" class="col-md-10 rounded-2 shadow-sm p-3 mb-5 bg-body rounded">
        <div class="row">
          <div class="col-md-12">
            <svg t="1635918298486" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1250" width="30" height="30"><path d="M647.529412 722.823529h256V150.588235H120.470588v572.235294h271.058824l120.470588 120.470589 120.470588-120.470589h15.058824z m-301.176471 120.470589H0V30.117647h1024v813.176471H677.647059L512 1008.941176 346.352941 843.294118z m-135.529412-466.82353h120.470589v120.470588h-120.470589v-120.470588z m240.941177 0h120.470588v120.470588h-120.470588v-120.470588z m240.941176 0h120.470589v120.470588h-120.470589v-120.470588z" fill="#FE4C49" p-id="1251"></path></svg>
            <span style="margin-left:10px">社区</span>
          </div>
          <div class="col-md-12">
            <span style="margin-left:50px;font-size:13px;">提示:点击"想要帮助"之前需要完成个人信息完善</span>
          </div>
          <div class="col-md-12" style="margin-top:20px">
            <div class="row d-flex justify-content-center">
              <Help></Help>
              <!-- <div class="col-md-12 d-flex justify-content-center">
                
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
name:'Community';
import Help from '@/components/community/Help.vue';
</script>

<style lang="scss" scoped>
#body{
  margin-top: 70px;
  background-color: white;
}
</style>