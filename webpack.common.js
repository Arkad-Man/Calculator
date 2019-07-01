const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}

module.exports = {
    externals: {
        paths: PATHS
    },

    entry: {
        app: PATHS.src
    },

    output: {
        filename: `${PATHS.assets}js/[name].bundle.js`,
        path: PATHS.dist,
        publicPath: '/'
    },

    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: `${PATHS.src}/post.config.js`
                            }
                        }
                    },
                ],
            },

        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].bundle.css`,
            // chunkFilename: '[id].css',
        }),

        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/static`,
                to: ``
            }
        ]),

        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html'
        })
    ],
};
