const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        path: path.join(__dirname, '../static'),
        filename: 'index.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, '../client')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, '../client')]
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../client/index.html'),
            filename: path.join(__dirname, '../static/index.html')
        })
    ],
    optimization: {
        minimize: true
    },
    devServer: {
        contentBase: path.join(__dirname, '../static'),
        compress: true,
        port: 9000
    }
}