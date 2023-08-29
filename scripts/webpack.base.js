const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = function (isDev) {
    return {
        // 最基础的，出入口
        entry: path.join(__dirname, '../src/index.tsx'),
        output: {
            // 打包输出结果路径
            path: path.join(__dirname, "../dist"),
            // 每个输出的 js 的名称
            // hash, contenthash, chunkhash
            filename: "static/js/[name].[hash:8].js",
            // webpack5 内置，构建前删除一下 dist，webpack4: clean-webpack-plugin
            clean: true,
            // 打包后文件的公共前缀路径
            publicPath: '/'
        },

        module: {
            // loader 就是你在从入口文件去解析各种import地址的后缀时，这些不同
            // 后缀的文件，需要有一个解析器，去识别它的含义。从而保证可以最后形成
            // 一个 bundle
            rules: [{
                    test: /\.(ts|tsx)$/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    oneOf: [
                        // postcss-loader: 帮我们处理一些 css 的语法转换， autoprefixer
                        // css-loader: 主要是处理路径 <link>
                        // style-loader: 其实是帮我们把css的属性style，挂到元素上
                        // 在开发环境下，css 嵌套在了 style 标签里，方便给我们热替换
                        // 生产环境下，我们希望把 css 单独抽离出来，方便配置缓存
                        // 而插件 mini-css-extract-plugin 可以帮我们做这件事。
                        {
                            test: /\.css$/,
                            use: [
                                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                                'css-loader',
                                'postcss-loader'
                            ]
                        },
                        {
                            test: /\.module\.(scss|css)$/,
                            include: [path.resolve(__dirname, '../src')],
                            use: [
                                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: {
                                            // 借助 css-module，可以实现 BEM 风格
                                            localIdentName: '[path][name]__[local]-[hash:base64:5]'
                                        }
                                    }
                                },
                                'postcss-loader',
                                "less-loader"
                            ]
                        },
                        {
                            test: /\.scss$/,
                            use: [
                                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                                'css-loader',
                                'postcss-loader',
                                'less-loader'
                            ]
                        }
                    ]
                },
                {
                    // webpack5 以前要单独的 loader(url-loader, file-loader)，现在内置了。
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    generator: {
                        filename: 'static/images/[name].[contenthash:8][ext]',
                    }
                },
                {
                    // webpack5 以前要单独的 loader(url-loader, file-loader)，现在内置了。
                    test: /\.(woff2?|eot|ttf|otf)$/,
                    generator: {
                        filename: 'static/fonts/[name].[contenthash:8][ext]',
                    }
                },
                {
                    // webpack5 以前要单独的 loader(url-loader, file-loader)，现在内置了。
                    test: /\.(mp4|flv|wav)$/,
                    generator: {
                        filename: 'static/media/[name].[contenthash:8][ext]',
                    }
                }
            ]
        },

        /**
         * extensions 是 webpack 的解析项，用于在引入模块的时候，可以不带文件后缀
         */

        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },

        plugins: [
            new HtmlWebpackPlugin({
                // 模板
                template: path.resolve(__dirname, "../public/index.html"),
                // 自动注入资源文件
                inject: true,
            }),
            // 让我们可以把一些环境变量注入进来。
            new webpack.DefinePlugin({
                'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
            }),
            new MiniCssExtractPlugin({
                filename: isDev ? "static/css/[name].css" : "static/css/[name].[contenthash:4].css"
            })
        ],
    }
}