module.exports = {
  publicPath: "./",
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete("prefetch");
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000/api',// 你要请求的后端接口ip+port
        changeOrigin: true,// 允许跨域，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        ws: true,// 开启webSocket

      }
    },
    disableHostCheck: true
  }
};
