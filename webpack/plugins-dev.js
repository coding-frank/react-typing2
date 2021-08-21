const path = require('path');
const webpack = require('webpack');
const _DotenWebpack = require('dotenv-webpack');
const _Dotenv = require('dotenv').config({ path: path.join(__dirname, '../.env_dev') });
const _HtmlWebpackPlugin = require('html-webpack-plugin');

const DotenWebpack = new _DotenWebpack({
	path: './.env_dev',
	allowEmptyValues: false,
	systemvars: false,
	silent: false, // hide any errors
	defaults: false, // load '.env.defaults' as the default values if empty.
});

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
	title: 'Typing react',
	inject: true,
	template: '../../public/index.html',
	filename: 'index.html',
	favicon: '../../public/favicon.ico',
	showErrors: true,
	minify: false,
});

const ProvidePlugin = new webpack.ProvidePlugin({
	process: 'process/browser',
	'process.env': _Dotenv.parsed,
});

module.exports = {
	Dotenv: DotenWebpack,
	HotModuleReplacementPlugin: new webpack.HotModuleReplacementPlugin(),
	HtmlWebpackPlugin: HtmlWebpackPlugin,
	ProgressPlugin: new webpack.ProgressPlugin(),
	ProvidePlugin: ProvidePlugin
};
