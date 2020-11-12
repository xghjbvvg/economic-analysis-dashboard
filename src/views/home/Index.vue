<template>
  <div>
    <el-row type="flex">
      <div id="shangHaiChart" :style="{width: '1500px', height: '600px'}"></div>
    </el-row>

    <el-row type="flex">
      <div id="shenZhengChart" :style="{width: '1500px', height: '600px'}"></div>
    </el-row>

  </div>
</template>

<script>


import {shangStockExchange,shengStockExchange} from "@/api/home/home";

export default {
  data() {
    return{

    }
  },
  methods: {
    drawShangStockExchange(){
      // 基于准备好的dom，初始化echarts实例
      let shangHaiChart = this.$echarts.init(document.getElementById('shangHaiChart'));

      shangStockExchange()
              .then(result => {

                console.log(result)
                shangHaiChart.setOption(result);
              })
              .catch(() => {});

    },
    drawShengStockExchange(){
      // 基于准备好的dom，初始化echarts实例
      let shenZhengChart = this.$echarts.init(document.getElementById('shenZhengChart'));

      shengStockExchange()
              .then(result => {

                console.log(result)
                shenZhengChart.setOption(result);
              })
              .catch(() => {});

    }
  },
  mounted: function() {
    this.drawShangStockExchange();
    this.drawShengStockExchange();
  }
};
</script>
<style lang="scss">

</style>
