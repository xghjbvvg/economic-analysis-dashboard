<template>
    <div>
        <el-row>排行榜</el-row>
        <el-row>
            <el-table
                    :data="ranks"
                    style="width: 100%">

                <el-table-column
                        label="姓名"
                        width="180"

                >
                    <template slot-scope="scope">

                      <span @click="toDetailInfo(scope.row)" style="color: #1d5ac4;cursor:pointer">{{scope.row.fxsName}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="ssjg"
                        label="单位">
                </el-table-column>

                <el-table-column
                        prop="lastYearSyl"
                        label="2020年收益率">
                </el-table-column>

                <el-table-column
                        prop="newIndex"
                        label="年度指数">
                </el-table-column>

                <el-table-column
                        prop="earnings_3"
                        label="3个月收益率">
                </el-table-column>

                <el-table-column
                        prop="earnings_6"
                        label="6个月收益率">
                </el-table-column>

                <el-table-column
                        prop="earnings_12"
                        label="12个月收益率">
                </el-table-column>

                <el-table-column
                        prop="newGgpj"
                        label="2020最新个股评级">
                </el-table-column>

                <el-table-column
                        prop="stockName"
                        label="股票名称">
                </el-table-column>

                <el-table-column
                        prop="stockcount"
                        label="成分股个数">
                </el-table-column>
            </el-table>
        </el-row>

    </div>
</template>

<script>
    import {accountSevice} from "@/api/stockAccount/stockAccount";

    export default {
        name: "analystRank",
        data(){
            return {
                ranks: []
            }
        },
        methods:{
            //获取排行榜
            analystRank(){
                accountSevice.analystRank()
                    .then(result => {
                        this.ranks = result;
                    })
                    .catch((err) => {
                        alert(err)
                    });

            },
            //跳转分析师详情页
            toDetailInfo(item){
                this.$router.push('/stock_account/analyst_info/'+item.fxsCode);
            }
        },
        mounted() {
            this.analystRank();
        }
    }
</script>

<style scoped>

</style>