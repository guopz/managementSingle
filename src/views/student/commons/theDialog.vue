<template>
  <div>
    <el-dialog v-dialogDrag :title="formTitle" :visible.sync="formVisible" width="40%">
      <!-- From Item -->
      <the-form ref="formDialog" :columns="formList" :default-data="formItem" />
      <!-- Button -->
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="handleCancel">取 消</el-button>
        <el-button size="small" type="primary" @click="handleSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import theForm from "./GhForm/theForm";
export default {
  name: "TheDialog",
  data() {
    return {
      formVisible: false,
      formLabelWidth: "120px",
      formList: [],
      formItem: {},
      formTitle: ""
    };
  },
  props: {
    rules: {
      type: Object,
      default: () => {}
    },
    dialogColumns: {
      type: Array
    }
  },
  computed: {
    newCreate() {
      return this.formTitle === "新增";
    }
  },
  methods: {
    open({ row = {}, title = "编辑" }) {
      this.formVisible = true;
      this.formItem = Object.assign({}, row);
      this.formTitle = title;
    },
    handleSave() {
      this.$refs["formDialog"].handleAsyncSubmit().then(res => {
        if (this.newCreate) {
          this._addStudentList(res);
        } else {
          this._editSudentList(res);
        }
        this.formVisible = false;
      });
    },
    handleCancel() {
      this.formVisible = false;
      this.$refs["formDialog"].handleCanel();
    },
    _addStudentList(res) {
      this.$message.success("新建成功");
      console.log("this.formItem ==>", res);
      setTimeout(() => {
        this.$store.commit("student/DATA_LIST_ADD", res);
      }, 500);
    },
    _editSudentList(res) {
      this.$message.success("更新成功");
      setTimeout(() => {
        this.$store.commit("student/DATA_LIST_UPDATA", res);
      }, 500);
    },
    _dealFormItem(val) {
      // 处理配置字段获取配置对象
      let result = {};
      val && val.forEach(item => {
        result[item.prop] = item.default || '';
      });
      this.formList = [...val];
      this.formItem = result;
    }
  },
  components: {
    theForm
  },
  watch: {
    dialogColumns(nv) {
      this._dealFormItem(nv);
    }
  }
};
</script>

<style>
</style>
