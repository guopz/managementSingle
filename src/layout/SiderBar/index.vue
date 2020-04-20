<template>
  <el-scrollbar class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      router
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#ccc"
      active-text-color="#ffd04b"
      >
      <!-- 展示版本(不做其他处理)-直接读取 Route 信息 -->
      <el-menu-item :index="$route.path">
        <i :class="$route.meta.icon"></i>
        <span slot="title">{{ $route.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      isCollapse: false
    };
  }
};
</script>

<style lang="less">
.el-scrollbar {
  height: calc(100% - 35px);
  .scrollbar-wrapper {
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  .el-scrollbar__bar.is-vertical {
    right: 0;
  }
}
.el-menu {
  border: none;
}
</style>
