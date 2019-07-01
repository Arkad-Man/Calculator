const merge = require('webpack-merge');
const webpackConfig = require('./webpack.common');

const buildWebpackConf = merge(webpackConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: []
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConf);
});
