const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js'); 
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig(), {
    // 生产模式，会开启 tree-shaking 压缩代码，以及其他优化
    mode: 'production', 
    
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                // 多线程并行压缩压缩js
                parallel: true,
                terserOptions: {
                    compress: {
                        pure_funcs: ["console.log", "console.warn"]
                    },
                },
            }),
        ],
        splitChunks: {
            // 分割代码
            cacheGroups: {
                vendors: {
                    name: "vendors",
                    // 仅匹配 node_modules 中的模块
                    // 通过缓存组，可以做一些公共代码的合并、分割。
                    test: /node_modules/, 
                    // minChunks: 1, // 使用次数的提取
                    // chunks: initial, // 只提取初始化，不管异步的
                    // minSize: 0 // 提取代码体积大于多少，我分
                    // priority: 1
                },
                commons: {
                    name: "commons"
                }
            }
        }
    }
})
