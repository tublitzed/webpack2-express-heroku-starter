/* eslint-disable global-require,import/no-dynamic-require */
function buildConfig(env) {
  return require(`./webpack.${env || 'dev'}.config.js`);
}

module.exports = buildConfig;
/* eslint-enable global-require,import/no-dynamic-require */
