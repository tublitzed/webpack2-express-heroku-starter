const path = require('path');
const devConfig = require('./webpack.config.js');

const config = Object.assign({}, devConfig, {
  entry: [
    path.join(__dirname, '/../app/src/main.js'),
  ],
});

module.exports = config;
