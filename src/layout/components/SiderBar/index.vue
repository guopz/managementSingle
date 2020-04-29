<template>
  <el-scrollbar class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      router
      :collapse="sideFlag"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <sub-menu v-for="menu in routes" :key="menu.path" :item="menu" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import subMenu from "./subMenu";

export default {
  name: "Slider",
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    routes() {
      let { routes } = this.$router.options;
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].path === "/") {
          return this.getAuthorizedRoute(routes[i].children);
        }
      }
      console.log("routes ==>", routes);
      return routes;
    },
    sideFlag() {
      return this.$store.state.gloabl.sideFlag;
    }
  },
  methods: {
    getAuthorizedRoute(routes) {
      return routes.filter(child => {
        if (child.children) {
          child.children = this.getAuthorizedRoute(child.children);
        }
        return child.meta.auth
          ? this.authStatus[child.meta.auth]
          : true;
      });
    }
  },
  components: {
    subMenu
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style lang="less">
</style>
