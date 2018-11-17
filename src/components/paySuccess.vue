<template>
<div class="payment-success">
  <div class="banner">
    <img src="../assets/imgs/check-icon.png">
    <p>付款成功</p>
  </div>
  <div class="order-info">
    <p class="ub">
      <span class="lt">订单号:</span>
      <span class="rt orange ub-f1">1233333333333</span>
    </p>
    <p>
      <span class="lt">会员卡号:</span>
      <span class="rt">1233333333333</span>
    </p>
    <p>
      <span class="lt">合计:</span>
      <span class="rt price orange">¥122</span>
    </p>
  </div>
</div>
</template>
<script>
  export default {
    name: 'paySuccess',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped="">
  body{
    background: #f5f5f5;
  }
  .payment-success {
  .banner {
    text-align: center;
    height: 5rem;
    background: -webkit-linear-gradient(left, #ff6f00, #ffd000); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #ff6f00, #ffd000); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #ff6f00, #ffd000); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ff6f00, #ffd000);
    width: 100%;
    position: relative;
  img {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 50%;
    left: 4.5rem;
    margin-top: -1rem;
  }

  p {
    font: 1rem/5rem '';
    color: #fff;
  }

  }
  .order-info {
    margin-top:0.55rem;
  p {
    display: flex;
    font:0.6rem/1.2rem '';
    color:#9f9f9f;
  .lt {
    margin-left: 0.7rem;
    letter-spacing:0.1rem;
  }
  .rt{
    flex: 1;
    margin-left: 0.55rem;
    color:#333333;
    text-align:left;
  &.orange{
     color:#ff7f00;
   }
  &.price{
     font:0.7rem/1.2rem '';
     letter-spacing:0.1rem;
   }
  }

  }
  }
  }

</style>
