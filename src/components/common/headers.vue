<template>
  <div class="headers">{{title}}</div>
</template>

<script>
  export default{
    name:'headers',
    props:['title'],

  }
</script>
<style scoped>
  .headers { background: #fff url(../../assets/imgs/back-arrow.png) no-repeat 1rem; background-size: 0.7rem 1.3rem; font: 0.9rem/3.1rem ''; color: #040404; text-align: center; }
</style>
