var path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        include: './src',
        loader: 'ts-loader'
      }
    ]
  }
}
