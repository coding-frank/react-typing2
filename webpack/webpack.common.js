const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	resolve: {
		alias: {
			process: 'process/browser',
			'cipher-base': 'cipher-base',
			string_decoder: 'string_decoder',
			buffer: 'buffer',
			crypto: 'crypto-browserify',
			stream: 'stream-browserify',
			path: 'path-browserify',
			'safe-buffer': 'safe-buffer',
			pbkdf2: 'pbkdf2',
			'create-hash': 'create-hash',
			'create-hmac': 'create-hmac',
		},
		extensions: ['*', '.js', '.jsx', '.scss', '.ts', '.tsx'],
		symlinks: false,
	},
};
