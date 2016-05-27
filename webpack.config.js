module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline: true,
  },
};
