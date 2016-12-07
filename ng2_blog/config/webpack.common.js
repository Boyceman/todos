var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers           = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './assets/polyfills.ts',
    'vendor'   : './assets/vendor.ts',
    'app'      : './assets/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.scss']
  },

  module : {
    loaders: [{
      test   : /\.ts$/,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    }, {
      test  : /\.html$/,
      loader: 'html'
    }, {
      test  : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test   : /\.scss$/,
      include: [helpers.root('assets')],
      loader : 'raw-loader!scss-loader'
    }, {
      test   : /\.css$/,
      include: helpers.root('assets', 'app'),
      loader : 'raw'
    }, {
      test   : /\.scss$/,
      exclude: [helpers.root('assets')],
      loader : ExtractTextPlugin.extract('css-loader!scss-loader')
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'assets/index.html'
    })
  ]
};
