import Layout from "@/views/layout/App.vue";
export default {
  path: "/stock_account",
  component: Layout,
  name: "StockAccountDetail",
  redirect: "/stock_account/detail",
  meta: {
    title: "股票用户"
  },
  children: [
    {
      path: "detail",
      name: "StockAccountDetail",
      meta: {
        title: "股票用户统计"
      },
      component: resolve =>
        require(["@/views/stockAccount/detail.vue"], resolve)
    },
    {
      path: "analyst_rank",
      name: "analystRank",
      meta: {
        title: "分析师排名"
      },
      component: resolve =>
          require(["@/views/stockAccount/analystRank.vue"], resolve)
    },
  ]
};
