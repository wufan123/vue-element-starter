const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
export default {
    publicPath:'',
    filename:'[name].js?[chunkhash]',//
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({//运行时变量
            BASE_URL:''
        })
    ],
    devtool:'#source-map'//

}