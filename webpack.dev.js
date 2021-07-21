const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    entry: './src/client/index.js',
    output: {
         libraryTarget: 'var',
         library: 'client'
     },

//https://github.community/t/im-getting-the-error-invalid-configuration-object-in-my-vue-cli-build/15200
    module : {
    rules: [
                   {
               test: '/\.js$/',
               exclude: /node_modules/,
               loader: "babel-loader"
             },
             {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
              }
           ]
         },
       plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
          // Simulate the removal of files
          dry: true,
          // Write Logs to Console
          verbose: true,
          // Automatically remove all unused webpack assets on rebuild
          cleanStaleWebpackAssets: true,
          protectWebpackAssets: false
  }),
    new WorkboxPlugin.GenerateSW()
      ]
}
