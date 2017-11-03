const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const angularExternals = require('webpack-angular-externals');
const rxjsExternals = require('webpack-rxjs-externals');


module.exports = {
  name: 'build',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  },
  externals: [
    angularExternals(),
    rxjsExternals()
  ],
  devtool: 'source-map',
  module:{
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [
          /node_modules/,
          /\.(spec|e2e)\.ts$/
        ]
      },

      {
        test: /\.json$/,
        use: 'json-loader'
      },

      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader']
      },

      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(__dirname, 'src')
    ),

    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    }),
  ],

}

