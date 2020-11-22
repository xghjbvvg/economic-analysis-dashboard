import request from "@/utils/request.js";
/**
 * 登录
 * @param params
 * @returns {AxiosPromise}
 */

export const homeSevice = {
  shengStockExchange: () =>{return request({
      url: "/stock/sheng_stock_exchange",
      method: "get",
      dataType: 'json',
      //data: params //注意：如果是get请求请使用 params: params
    });
  },
  shangStockExchange:()=> {
    return request({
      url: "/stock/shang_stock_exchange",
      method: "get",
      dataType: 'json',
      //data: params //注意：如果是get请求请使用 params: params
    });
  },
  updateAhDict: () =>{return request({
      url: "/stock/stock_zh_ah_name_dict",
      method: "get",
      dataType: 'json',
      //data: params //注意：如果是get请求请使用 params: params
    });
  },
}