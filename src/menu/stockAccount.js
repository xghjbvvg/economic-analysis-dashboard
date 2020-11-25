export default {
  name: "股票用户",
  permissionsKey: "",
  icon: "fa fa-envelope-open",
  children: {
    stockAccountDetail: {
      name: "股票账户统计",
      permissionsKey: "",
      path: "/stock_account/detail"
    },
    analystRank: {
      name: "分析师指数最新排行",
      permissionsKey: "",
      path: "/stock_account/analyst_rank"
    },
  }
};
