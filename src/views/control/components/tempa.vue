<template>
  <div>
    <common />
  </div>
</template>

<script>
import common from './common';
import ma from '../mixins/ma'
export default {
  mixins: [ma],
  components: {
    common
  }
}
</script>

<style>

</style>
