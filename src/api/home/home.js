import request from "@/utils/request.js";

/**
 * 登录
 * @param params
 * @returns {AxiosPromise}
 */
export function shangStockExchange() {
  return request({
    url: "/stock/shang_stock_exchange",
    method: "get",
    dataType: 'json',
    //data: params //注意：如果是get请求请使用 params: params
  });
}
