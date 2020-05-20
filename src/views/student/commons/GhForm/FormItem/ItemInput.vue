<template>
  <el-input
    v-if="formItem.type==='input'"
    size="small"
    class="u-input"
    v-bind="$attrs"
    v-on="$listeners"
    :type="formItem.subtype"
    :placeholder="formItem.placeholder"
    :disabled="formItem.disable"
    :readonly="formItem.readonly"
    :autosize="formItem.autosize"
  ></el-input>
</template>

<script>
export default {
  name: "ItemInput",
  props: {
    dataList: {
      type: Object,
      required: true
    }
  },
  computed: {
    formItem() {
      return this.dataList.input || {};
    }
  }
};
</script>

<style>
</style>
