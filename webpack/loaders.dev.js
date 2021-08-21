// raw-loader to import a file as a string
// url-loader to inline a file into the bundle as a data URI
// file-loader to emit a file into the output directory


const FileLoader = {
	test: /\.(png|jpg|jpeg|gif)$/i,
	use: [
		{
			loader: 'file-loader',
			options: {
				limit: 8192,
				name: '[name].[ext]'
			},
		},
	],
	type: 'javascript/auto',
};

// additional options in .babelrc
const JSLoader = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: [
		{
			loader: 'babel-loader',
			options: {
				cacheDirectory: true
			},
		},
	],
};

const TSLoader = {
	test: /\.tsx?$/,
	loader: 'ts-loader',
	options: {
		transpileOnly: true,
	},
	exclude: /node_modules/,
};

const HTMLLoader = {
	test: /\.html$/i,
	loader: 'html-loader',
};

const CSSLoader = {
	test: /\.(s[ac]|c)ss$/i,
	//exclude: /node_modules/,
	use: [
		'style-loader',
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				sourceMap: true,
			},
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
