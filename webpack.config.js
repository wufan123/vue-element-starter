const path = require('path');
const url = require('url');
const options  = process.env.NODE_ENV ==='production'?require('./config/build.js'):require('./config/dev.js');
module.exports = () => ({
    entry: {
        vendor: './src/vendor',
        index: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: options.filename,
        chunkFilename: '[id].js?[chunkhash]',
        publicPath: options.publicPath
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options:{
                loaders: {
                    less: 'vue-style-loader!css-loader!less-loader'
                }

            }
        },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
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
                        name:path.posix.join(options.staticPath,'image/[name].[hash:7].[ext]')
                    }
                }]

            }
        ]
    },
    plugins: options.plugins,
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve('src', 'assets')
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: 8010,
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        historyApiFallback: {
            index: options.publicPath
        }
    },
    devtool: options.devtool
});
