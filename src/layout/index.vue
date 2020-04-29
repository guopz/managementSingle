<template>
  <div class="contaienr">
    <div :class="['g-menu-left',!sideFlag?'':'u-fwidth']">
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
import SiderLogo from "./components/TopBar/logo";
import SiderBar from "./components/SiderBar";
import TopBar from "./components/TopBar";
export default {
  name: "Layout",
  components: {
    SiderBar,
    SiderLogo,
    TopBar
  },
  computed: {
    sideFlag() {
      return this.$store.state.gloabl.sideFlag;
    }
  }
};
</script>

<style lang="less" scope>
.contaienr {
  height: 100%;
  width: 100%;
  .g-menu-left {
    float: left;
    width: 200px;
    height: 100%;
    background-color: #545c64;
    overflow: hidden;
    transition: all .3s;
    &.u-fwidth {
      width: 60px;;
    }
  }
  .g-menu-right {
    height: 100%;
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
