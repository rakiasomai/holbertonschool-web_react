
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin({
		cleanStaleWebpackAssets: false,
	}),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      title: 'Holberton Dashboard',
      template: './dist/index.html',
      templateContent: ({ HtmlWebpackPlugin }) => `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <!-- <link rel="icon" type="image/png" href="favicon.ico" /> -->
          <script defer src="./bundle.js"></script>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
          <title>Holberton Dashboard</title>
        </head>
        <body>
          <div id="root-notifications"></div>
          <div id="root"></div>
        </body>
      </html>
      `
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        type: 'asset/resource',
        loader: 'image-webpack-loader'
      }
    ]
  }
};
