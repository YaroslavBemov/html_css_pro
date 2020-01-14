const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        // main: './src/index.js'
        main: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'dist', 'public'),
        publicPath: '',
        filename: 'js/bundle.js'
    },
    target: 'web',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/public/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: 'src/public/product.html'
        })
    ]
}