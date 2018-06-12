import Webpack from "webpack";
import BaseConfiguration from "./webpack.base";

export default {
  ...BaseConfiguration,

  devtool : "source-map",
  target  : "electron-renderer",

  entry : [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr",
    "./browser/index"
  ],

  module : {
    ...BaseConfiguration.module,

    rules : [
      ...BaseConfiguration.module.rules,

      {
        test : /\.scss$/,
        use  : [
          { loader: "style-loader" },
          {
            loader  : "css-loader",
            options : {
              camelCase : true,
              modules   : true,
              sourceMap : true
            }
          },
          {
            loader  : "sass-loader",
            options : {
              sourceMap : true
            }
          }
        ]
      }
    ]
  },

  output : {
    ...BaseConfiguration.output,

    publicPath : "http://localhost:3000/build/"
  },

  plugins : [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.DefinePlugin({
      __DEV__       : true,
      "process.env" : {
        NODE_ENV : JSON.stringify("development")
      }
    }),
    new Webpack.LoaderOptionsPlugin({ debug: true })
  ]
};
