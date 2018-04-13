const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require(path.resolve(__dirname,'webpack.config.dev.js'));
const compiler = webpack(webpackConfig);
const devServerConfig = {
    hot: true,
    writeToDisk: true,
    publicPath: webpackConfig.output.publicPath, 
    // writeToDisk: path => /\.html$/.test(path),
    // host:'127.0.0.1:4000'
}

module.exports = app => {
    app.use(webpackDevMiddleware(compiler, devServerConfig));
    app.use(webpackHotMiddleware(compiler));
}