const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules|tests/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  output: {
    filename: 'tiny_donuts.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'TinyDonuts',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
}
