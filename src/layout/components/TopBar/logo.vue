<template>
  <div class="g-logo">
    <p><i class="u-logo"></i> 学院</p>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="less" scoped>
.g-logo {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  border-bottom: 1px solid #fff;
  &>p {
    display: flex;
    justify-content: center;
  }
  .u-logo {
    display: inline-block;
    width: 30px;
    height: 50px;
    background: url('../../../assets/logo.png') center center no-repeat;
    background-size: 60%;
  }
}
</style>
