const errorConstants = require('./error-constants');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

const addons = (/* string | string[] */ addonsArg) => {
	let addons = [...[addonsArg]].filter(Boolean);

	return addons.map(addonName => require(`./addons/webpack.${addonName}.js`));
};

module.exports = env => {
	if (!env) {
		throw new Error(errorConstants.ERR_NO_ENV_FLAG);
	}

	let envConfig;
	switch (process.env.NODE_ENV) {
		case 'development':
			console.log('loading development....');
			envConfig = require(`./webpack.dev.js`);
			break;
		case 'production':
			console.log('loading production....');
			envConfig = require(`./webpack.prod.js`);
			break;
		default:
			throw new Error(errorConstants.ERR_NO_ENV_FLAG);
	}

	const mergedConfig = merge(commonConfig, envConfig, ...addons(env.addons));
	return mergedConfig;
};
