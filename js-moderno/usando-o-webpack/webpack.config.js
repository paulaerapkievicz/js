const MiniCssExtractplugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractplugin.loader, 'css-loader'],
        // use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractplugin()],
}

// EXEMPLO DE CONFIGURAÇÕES WEBPACK:
// const path = require('path')
// module.exports = {
//   entry: {
//     main: './src/index.js',
//     hello: './src/hello.js',
//   },
//   //mode: 'production',
//   mode: 'development',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: '[name].bundle.min.js',
//   },
// }
