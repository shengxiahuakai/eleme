const mockdata = require('./mock/test.json');
module.exports = {
    outputDir: 'dist', // 打包的目录
    lintOnSave: true, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
      open: true, // 启动服务后是否打开浏览器
      host: '0.0.0.0',
      port: 8080, // 服务端口
      before(app){
        app.get('/goods/list',(req,res,next)=>{
          res.json(mockdata);
        })
      },
      https: false,
      hotOnly: false,
      proxy: null, // 设置代理
      before: app => {}
    }
}