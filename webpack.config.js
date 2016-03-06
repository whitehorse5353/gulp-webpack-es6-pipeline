'use strict';

const path = require('path');

module.exports = (options) => {
  const config = {
    resolveLoader: {root: path.join(__dirname, 'node_modules')},
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    entry: options.entryPoints,
    output: {
      path: path.join(options.outputDir),
      filename: '[name].js'
    },
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: require.resolve('eslint-loader')
        }
      ],
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loader: require.resolve('babel-loader'),
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },
    plugins: [],
    devtool: 'cheap-module-eval-source-map',
    debug: true
  };

  return config;
};