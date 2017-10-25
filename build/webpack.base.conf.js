const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const url = require('url');

let staticPath = 'assets'
let publicPath = ''

module.exports = {
    entry: {
        vendor: './src/vendor.js',//或者['lib1','lib2','lib3'],
        index: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:7].js',
        chunkFilename: '[id].[chunkhash:7].js',
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        less:  'vue-style-loader!css-loader!less-loader'
                    }
                }
            },
            /*{
                test: /\.js$/,
                use: ['babel-loader'],
                // include:['/node_modules/_element-theme@0.7.2@element-theme','/node_modules/_element-theme-default@1.4.2@element-theme-default','/node_modules/_element-ui@1.4.2@element-ui'],
                // exclude: /node_modules/
            },*/
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                loaders: 'less-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: path.posix.join(staticPath, 'image/[name].[hash:7].[ext]')
                    }
                }]

            },
            {
                test: /\.mp3$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: path.posix.join(staticPath, 'mp3/[name].[ext]')
                    }
                }]

            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve('src', 'assets'), //资源目录 "~assets"
            'style': path.resolve('src', 'style'), //样式目录 "~style"
            'api': path.resolve('src', 'api'), //api请求目录 "api"
            'views': path.resolve('src', 'views'), //视图目录 "views"
            'utils': path.resolve('src', 'utils') //视图目录 "utils"
        }
    }
}
