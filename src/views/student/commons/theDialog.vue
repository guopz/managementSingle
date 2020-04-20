<template>
  <div v-if="formList.length">
    <el-dialog :title="formTitle" :visible.sync="formVisible" width="40%">
      <el-form ref="formDialog" :model="formItem" :rules="rules">
        <!-- <template v-for="(item, index) in formList">
          <el-form-item
            :key="index"
            :label="item.name"
            :label-width="formLabelWidth"
            :rules="item.rules"
          >
            <el-input
              size="small"
              :placeholder="item.placeholder"
              :prop="'formList.' + index + '.prop'"
              class="u-input"
              v-model="formItem[item.prop]"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </template>-->
        <el-form-item :label-width="formLabelWidth" label="姓名" prop="name">
          <el-input size="small" class="u-input" v-model="formItem.name"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="性别" prop="sex">
          <el-input size="small" class="u-input" v-model="formItem.sex"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="年龄" prop="age">
          <el-input size="small" class="u-input" v-model="formItem.age"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="班级" prop="grade">
          <el-input size="small" class="u-input" v-model="formItem.grade"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="入学日期" prop="date">
          <el-input size="small" class="u-input" v-model="formItem.date"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="专业" prop="major">
          <el-input size="small" class="u-input" v-model="formItem.major"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="地址" prop="address">
          <el-input size="small" class="u-input" v-model="formItem.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="formVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="handleSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "TheDialog",
  data() {
    return {
      formVisible: false,
      formLabelWidth: "120px",
      formList: [],
      formItem: {
        date: "",
        name: "",
        sex: "",
        age: 0,
        grade: 0,
        major: "",
        address: ""
      },
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
      return this.formTitle === '新增';
    }
  },
  methods: {
    open({ row = {}, title = "编辑" }) {
      console.log("formList ==>", this.formList, this.rules);
      this.formVisible = true;
      this.formItem = row;
      this.formTitle = title;
    },
    handleSave() {
      this.$refs["formDialog"].validate(valid => {
        if (valid) {
          if(this.newCreate) {
            this._addStudentList()
          } else {
            this._editSudentList();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    _addStudentList() {
      // console.log('新曾数据 ==>', this.formItem, this);
      this.formVisible = false;
      this.$message.success('新建成功');
      setTimeout(() => {
        this.$store.commit('student/DATA_LIST_ADD', this.formItem);
      }, 500);
    },
    _editSudentList() {
      this.formVisible = false;
      this.$message.success('更新成功');
      // console.log('编辑数据1 ==>', this.formItem, this);
      setTimeout(() => {
        this.$store.commit('student/DATA_LIST_UPDATA', this.formItem);
      }, 500);
    },
  },
  watch: {
    dialogColumns(nv) {
      this.formList = nv;
    }
  }
};
</script>

<style>
</style>
