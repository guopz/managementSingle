<template>
  <div class="student-wrapper">
    <div class="m-header">
      <el-button-group>
        <el-button size="mini" type="primary" @click="handleAddUser" icon="el-icon-edit">新增</el-button>
        <el-button size="mini" type="primary" @click="handleDeleteUser" icon="el-icon-delete">删除</el-button>
      </el-button-group>
    </div>
    <!-- Tabel -->
    <the-table
      :tabel-data="tableData"
      :tabel-columns="tabelColumns"
      @handle-tabel-row="compHandleTabelRow"
      @handle-delete-row="compHandleDeleteRow"
    />
    <!-- Pagination -->
    <the-pagination :page-size="pageSize" :total-count="totalCount" />
    <!-- dialog -->
    <the-dialog ref="theDialog" :dialog-columns="tabelColumns" :rules="tabelRules" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import theTable from "./commons/theTable";
import thePagination from "./commons/thePagination";
import theDialog from "./commons/theDialog";
import { student, rules } from "./template";
import _ from "lodash";
export default {
  data() {
    return {
      tableData: [],
      tabelColumns: [],
      tabelRules: {},
      totalCount: 0,
      pageSize: 20,
      pageIndex: 1,
      multipleSelection: []
    };
  },
  methods: {
    ...mapActions({
      atStudentList: 'student/getStudentList'
    }),
    loadData() {
      // Get data
      this.getStudentList();
    },
    async getStudentList() {
      // Errors do not interrupt the program
      try {
        let { pageSize, pageIndex } = this;
        let params = {
          pageSize,
          pageIndex
        };
        let result = await this.atStudentList(params);
        // Init Data
        // let doc = _.cloneDeep(result);
        this.tableData = result.content;
        this.totalCount = result.totalCount;
        this.pageSize = result.pageSize;
        this.pageIndex = result.pageIndex;
      } catch (error) {
        console.log(error);
      }
    },
    compHandleTabelRow(key, item) {
      item = _.cloneDeep(item);
      switch (key) {
        case "edit":
          this.$refs.theDialog.open({ row: item.row });
          break;
        case "delete":
          this.$confirm("确定删除？", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              setTimeout(() => {
                // this.$message.success('新建成功');
                this.$store.commit('student/DATA_LIST_DELETE', item.row);
              }, 100);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            })
            .catch(() => {
            });
          break;
      }
    },
    handleAddUser() {
      this.$refs.theDialog.open({ title: "新增" });
    },
    handleDeleteUser() {
      let result = this.multipleSelection.map(item => item.name);
      this.$message.error("稍后删除 " + result.join("/"));
      // this.$store.commit('student/DATA_LIST_DELETEMORE', this.multipleSelection);
    },
    compHandleDeleteRow(val) {
      this.multipleSelection = val;
    },
    initExtra() {
      this.tabelColumns = student;
      this.tabelRules = rules;
    }
  },
  computed: {
    headClass() {
      // return "background:#eef1f6;";
      return {};
    }
  },
  mounted() {
    this.loadData();
    this.initExtra();
  },
  components: {
    theTable,
    thePagination,
    theDialog
  }
};
</script>

<style lang="less" scope>
.student-wrapper {
  position: relative;
  padding: 20px;
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  .m-header {
    flex: 0 0 auto;
    margin-bottom: 10px;
  }
}
.m-dialog {
  font-size: 14px;
}
.u-input {
  width: 300px;
}
// .el-form-item {
//   margin-bottom: 10px;
// }
</style>
