var path = require('path');
var webpack = require('webpack');

var babelSettings = {
  stage: 0,
  plugins: [
    'react-transform'
  ],
  extra: {
    'react-transform': [{
      target: 'react-transform-webpack-hmr',
      imports: ['react'],
      locals: ['module']
    }, {
      target: 'react-transform-catch-errors',
      imports: ['react', 'redbox-react']
    }]
  }
};

module.exports = {
  devtool: 'eval',
  context: path.join(__dirname, '..'),
  entry: [
    'webpack-hot-middleware/client',
    './react'
  ],
  output: {
    path: path.join(__dirname, '..', 'meteor', 'react-build-generated'),
    filename: 'app.js',
    publicPath: '/react-webpack-bundle/'
  },
  externals: {
    'react': 'React',
    'react-router': 'ReactRouter'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', query: babelSettings }
    ]
  }
};
