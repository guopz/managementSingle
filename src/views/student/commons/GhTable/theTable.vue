<template>
  <div class="m-table">
    <el-table
      :data="tabelData"
      size="small"
      border
      v-loading="loading"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      height="200"
      style="width: 100%;height: 100%;"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'age', order: 'descending'}"
    >
      <el-table-column type="selection" align="center" width="55"></el-table-column>
      <el-table-column
        v-for="item in tabelColumns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.name"
        :width="item.width"
        :align="item.align"
        sortable
      ></el-table-column>
      <el-table-column align="center" label="操作" prop="extra">
        <template slot-scope="scope">
          <el-button
            size="mini"
            v-for="item in button"
            :type="item.type"
            :key="item.prop"
            @click="handleChange(scope.$index, scope.row, item.prop)"
          >{{ item.name }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TheTable",
  data() {
    return {
      loading: true
    };
  },
  props: {
    tabelData: {
      type: Array
    },
    tabelColumns: {
      type: Array
    }
  },
  methods: {
    handleChange(index, row, key) {
      this.$emit("handle-tabel-row", key, { index, row });
    },
    handleSelectionChange(val) {
      this.$emit('handle-delete-row', val);
    }
  },
  computed: {
    button() {
      return [
        {
          name: "编辑",
          prop: "edit"
        },
        {
          name: "删除",
          prop: "delete",
          type: "danger"
        }
      ];
    }
  },
  watch: {
    tabelData() {
      this.loading = false;
    }
  }
};
</script>

<style>
.m-table {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
