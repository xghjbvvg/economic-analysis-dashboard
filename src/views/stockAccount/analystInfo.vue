<template>
    <div>
        <el-row style="align-content: center;justify-content: center;background: white">
            <img :src="imgurl"/>
        </el-row>

        <el-row>
            最新跟踪成分股
        </el-row>
        <el-row>
            <el-table
                    :data="stocks"
                    style="width: 100%">

                <el-table-column
                        prop="StockCode"
                        label="股票代码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="StockName"
                        label="股票名称">
                </el-table-column>

                <el-table-column
                        prop="ReleaseDate"
                        label="调入日期	">
                </el-table-column>

                <el-table-column
                        prop="Zxpjrq"
                        label="最新评级日期	">
                </el-table-column>

                <el-table-column
                        prop="Pjmc"
                        label="当前评级名称">
                </el-table-column>

                <el-table-column
                        prop="FbrSpj"
                        label="成交价格(前复权)">
                </el-table-column>

                <el-table-column
                        prop="NewPrice"
                        label="最新价格">
                </el-table-column>

                <el-table-column
                        prop="Dqsyl"
                        label="阶段涨跌幅">
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
                stocks: [],
                imgurl:'',
            }
        },
        methods:{

            analystInfo(){
                var code = this.$route.params.code;
                accountSevice.analystInfo(code)
                    .then(result => {
                        console.log(result);
                        this.stocks = result.re;
                    })
                    .catch((err) => {
                        alert(err)
                    });

            },
            analystExponent(){

                var code = this.$route.params.code;
                accountSevice.analystExponent(code)
                    .then(result => {
                        this.imgurl = result;
                    })
                    .catch((err) => {
                        alert(err)
                    });
            }
        },
        mounted() {
            this.analystInfo();
            this.analystExponent();
        }
    }
</script>

<style scoped>

</style>