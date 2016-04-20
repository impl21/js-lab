var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: './web/src/index.js'
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                exclude: [/web/],
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader?sourceMap!less-loader?sourceMap')
            },
            {
                test: /\.less$/,
                include: [/web/],
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader?sourceMap!less-loader?strictMath&sourceMap')
            },
            {test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[\.a-z0-9]+)?$/, loader: "file-loader"}
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, './web/index.html'), inject: true}),
        new ExtractTextPlugin("[name].css")

    ],
    devServer: {
        port: 3000,
        inline: true,
        progress: true,
        colors: true,
        open: true,
        contentBase: "."
    }
};