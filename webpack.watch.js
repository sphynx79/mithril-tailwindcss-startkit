const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /(\.css|\.scss)$/,
            use: [{
                loader: 'css-hot-loader',
            }].concat(ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                }],
                // use style-loader in development
                fallback: 'style-loader',
            })),
        }, 
      
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/[name].css');
            },
            allChunks: true,
        }),
    ],
});
