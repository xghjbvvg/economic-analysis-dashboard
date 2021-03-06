import request from "@/utils/request.js";



export const accountSevice = {
  stockAccountDetail: () =>{return request({
    url: "/account/detail",
    method: "get",
    dataType: 'json',
    //data: params //注意：如果是get请求请使用 params: params
  });
  },

  analystRank: () =>{return request({
    url: "/account/analyst_rank",
    method: "get",
    dataType: 'json',
    //data: params //注意：如果是get请求请使用 params: params
  });
  },

  analystInfo:(code)=>{return request({
    url: `/account/analyst_info/${code}`,
    method: "get",
    dataType: 'json',
    //data: params //注意：如果是get请求请使用 params: params
  });
  },

  analystExponent: (code) =>{return request({
    url: `/account/analyst_exponent/${code}`,
    method: "get",
    dataType: 'json',
    //data: params //注意：如果是get请求请使用 params: params
  });
  },
}