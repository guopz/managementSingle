<template>
  <div class="error-wrapper">
    <div class="cw">
      <div class="cw-1"></div>
      <div class="cw-2">
        <div class="cw-3">
          <a href="#/">返回首页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.error-wrapper {
  background-color: #76c5f0;
  height: 100%;
  overflow: hidden;
  #cw {
    background-color: 76c5f0;
    width: 1000px;
    margin-right: auto;
    margin-left: auto;
  }
  .cw-1 {
    background-image: url("./../../assets/404-1.png");
    background-repeat: no-repeat;
    height: 494px;
    width: 1000px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: auto;
    margin-left: auto;
  }
  .cw-2 {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bolder;
  }
  .cw-3 {
    float: left;
    height: 29px;
    background-image: url("./../../assets/404-2.png");
    background-repeat: no-repeat;
    padding-left: 60px;
    padding-top: 5px;
  }
}
img {
  border: 0;
}
a {
  text-decoration: none;
  color: #333;
  transition: all .3s;
}
a:hover {
  color: #1974a1;
}
.clearfix:after,
.clearfix:before {
  display: table;
  line-height: 0;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
