const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

dotenv.config();

// next.config.js
module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  webpack: (config) => {
    const newConfig = config;
    const env = {
      'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT) || 'dev',
    };

    newConfig.resolve.modules = [path.resolve(__dirname, 'node_modules'), 'styled-components'];

    newConfig.plugins.push(new webpack.DefinePlugin(env));
    newConfig.plugins.push(new BundleAnalyzerPlugin());
    
    // fix for uglify-js-plugin
    newConfig.plugins = newConfig.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin');

    if (process.env.ENVIRONMENT === 'stage' || process.env.ENVIRONMENT === 'prod') {
      newConfig.plugins.push(new UglifyJsPlugin());
    }

    return newConfig;
  },
};
