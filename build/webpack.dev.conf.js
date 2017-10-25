const webpack = require('webpack');
var merge = require('webpack-merge')
let baseWebpackConfig = require('./webpack.base.conf')
module.exports = merge.smart(baseWebpackConfig, {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({//运行时变量
            _BASE_URL: JSON.stringify('api/'),
            _MOCK: false,
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8020,
        proxy: {
            '/api': {
                target: 'http://192.168.10.26:29088',//调试时的代理服务器
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    devtool: '#eval-source-map'//#source-map
})