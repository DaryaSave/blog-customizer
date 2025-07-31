const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env) => {
  const isDev = env.env === 'dev';
  const isProd = env.env === 'prod';

  return {
    mode: isDev ? 'development' : 'production',
    entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
    output: {
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, '..', 'build'),
      clean: true,
      publicPath: isDev ? '/' : './',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        'src': path.resolve(__dirname, '..', 'src'),
        'components': path.resolve(__dirname, '..', 'src', 'components'),
        'fonts': path.resolve(__dirname, '..', 'src', 'fonts'),
      },
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: (resourcePath) => resourcePath.includes('.module.'),
                  localIdentName: isDev
                    ? '[name]__[local]--[hash:base64:5]'
                    : '[hash:base64:8]',
                },
              },
            },
            'postcss-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', 'public', 'index.html'),
        inject: 'body',
        scriptLoading: 'defer',
      }),
      isDev && new ReactRefreshWebpackPlugin(),
      isProd && new CleanWebpackPlugin(),
      isProd &&
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
    ].filter(Boolean),
    devtool: isDev ? 'eval-source-map' : false,
  };
};
