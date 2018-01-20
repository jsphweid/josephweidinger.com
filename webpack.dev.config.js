const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: "source-map",
    entry: {
        client: ['react-hot-loader/patch', 'webpack/hot/only-dev-server', './src/index'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    { loader: 'base64-inline-loader?name=[name].[ext]' }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html',
            chunksSortMode: 'auto',
            chunks: ['vendor', 'client'],
            minify: {
                collapseWhitespace: false
            }
        })
    ]

};