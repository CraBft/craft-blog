const path = require('path')
const manifestJson = require('./manifest.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const ZipPlugin = require('zip-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CraftExtensionApiPlugin } = require('@craftdocs/craft-extension-api-sdk')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ReactRefreshTypeScript = require('react-refresh-typescript')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'

  return {
    entry: {
      app: './src/index.ts',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [!isProd && ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: !isProd,
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(svg|png|bmp|jpg|jpeg|webp|gif)$/i,
          type: 'asset/inline',
        },
      ],
    },
    plugins: [
      new CraftExtensionApiPlugin(),
      new HtmlWebpackPlugin({
        inject: 'body',
        template: path.resolve(__dirname, 'src/index.html'),
        chunks: ['app'],
      }),
      !isProd && new ReactRefreshWebpackPlugin(),
      isProd && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/app/]),
      isProd &&
        new CopyPlugin({
          patterns: [{ from: 'manifest.json' }, { from: 'icon.png' }],
        }),
      isProd &&
        new ZipPlugin({
          filename: manifestJson.fileName,
          extension: 'craftx',
          include: ['app.js.LICENSE.txt', 'index.html', 'manifest.json', 'icon.png'],
        }),
    ].filter(Boolean),
    devServer: {
      static: 'dist',
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
        reconnect: true,
      },
      hot: true,
    },
  }
}
