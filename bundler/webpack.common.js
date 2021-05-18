const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: './src/script.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'source-map',
    plugins:
        [
            new CopyWebpackPlugin({
                patterns: [
                    {from: path.resolve(__dirname, '../static')}
                ]
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: false
            })
        ],
    module:
        {
            rules:
                [
                    // HTML
                    {
                        test: /\.(html)$/,
                        use: ['html-loader']
                    },

                    // JS
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use:
                        [
                            'babel-loader'
                        ]
                    }
                ]
        }
}
