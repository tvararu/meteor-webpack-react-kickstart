var path = require('path');
var webpack = require('webpack');

var babelSettings = {
  stage: 0
};

module.exports = {
  devtool: null,
  context: path.join(__dirname, '..'),
  entry: './react',
  output: {
    path: path.join(__dirname, '..', 'meteor', 'react-build-generated'),
    filename: 'app.js'
  },
  externals: {
    'react': 'React',
    'react-router': 'ReactRouter'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
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
