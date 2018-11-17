<template>
  <div class="insure">
    <headers :title="title"></headers>
    <div class="policy-holder">
      <p class="title">投保人信息</p>
      <ul class="container">
        <li>
          <span>姓名</span>
          <input type="text" placeholder="请输入投保人姓名">
        </li>
        <li>
          <span>证件类型</span>
          <p class="type">身份证</p>
        </li>
        <li>
          <span>证件号码</span>
          <input type="text" placeholder="请输入证件号码">
        </li>
        <li>
          <span>姓名</span>
          <input type="text" placeholder="请输入手机号码">
        </li>
      </ul>
    </div>
    <div class="policy-holder">
      <div class="empty"></div>
      <p class="title">被保人信息</p>
      <ul class="container">
        <li>
          <span>Ta是我的</span>
          <p class="type">本人</p>
        </li>
        <li>
          <span>姓名</span>
          <input type="text" placeholder="请输入被保人姓名">
        </li>
        <li>
          <span>证件类型</span>
          <p class="type" @click="showPicker">身份证</p>
        </li>
          <mt-popup v-model="popupVisible" position="bottom">
            <div class="picker-toolbar">
              <span class="mint-datetime-cancel" @click="cancle">取消</span>
              <span class="mint-datetime-confirm" @click="select">确定</span>
            </div>
            <mt-picker :slots="slots" ref='pickerObj'></mt-picker>
          </mt-popup>

        <li>
          <span>证件号码</span>
          <input type="text" placeholder="请输入证件号码">
        </li>
      </ul>
    </div>
    <div class="show-know">
      <p class="check-box">
        <span></span>
      </p>

      我已阅读
            <span class="green">
                投保须知
            </span>
      和
            <span class="green">
                保险条约
            </span>
    </div>
    <div class="foot">
      <p ></p>
    </div>
  </div>
</template>
<style scope>
  body { background: #f5f7fd; }
  .insure header { background: #fff url(../assets/imgs/back-arrow.png) no-repeat 1rem; background-size: 0.7rem 1.3rem; font: 0.9rem/3.1rem ''; color: #040404; text-align: center; }
  .insure .policy-holder { background: #fff; border-top: 1px solid #cccccc; border-bottom: 1px solid #cccccc; }
  .insure .policy-holder .empty { width: 100%; background: #f5f7fd; height: 1.2rem; border-bottom: 1px solid #f2f2f2; }
  .insure .policy-holder .title { text-align: center; background: #fafafa; font: 0.9rem/2.7rem ''; color: #2d2d2d; }
  .insure .policy-holder .container { padding-left: 0.5rem; }
  .insure .policy-holder .container li { display: -webkit-box; display: -ms-flexbox; display: flex; font: 0.75rem/2rem ''; border-bottom: 1px solid #e6e6e6; color: #999999; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; }
  .insure .policy-holder .container li span { display: inline-block; width: 5rem; margin-left: 0.5rem; }
  .insure .policy-holder .container li input { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; border: none; font: 0.75rem/2rem ''; }
  .insure .policy-holder .container li .type { font: 0.75rem/2rem ''; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; margin-right: 0.5rem; background: url(../assets/imgs/pull-arrow.png) no-repeat right; background-size: 0.75rem 0.45rem; }
  .insure .show-know { display: -webkit-box; display: -ms-flexbox; display: flex; font: 0.6rem/2rem ''; color: #999999; height: 2rem; padding-bottom: 4rem; }
  .insure .show-know .check-box { display: inline-block; margin-left: 1rem; padding-top: 0.3rem; margin-right: 0.5rem; }
  .insure .show-know .check-box span { display: inline-block; width: 0.95rem; height: 0.95rem; border-radius: 50%; border: 1px solid #fcb186; }
  .insure .show-know .green { color: #14c287; }
  .mint-popup{width: 100%}
</style>
<script>
  import headers from './common/headers';
  import Vue from 'vue';
  import { Picker,Popup } from 'mint-ui';
  Vue.component(Picker.name, Picker,Popup.name, Popup);
  export default{
    name:'insure',
    data(){
      return{
        title:'填写保单',
        popupVisible:false,
        slots:[{
          values: ['身份证', '内陆通行证', '护照']
        }]
      }

    },
    components:{
      headers
    },
    methods:{
      showPicker(){
        this.popupVisible = true;
      },
      cancle(){
        this.popupVisible=false;
      },
      select(){
        var pickerVal=this.$refs.pickerObj.getValues();
        console.log(this.$refs.pickerObj.getValues());
        this.popupVisible=false;
      }


    }

  }
</script>
