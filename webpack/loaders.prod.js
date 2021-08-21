const FileLoader = {
	test: /\.(png|jpg|jpeg|gif)$/i,
	use: [{
			loader: 'file-loader',
			options: {
				limit: 8192,
				name: '[name].[ext]',
				outputPath: 'img',
			},
		},],
	type: 'javascript/auto',
};

const JSLoader = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: [{
			loader: 'babel-loader',
			options: { cacheDirectory: true },
		},],
};

const TSLoader = {
	test: /\.tsx?$/,
	loader: 'ts-loader',
	exclude: /node_modules/,
};

const HTMLLoader = {
	test: /\.html$/i,
	loader: 'html-loader',
};

const CSSLoader = {
	test: /\.(s[ac]|c)ss$/i,
	sideEffects: true,
	use: [
		{
			loader: 'css-loader', // Translates CSS into CommonJS
			options: {
				importLoaders: 1,
				sourceMap: true,
			}
		}
	],
};

module.exports = {
	TSLoader: TSLoader,
	FileLoader: FileLoader,
	JSLoader: JSLoader,
	CSSLoader: CSSLoader,
	HTMLLoader: HTMLLoader
};
