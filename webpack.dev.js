const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const webpackConfig = require('./webpack.common');

const devWebpackConf = merge(webpackConfig, {
    mode: 'development',

    // devtool: 'inline-source-map',
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        contentBase: webpackConfig.externals.paths.dist,
        compress: true,
        port: 8081
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConf);
});
