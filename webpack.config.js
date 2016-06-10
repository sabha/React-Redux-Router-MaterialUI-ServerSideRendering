var webpack = require('webpack')

module.exports = {
  entry: {
    login:'./modules/login/index.js',
    admin:'./modules/admin/index.js',
    parents:'./modules/parents/index.js',
  },
  devtool: 'source-map',

  output: {
    path: 'public',
    filename: '[name].js',
    publicPath: '/'
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
