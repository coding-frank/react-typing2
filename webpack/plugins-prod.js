const path = require('path');
const webpack = require('webpack');
const _DotenWebpack = require('dotenv-webpack');
const _Dotenv = require('dotenv').config({ path: path.join(__dirname, '../.env_prod'), });
const _HtmlWebpackPlugin = require('html-webpack-plugin');

const DotenWebpack = new _DotenWebpack({
  path: './.env_prod',
  allowEmptyValues: false,
  systemvars: false,
  silent: false, 
  defaults: false
});

const HtmlWebpackPluginBasics = {
  inject: true,
  showErrors: false,
  favicon: '../../public/favicon.ico',
};

const HtmlWebpackPluginMinifySettings = {
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
};

const HtmlWebpackPlugin = new _HtmlWebpackPlugin(Object.assign({},
    HtmlWebpackPluginBasics,
    {
      title: 'Typing react',
      template: '../../public/index.html',
      filename: 'index.html',
    },
    HtmlWebpackPluginMinifySettings));

const ProvidePlugin = new webpack.ProvidePlugin({
  process: 'process/browser',
  'process.env': _Dotenv.parsed,
});

module.exports = {
  Dotenv: DotenWebpack,
  HashedModuleIdsPlugin: new webpack.ids.HashedModuleIdsPlugin(),
  HtmlWebpackPlugin1: HtmlWebpackPlugin,
  ProgressPlugin: new webpack.ProgressPlugin(),
  ProvidePlugin: ProvidePlugin
};
