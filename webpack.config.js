const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [

      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },

      //SCSS
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader?includePaths[]=' + path.resolve(__dirname, './src')]
      },

      // Images and other files
      {
        test: /\.(png|svg|jpg|ttf|woff|woff2|eot)$/,
        loader: 'url-loader?limit=100000'
      }

    ]
  },

  postcss: [
    autoprefixer({
      browsers: ['last 10 versions']
    })
  ]
};
