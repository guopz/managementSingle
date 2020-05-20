<template>
  <div class="control">
    权限控制
    <item />
  </div>
</template>

<script>
import item from './components/item';
export default {
  data() {
    return {
      name: '你好'
    }
  },
  components: {
    item
  },
  beforeRouteLeave(to, from, next) {
    // console.log('beforeRouteLeave ==>');
    next();
  }
}
</script>

<style scope>
.control {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
