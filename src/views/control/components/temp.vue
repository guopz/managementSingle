<template>
  <div>
    <common v-bind="$attrs" v-on="$listeners"></common>
  </div>
</template>

<script>
import common from "./common";
import mb from "../mixins/mb";
export default {
  mixins: [mb],
  components: {
    common
  }
};
</script>

<style>
</style>
