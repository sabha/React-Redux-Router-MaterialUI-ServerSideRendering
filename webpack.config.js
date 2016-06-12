var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: {
    login:'./app/login/index.js',
    admin:'./app/admin/index.js',
    parents:'./app/parents/index.js',
  },
  devtool: 'source-map',

  output: {
    path: 'public',
    filename: '[name].js',
    publicPath: '/'
  },
 resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.js']
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=es2015&presets[]=react' 
      }
    ]
  }
}
