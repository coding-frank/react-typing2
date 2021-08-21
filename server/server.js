const path = require('path');
const middleware = require('webpack-dev-middleware');

// dotenv
const dotenv = require('dotenv');
const dotenv_result = dotenv.config({ path: path.join(__dirname, '../.env_dev') });
if (dotenv_result.error) {
  throw dotenv_result.error;
}

const express = require('express');
const webpack = require('webpack');
const config = require('../webpack/webpack.config.js')({ NODE_ENV: 'development' });

// paths
const DIST_DIR = path.join(__dirname, process.env.DIST_PATH);
const PUBLIC_DIR = path.join(__dirname, process.env.PUBLIC_PATH);

// express / server
const app = new express();

// webpack options
const compiler = webpack(config);

// Step 2: Attach the dev middleware to the compiler & the server
app.use(middleware(compiler, { publicPath: config.output.publicPath }));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require('webpack-hot-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

app.set('json spaces', 2);
app.set('trust proxy', true); // geo location

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: false }));

app.use(express.static(DIST_DIR));
app.use(express.static(PUBLIC_DIR));

app.get('/*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

console.log('Serving static files from ' + DIST_DIR);

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));

module.exports = app;
