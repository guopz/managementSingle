<template>
  <div class="m-nav-title">
    <div class="m-left">
      <span class="u-icon" @click="handleToggle"><i :class="[sideFlag? 'el-icon-s-fold': 'el-icon-s-unfold']"></i></span>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-dropdown @command="handleCommand">
        <div class="m-user">
          <el-avatar size="small" :src="user.avatar"></el-avatar>
          <span class="u-name">{{ user.name }}</span>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-setting"></i> 个人设置</el-dropdown-item>
          <el-dropdown-item command="loginOut" divided><i class="el-icon-s-operation"></i> 安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    sideFlag() {
      return this.$store.state.gloabl.sideFlag;
    }
  },
  methods: {
    init() {
      this.user = this.$store.state.user.userinfo;
    },
    handleCommand(type) {
      if (type === 'loginOut')
      this.$store.dispatch('user/loginOut').then(() => {
        location.reload();
      });
    },
    handleToggle() {
      console.log('1');
      this.$store.commit('gloabl/updataSide');
    }
  }
};
</script>

<style lang="less">
.m-nav-title {
  padding: 0 40px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
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
    color: #efefef;
    .u-name {
      padding-left: 10px;
      font-size: 14px;
    }
  }
  .m-left {
    display: flex;
    align-items: center;
  }
  .u-icon {
    padding-right: 10px;
    font-size: 20px;
  }
}
.u-icon:hover,
.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
    color: #ffd04b;
    cursor: pointer;
}
</style>
