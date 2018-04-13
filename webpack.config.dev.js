const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app:['webpack-hot-middleware/client?noInfo=true&quite=true&reload=true', './src/index.js'],
        react: [
            'react',
            'react-dom',
            'react-router',
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'js'),
        publicPath: path.resolve(__dirname, 'public', 'js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: JSON.stringify({
                            cacheDirectory: true,
                            presets: ['env', 'react'],
                            plugins: ['react-hot-loader/babel', 'transform-object-rest-spread', 'transform-runtime', 'transform-decorators-legacy'],
                            compact: false
                        })
                    }
                ]

            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([ path.resolve(__dirname, 'public') ]),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ filename: path.resolve(__dirname, 'public', 'index.html') }),
        new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } })
    ],
    mode: "development",
    resolve: {
        extensions: ['.js'],
        modules: [ path.join(__dirname, 'node_modules') ],
        alias: {
            app: path.resolve('./src'),
            actions: path.resolve('./src/actions'),
            events: path.resolve('./src/events'),
            containers: path.resolve('./src/containers'),
            components: path.resolve('./src/components'),
            styles: path.resolve('./src/styles')
        }
    }
}
