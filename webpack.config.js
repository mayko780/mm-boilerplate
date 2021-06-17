const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const pathDist = path.resolve(__dirname, 'dist')

const faviconSettings = {
  logo: './src/assets/img/mm_black.png',
  favicons: {
    background: '#222',
    theme_color: '#a2ff00',
  },
}
if (devMode) {
  faviconSettings.favicons.icons = {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    firefox: false,
    windows: false,
    yandex: false,
  }
}

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new FaviconsWebpackPlugin(faviconSettings),
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
  }),
]

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  target: devMode ? 'web' : 'browserslist',
  output: {
    filename: devMode ? '[name].js' : '[name].[contenthash].js',
    assetModuleFilename: devMode
      ? 'assets/[ext][query]'
      : 'assets/[hash][ext][query]',
    path: pathDist,
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
        test: /\.(js|ts)x?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    contentBase: pathDist,
    hot: true,
  },
  devtool: devMode ? 'source-map' : false,
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: plugins,
}
