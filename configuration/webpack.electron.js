/* global __dirname */

import Path from "path";
import Webpack from "webpack";
import BaseConfiguration from "./webpack.base";

export default {
  ...BaseConfiguration,

  devtool : "hidden",
  entry   : Path.resolve(`${__dirname}/../application/index`),
  target  : "electron-main",

  output : {
    ...BaseConfiguration.output,

    path     : __dirname,
    filename : "../build/index.js"
  },

  plugins : [
    new Webpack.optimize.UglifyJsPlugin({
      compressor : {
        warnings : false
      }
    }),
    new Webpack.DefinePlugin({
      "process.env" : {
        NODE_ENV : JSON.stringify("production")
      }
    })
  ],

  node : {
    __dirname  : false,
    __filename : false
  }
};
