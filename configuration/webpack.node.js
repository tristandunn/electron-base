/* global module,require */

require("babel-register");

module.exports = {
  output : {
    libraryTarget : "commonjs2"
  },
  module : {
    rules : [
      {
        use     : [{ loader: "babel-loader" }],
        test    : /\.jsx?$/,
        exclude : /node_modules/
      },
      {
        test : /\.scss$/,
        use  : [
          { loader: "style-loader" },
          {
            loader  : "css-loader",
            options : {
              modules   : true,
              camelCase : true
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
