<template>
  <div class="graphical-wrapper">
    <el-col :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <ye-charts chart-type="line" :chart-data="chartData" height="300px" />
        </div>
      </el-col>
      <el-col :span="12">
        <ye-charts chart-type="histogram" :chart-data="chartData" height="300px" />
      </el-col>
    </el-col>
    <el-col :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <ye-charts chart-type="histogram" :chart-data="chartData" :settings="{ showLine: ['人均值']}" height="300px" />
        </div>
      </el-col>
      <el-col :span="12">
        <ye-charts chart-type="pie" :chart-data="chartData" height="300px" />
      </el-col>
    </el-col>
  </div>
</template>

<script>
import * as data from './template';
export default {
  data(){
    return {
      chartData: {}
    }
  },
  mounted() {
    this.chartData = data.chartData;
  }
};
</script>

<style lang="scss" scope>
.graphical-wrapper {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: auto;
  .m-box {
    display: flex;
  }
}
</style>
