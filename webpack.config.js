var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: [
    './src/main.js'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()          
  ]




















};
