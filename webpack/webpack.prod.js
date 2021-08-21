const commonPaths = require('./common-paths');
const loaders = require('./loaders.prod');
const plugins = require('./plugins-prod');
const path = require('path');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		app: [`${commonPaths.contentBasePath}/index.tsx`],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	output: {
		path: commonPaths.outputPath,
		pathinfo: false,
		publicPath: '/',
	},
	devServer: {
		contentBase: './public',
		publicPath: './dist/',
		hot: false,
		noInfo: false,
		historyApiFallback: {
			disableDotRole: true,
			verbose: true,
		},
	},
	module: { rules: [loaders.CSSLoader, loaders.JSLoader, loaders.FileLoader, loaders.HTMLLoader, loaders.TSLoader] },
	optimization: {
		minimize: true,
		runtimeChunk: 'single'
	},
	plugins: [plugins.Dotenv, plugins.ProvidePlugin, plugins.HtmlWebpackPlugin1, plugins.ProgressPlugin, plugins.HashedModuleIdsPlugin]
};
