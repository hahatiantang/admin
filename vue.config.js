/**
 * 文件说明：
 * 详细描述
 * 创建者：ycl
 * 创建时间： 2019/5/5
 * 变更记录：
 */
module.exports = {
  devServer:{
    host:"localhost",//要设置当前访问的ip 否则失效
    open: true, //浏览器自动打开页面
    proxy: {
      '/api': {
        target: '目标网址',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
