<template>
  <div class="login-loading" v-if="loading">
    <div class="circle-border">
      <div class="circle-core"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginLoading",
  data() {
    return {
      loading: true
    }
  },
  methods: {
    init() {
      setTimeout(() => {
        this.loading = false;
      }, 400);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scope>
$circle: 80px;
.login-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1000;
}

.circle-border {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -$circle/2;
  margin-left: -$circle/2;
  width: $circle;
  height: $circle;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #fff;
  background: linear-gradient(
    0deg,
    rgba(34, 75, 69, 0.1) 33%,
    rgb(46, 95, 173) 100%
  );
  animation: spin 0.8s linear 0s infinite;
}

.circle-core {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
