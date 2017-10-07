import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const config = require('./webpack.config.js');

const PORT = process.env.PORT || 8080;

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  publicPath: '/',
  inline: true,
  historyApiFallback: true,
  hot: true,
  disableHostCheck: true,
});

server.listen(PORT, 'localhost');
