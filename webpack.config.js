/* eslint-disable operator-linebreak */
/* eslint-disable indent */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');
// import jQuery from "jquery";

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]',
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: /\.txt/,
        type: 'asset/source',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        // 导入字体图标/自定义字体
        test: /\.(woff | eot | ttf | otf | svg)$/,
        type: 'asset/resource',
      },
    ],
  },

  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // output: {},
  externals: {
    jquery: 'jQuery',
    lodash: '_',
  },
  devServer: {
    open: true,
    // 配置前端请求代理
    proxy: {
      // 在开发环境下面代理的目标是"http://127.0.0.1:3000"
      // 在生产坏境下代理的目标是"http://api.cc0820.top:3000"
      '^/api': {
        target:
          // eslint-disable-next-line no-nested-ternary
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3000'
            : process.env.NODE_ENV === 'production'
            ? // eslint-disable-next-line indent
              // eslint-disable-next-line indent
              'http://api.cc0820.top:3000'
            : // eslint-disable-next-line indent
              '',
        pathRewrite: { '/api': '' },
      },
      '^/api1': {
        target: 'http://127.0.0.1:3001',
        pathRewrite: { '/api1': '' },
      },
    },
    //报错不显示
    client: {
      overlay: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '1234',
      cdn: {
        script: [
          'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js',
          'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js',
        ],
        style: [],
      },
    }),
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash:8].css',
    }),
  ],
};

// CDN (内容分发网络Content Deliver Network)
// 内容分发网络由若干服务器节点构成
