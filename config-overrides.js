/**
 * Allows overriding create-react-app without ejecting.
 * https://github.com/timarney/react-app-rewired
 */

const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
  // Add sass support.
  config = rewireCssModules(config, env);

  return config;
}
