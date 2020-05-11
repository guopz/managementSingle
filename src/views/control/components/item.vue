<template>
  <div>
    <temp
       v-bind="$attrs"
       v-on="$listeners"
     />
  </div>
</template>

<script>
import temp from "./temp";
export default {
  components: {
    temp
  }
}
</script>

<style>

</style>
