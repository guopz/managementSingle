<template>
  <div class="contaienr">
    <div :class="['g-menu-left',!sideFlag?'':'u-fwidth']">
      <sider-logo />
      <sider-bar />
    </div>
    <div class="g-menu-right">
      <top-bar />
      <div class="m-main">
        <tags></tags>
        <!-- include 设置缓存路由暂未添加 -->
        <keep-alive :include="[]">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import SiderLogo from "./components/TopBar/logo";
import SiderBar from "./components/SiderBar";
import TopBar from "./components/TopBar";
import Tags from "./components/Tags";
export default {
  name: "Layout",
  components: {
    SiderBar,
    SiderLogo,
    TopBar,
    Tags
  },
  computed: {
    sideFlag() {
      return this.$store.state.gloabl.sideFlag;
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === "sub") {
        let routeData = this.$router.resolve({
          path: to.path,
          query: {
            name: "Hi",
            age: 18,
            phoneNum: 12345678901
          }
        });
        return window.open(routeData.href, "_blank");
      }
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
    transition: all 0.3s;
    &.u-fwidth {
      width: 60px;
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
  .m-box-heaer {
    margin: 10px;
    border: 1px solid #000;
  }
}
</style>
