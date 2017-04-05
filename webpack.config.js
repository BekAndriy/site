var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        './src/main.js', 
    ],

    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js",
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new NpmInstallPlugin(),
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                include: [
                    path.resolve(__dirname, "src"),
                ],
                // exclude: [/node_modules/, /public/]
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}