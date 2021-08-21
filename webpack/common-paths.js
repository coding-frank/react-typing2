const resolve = require('path').resolve;

module.exports = {
	outputPath: resolve(__dirname, '../', 'dist'),
	publicPath: resolve(__dirname, '../', 'public'),
	contentBasePath: resolve(__dirname, '../', 'src'),
	srcPath: resolve(__dirname, '../src'),
	stylesheetsPath: resolve(__dirname, '../src/styles'),
	bundleVisualizerStatsPath: resolve(__dirname, '../dist/stats'),
};
