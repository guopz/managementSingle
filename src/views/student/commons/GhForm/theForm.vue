<template>
  <div>
    <el-form ref="form" :model="formItem">
      <the-form-item
        v-for="item in columns"
        :key="item.prop"
        :item="item"
        :form-list="formList"
        :form-item-sub="formItem"
        v-model="formItem[item.prop]"
        @handle-change="handleChange"
      />
    </el-form>
  </div>
</template>

<script>
import theFormItem from "./theFormItem";
export default {
  name: "TheForm",
  props: {
    columns: {
      type: Array
    },
    defaultData: {
      type: Object
    }
  },
  data() {
    return {
      formList: [...this.columns],
      formItem: {...this.defaultData}
    };
  },
  methods: {
    handleAsyncSubmit() {
      return new Promise((resolve, reject) => {
        this.$refs["form"].validate(valid => {
          if (valid) {
            console.log("表单源数据 ==>", this.formItem);
            resolve(this.formItem);
          } else {
            reject(new Error("表单校验失败!"));
          }
        });
      });
    },
    handleCanel() {
      this.$refs["form"].resetFields();
    },
    handleChange(val, item) {
      console.log("handleChangeForm =>", val, item);
      this.$emit('handle-change-form', val, item);
    }
  },
  components: {
    theFormItem
  },
  watch: {
    defaultData: {
      handler(newValue) {
        console.log('defaultData ==>', newValue);
        this.formItem = newValue;
      },
      deep: true
    },
    columns: {
      handler(newValue) {
        this.formList = newValue;
      },
      deep: true
    }
  }
};
</script>

<style>
</style>
