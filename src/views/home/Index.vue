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


import {homeSevice} from "@/api/home/home";

export default {
  data() {
    return{

    }
  },
  methods: {
    drawShangStockExchange(){
      // 基于准备好的dom，初始化echarts实例
      let shangHaiChart = this.$echarts.init(document.getElementById('shangHaiChart'));

      homeSevice.shangStockExchange()
              .then(result => {

                console.log(result)
                shangHaiChart.setOption(result);
              })
              .catch(() => {});

    },
    drawShengStockExchange(){
      // 基于准备好的dom，初始化echarts实例
      let shenZhengChart = this.$echarts.init(document.getElementById('shenZhengChart'));

      homeSevice.shengStockExchange()
              .then(result => {

                console.log(result)
                shenZhengChart.setOption(result);
              })
              .catch(() => {});

    },
    updateAhDict(){
      homeSevice.updateAhDict()
              .then(() => {

              })
              .catch(() => {});
    }


  },
  mounted: function() {
    this.drawShangStockExchange();
    this.drawShengStockExchange();
    this.updateAhDict();
  }
};
</script>
<style lang="scss">

</style>
