<template>
  <div class="m-nav-title">
    <div>
      <span class="u-color">首页 /</span>
      {{ $route.meta.title }}
    </div>
    <div class="m-user">
      <el-avatar size="small" :src="circleUrl"></el-avatar>
      <span class="u-name">张安</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    };
  },
};
</script>

<style lang="less" scope>
.m-nav-title {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  width: 100%;
  background-color: #535b64;
  color: #fff;
  box-sizing: border-box;
  font-size: 13px;
  .u-color {
    color: #efefef;
  }
  .m-user {
    display: flex;
    align-items: center;
    .u-name {
      padding-left: 10px;
      font-size: 14px;
    }
  }
}
</style>
