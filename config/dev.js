const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    publicPath:'',
    filename:'[name].js',
    staticPath:'assets',
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({//运行时变量
            _BASE_URL:JSON.stringify('api/')
        })
    ],
    devtool:'#eval-source-map'//#source-map
}