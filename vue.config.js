console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_BASE_API)
console.log('__dirname=>', __dirname, '__filename=>', __filename);
const path = require('path');
const port = process.env.port || 9999;
function resolvePath (dir) {
  return path.join(__dirname, dir);
}
console.log(resolvePath('src'));
module.exports = {
  // lintOnSave: process.env.NODE_ENV !== 'production', // 关掉保存时，eslint校验
  lintOnSave: false,
  devServer: {
    port,
    open: true, // 是否自动打开
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://localhost:8000/mock", // 真实请求的接口地址
        secure: false, // 如果是 https 接口，需要配置这个参数
        changeOrigin: true, // 如果是接口跨域，需要配置这个参数
        pathRewrite: {
          [process.env.VUE_APP_BASE_API]: '' // 来重写地址，将前缀 '/xxx' 转为 '/'。
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: { // 别名配置
        "@": resolvePath('src'),
        "components": resolvePath('src/components'),
        "utils": resolvePath('src/utils'),
        "store": resolvePath('src/store')
      }
    }
  }
};
