<template>
  <div class="tea-chart">
    <component
      ref="teaBaseCharts"
      v-bind="$attrs"
      :is="`ve-${chartType}`"
      :data="chartDataCur"
      :extend="chartExtend"
      :settings="chartSettings"
      :loading="loading"
      :data-empty="dataEmpty"
      :judge-width="true"
      :height="height"
    ></component>
  </div>
</template>

<script>
import "v-charts/lib/style.css";
import "echarts/lib/component/legendScroll";
import VeLine from "v-charts/lib/line.common";
import VePie from "v-charts/lib/pie.common";
import VeHistogram from "v-charts/lib/histogram.common";
import _ from "lodash";

export default {
  name: "YeCharts",
  props: {
    chartData: {
      type: Object,
      default: () => {}
    },
    chartType: {
      type: String,
      default: "line" // 可选参数<lie, histogram, pie>
    },
    settings: {
      type: Object,
      default: () => {}
    },
    height: {
      type: String,
      default: "200px"
    }
  },
  data() {
    return {
      loading: false,
      dataEmpty: false,
      chartExtend: {},
      chartSettings: {},
      chartDataCur: {}
    };
  },
  created() {
    this.chartSettings = this.settings;
  },
  methods: {
    updateCharts(newValue) {
      let chartData = newValue || this.chartData;
      this.chartDataCur = chartData;
      this._dealStatus();
      this._dealChartsSettings();
    },
    _dealStatus() {
      this.loading = true;
      setTimeout(() => {
        try {
          this.$refs["teaBaseCharts"].echarts.resize();
          this.loading = false;
        } catch (error) {
          console.log(error);
        }
      }, 300);
    },
    _dealChartsSettings() {
      this.chartSettings = Object.assign(
        {},
        this.settings
      );
    }
  },
  components: {
    VeLine,
    VePie,
    VeHistogram
  },
  watch: {
    chartData: {
      handler(newValue, oldValue) {
        this.updateCharts(newValue);
      },
      deep: true
    },
  }
};
</script>

<style lang="scss">
</style>
