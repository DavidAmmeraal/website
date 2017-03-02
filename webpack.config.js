const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const webpack = require('webpack');
const path = require('path');
const buildPath = path.join(__dirname, 'build');
const srcPath = path.join(__dirname, 'src');
const rootPath = srcPath;

var config = {
    entry: [
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    output: {
      path: buildPath,
      filename: 'bundle.js'
    },
    resolve: require('./resolve'),
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }, {
                test: /\.html$/,
                loader: 'raw'
            },
            {
              test: /\.css$/,
              loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'postcss-loader'
              ]
            },
            {
              test: /\.(png|jpg|gif)$/,
              loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
              ]
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    devtool: 'eval',
    devServer:{
        contentBase:  path.join(__dirname , 'build'),
        outputPath: path.join(__dirname , 'build'),
        inline: true,
        cache: true,
        host: '0.0.0.0',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'David Ammeraal | Full-Stack Developer',
          template: path.join(__dirname , 'src', 'index.ejs')
        }),
        new webpack.ProvidePlugin({
          "React": "react"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FaviconsWebpackPlugin(path.join(srcPath, 'assets', 'img', 'logo.png'))
    ]
};

module.exports = config;
