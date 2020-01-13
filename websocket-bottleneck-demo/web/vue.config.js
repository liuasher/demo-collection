const path = require('path');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const _CompressionWebpackPlugin = new CompressionWebpackPlugin({
//   test: /\.js$|\.css/,
//   threshold: 8192,
//   minRatio: 0.8,
// });

module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  // 生产环境去除source map构建
  productionSourceMap: true,
  // 编译警告
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('utils', resolve('src/utils'))
      .set('service', resolve('src/service'))
      .set('view', resolve('src/view'));

    // 禁用preload、prefetch
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    // 禁用fork-ts-checker
    config.plugins.delete('fork-ts-checker');
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // config.plugins.push(_CompressionWebpackPlugin);
    } else {
      // add config code
    }
  },
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
