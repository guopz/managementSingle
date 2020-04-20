<template>
  <div class="m-page">
    <p>当前 {{ pageSize }} 条/页</p>
    <p>共 {{ totalCount }} 条</p>
    <el-pagination
      small
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="totalCount"
    />
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  props: {
    pageSize: {
      type: Number
    },
    totalCount: {
      type: Number
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  }
};
</script>

<style lang="less" scope>
  .m-page {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #606267;
    justify-content: flex-end;
    p {
      padding-right: 10px;
    }
  }
</style>
