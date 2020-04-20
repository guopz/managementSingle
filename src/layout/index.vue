<template>
  <div class="contaienr">
    <div class="g-menu-left">
      <sider-logo />
      <sider-bar />
    </div>
    <div class="g-menu-right">
      <top-bar />
      <div class="m-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SiderLogo from "./SiderBar/logo";
import SiderBar from "./SiderBar";
import TopBar from './TopBar';
export default {
  name: "Layout",
  components: {
    SiderBar,
    SiderLogo,
    TopBar
  }
};
</script>

<style lang="less" scope>
.contaienr {
  height: 100%;
  width: 100%;
  // display: flex;
  .g-menu-left {
    float: left;
    width: 220px;
    height: 100%;
    background-color: #545c64;
    overflow: hidden;
  }
  .g-menu-right {
    // flex: 1;
    height: 100%;
    // width: 100%;
    display: flex;
    flex-direction: column;
    .m-main {
      width: 100%;
      height: calc(100% - 55px);
      background-color: #fff;
      box-sizing: border-box;
    }
  }
}
</style>
