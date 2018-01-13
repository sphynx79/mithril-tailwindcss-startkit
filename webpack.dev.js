const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: './dist',
        port: 3000,
        proxy: {
            '/api': 'http://localhost:3001',
        },
        /*overlay: {
            errors: true,
            warnings: true,
        },*/
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'css-hot-loader',
            }].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{ loader: 'css-loader', options: { importLoaders: 1} }, 'postcss-loader'],
            })),
        }, 
        //     {
        //     test: /\.js$/,
        //     enforce: 'pre',
        //     exclude: /node_modules/,
        //     loader: 'eslint-loader',
        //     options: {
        //         cache: true,
        //         emitWarning: true,
        //         // Fail only on errors
        //         failOnWarning: false,
        //         failOnError: false,
        //         // Toggle autofix
        //         fix: false,
        //         formatter: require('eslint/lib/formatters/stylish'),
        //     },
        // }
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/[name].css');
            },
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
});
