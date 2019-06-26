const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html"
});

module.exports = {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
          //query: {presets: ["react"]}
        },
        // {
        //   test: /\.scss$/,
        //   use: [
        //     MiniCssExtractPlugin.loader,
        //     "css-loader",
        //     { 
        //       loader: 'sass-loader', options: { sourceMap: true } 
        //     },
        //     {
        //       // Loader for webpack to process CSS with PostCSS
        //       loader: 'postcss-loader',
        //       options: {
        //         plugins: function () {
        //           return [
        //             require('autoprefixer')
        //           ];
        //         }
        //       }
        //     },
        //   ]
        // },
        {
          test: /\.(scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              // Adds CSS to the DOM by injecting a `<style>` tag
              loader: 'style-loader'
            },
            {
              // Interprets `@import` and `url()` like `import/require()` and will resolve them
              loader: 'css-loader'
            },
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              // Loads a SASS/SCSS file and compiles it to CSS
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
              {
                  loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: "[name]_[local]_[hash:base64:5]",
                  sourceMap: true,
                  minimize: true
                }
              },
            ]
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                  limit: 8000, // Convert images < 8kb to base64 strings
                  name: 'images/[hash]-[name].[ext]'
              } 
          }]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'windows.jQuery': 'jquery',
      }),
      new MiniCssExtractPlugin({
        filename: "style.css"
        //chunkFilename: "[id].css"
      }),
      htmlWebpackPlugin
    ]
  };