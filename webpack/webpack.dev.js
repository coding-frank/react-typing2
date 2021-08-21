const commonPaths = require('./common-paths');
const loaders = require('./loaders.dev');
const plugins = require('./plugins-dev');
const path = require('path');

module.exports = {
	mode: 'development',
	stats: { errorDetails: true },
	entry: { app: ['webpack-hot-middleware/client?reload=true', `${commonPaths.contentBasePath}/index.tsx`] },
	resolve: {
		alias: { assets: path.resolve('public/assets/img') },
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	output: {
		path: commonPaths.outputPath,
		pathinfo: false,
		publicPath: '/',
	},
	devtool: 'eval-cheap-source-map',
	devServer: {
		contentBase: commonPaths.outputPath,
		hot: true,
		noInfo: false,
		historyApiFallback: true,
	},
	module: { rules: [loaders.CSSLoader, loaders.JSLoader, loaders.FileLoader, loaders.HTMLLoader, loaders.TSLoader] },
	plugins: [
		plugins.Dotenv,
		plugins.ProvidePlugin,
		plugins.HtmlWebpackPlugin,
		plugins.ProgressPlugin,
		plugins.HotModuleReplacementPlugin
	],
	optimization: { minimize: false },
};
