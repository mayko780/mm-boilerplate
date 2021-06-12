const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
  }),
];

if (devMode) {
  plugins.push(
    new FaviconsWebpackPlugin({
      logo: './src/assets/img/mm_black.png',
      favicons: {
        background: '#222',
        theme_color: '#a2ff00',
        icons: {
          coast: false,
          yandex: false,
        },
      },
    })
  );
}

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  target: devMode ? 'web' : 'browserslist',
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.ts?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  devtool: devMode ? 'source-map' : false,
  plugins: plugins,
};
