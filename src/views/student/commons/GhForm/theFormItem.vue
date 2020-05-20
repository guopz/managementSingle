<template>
  <el-form-item
    :rules="item.rules"
    :label-width="formLabelWidth"
    :label="item.name"
    :prop="item.prop"
    v-if="!item.hide"
  >
    <item-input
      v-if="formItem.type==='input'"
      class="u-input"
      v-bind="$attrs"
      v-on="$listeners"
      :data-list="item"
    />

    <item-select
      v-else-if="formItem.type==='select'"
      v-bind="$attrs"
      v-on="$listeners"
      class="u-input"
      :data-list="item"
      @change="handleChange"
    />

    <span v-else>未知控件类型</span>
  </el-form-item>
</template>
<script>
import ItemInput from "./FormItem/ItemInput";
import ItemSelect from "./FormItem/ItemSelect";
import FormHandler from "./FormHandler";

export default {
  name: "TheFormItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    formList: {
      type: Array
    },
    formItemSub: {
      type: Object
    }
  },
  data() {
    return {
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleChange(val) {
      let { input: { change = '' } = {} } = this.item;
      if (!change) {
        this.$emit("handle-change", val, this.item);
      } else {
        FormHandler[change](val, this.formItemSub, this.formList);
      }
    }
  },
  computed: {
    formItem() {
      return this.item.input || {};
    }
  },
  components: {
    ItemInput,
    ItemSelect
  },
  watch: {
    item(nv) {
      console.log(nv);
    }
  }
};
</script>
<style lang="less">
.u-input {
  width: 300px;
}
</style>
