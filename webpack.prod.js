const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = merge(common, {
    devtool: 'hidden-source-map',
    module: {
        noParse: /(mapbox-gl)\.js$/,
        rules: [{
            test: /(\.css|\.scss)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                }],
            }),
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/[name].css');
            },
            allChunks: true,
        }),
        new UglifyJSPlugin({
            sourceMap: true,
            parallel: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
});
