const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'finalBuild'),
      filename: 'finalBuild.js',
    },
    mode: "production",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader",
          }
        ]
      },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.tmpl',
    })],
  };