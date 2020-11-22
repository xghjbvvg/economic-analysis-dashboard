<template>
  <div>
    <el-row type="flex">
      <div id="accountAccountDetailLine" :style="{width: '1500px', height: '600px'}"></div>
    </el-row>



  </div>
</template>

<script>


// import {homeSevice} from "@/api/home/home";

import {accountSevice} from "@/api/stockAccount/stockAccount";

export default {
  data() {
    return{

    }
  },
  methods: {
    stockAccountDetail(){
      // 基于准备好的dom，初始化echarts实例
      let accountAccountDetailLine = this.$echarts.init(document.getElementById('accountAccountDetailLine'));

      accountSevice.stockAccountDetail()
              .then(result => {
                console.log(result)
                accountAccountDetailLine.setOption(result);
              })
              .catch(() => {});

    },
  },
  mounted: function() {
      this.stockAccountDetail();
  }
};
</script>
<style lang="scss">

</style>
