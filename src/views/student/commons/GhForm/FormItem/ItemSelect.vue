<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    size="small"
    class="u-input"
    :multiple="formItem.multiple"
    :disabled="formItem.disabled"
    :multiple-limit="formItem.multipleLimit"
  >
    <el-option
      v-for="o in formItem.options"
      :key="o.value"
      :label="o.label"
      :value="o.value"
      :disabled="o.disabled"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: "ItemSelect",
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
  },
  methods: {
    // onChange() {
    //   console.log(this.dataList.prop);
    //   this.$emit('change', this.dataList.prop, 'select');
    // }
  }
};
</script>

<style>
</style>
