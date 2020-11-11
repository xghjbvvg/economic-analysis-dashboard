<template>
  <div style="display:flex;justify-content: center">
    <div id="shangHaiChart" :style="{width: '1200px', height: '500px'}"></div>
  </div>
</template>

<script>


import {shangStockExchange} from "@/api/home/home";

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
                shangHaiChart.setOption(JSON.parse(result));
              })
              .catch(() => {});

    }
  },
  mounted: function() {
    this.drawShangStockExchange();
  }
};
</script>
<style lang="scss">

</style>
