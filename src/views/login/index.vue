<template>
  <div class="wrapper-login">
    <div class="m-login-box">
      <div class="u-title">用户登录</div>
      <p>
        <span class="u-icon el-icon-user"></span>
        <input
          type="text"
          class="u-ipt"
          v-model="name"
          placeholder="请输入用户名"
        />
      </p>
      <p>
        <span class="u-icon el-icon-lock"></span>
        <input
          type="password"
          class="u-ipt"
          v-model="password"
          placeholder="请输入密码"
        />
      </p>
      <p>
        <el-button
          type="primary"
          @click="handleLogin"
          @keyup.enter.native="handleLogin"
          class="u-btn"
        >登录</el-button>
      </p>
    </div>
    <loading />
  </div>
</template>

<script>
import loading from "./loading";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    async handleLogin() {
      if (!this.name) {
        return this.$message.error("请填写用户名");
      }
      if (!this.password) {
        return this.$message.error("请填写密码");
      }
      let params = { name: this.name, password: this.password };
      let result = await this.$store.dispatch("user/login", params);
      if (result.code !== 200) return this.$message.error(result.message);
      this.$router.push("/");
    }
  },
  components: {
    loading
  }
};
</script>

<style lang="less">
.wrapper-login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../assets/bg.jpg") center center no-repeat;
  background-size: 100%;
  .m-login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -190px;
    margin-left: -200px;
    width: 400px;
    height: 380px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    box-sizing: border-box;
    padding: 20px 40px;
    border-radius: 10px;
    & > p {
      position: relative;
      padding-bottom: 30px;
    }
    .u-icon {
      position: absolute;
      top: 12px;
      left: 12px;
      font-size: 20px;
      color: #409eff;
    }
  }
  .u-title {
    padding: 10px 0 40px;
    text-align: center;
    color: #f3f3f3;
    font-size: 25px;
  }
  .u-ipt {
    width: 100%;
    border: 1px solid #3872f6;
    border-radius: 3px;
    line-height: 40px;
    padding: 2px 5px 2px 40px;
    background: none;
    color: #fff;
  }
  .u-btn {
    margin-top: 30px;
    font-size: 15px;
    width: 100%;
  }
}
</style>
