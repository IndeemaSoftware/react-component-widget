const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const isProd = (process.env.NODE_ENV === 'production');
const babelSettings = JSON.parse(fs.readFileSync('.babelrc'));

const webpackConfig = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src'),

  output: {
    filename: isProd ? 'widget.min.js' : 'widget.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Widgets',
    libraryTarget: 'umd',
    // Prevents webpack from referencing `window` in the UMD build
    // Source: https://git.io/vppgU
    globalObject: "typeof self !== 'undefined' ? self : this"
  },

  module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //     query: babelSettings
    //   }
    // ]
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new LodashModuleReplacementPlugin({
      collections: true
    })
  ]
};

if (isProd) {
  webpackConfig.mode = 'production';
}

module.exports = webpackConfig;
