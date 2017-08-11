import path from "path";

export default {
  module : {
    loaders : [
      {
        test    : /\.jsx?$/,
        loaders : ["babel-loader"],
        exclude : /node_modules/
      }
    ]
  },
  output : {
    path          : path.resolve("./build"),
    filename      : "bundle.js",
    libraryTarget : "commonjs2"
  },
  resolve : {
    modules    : ["node_modules", "browser"],
    extensions : [".js", ".jsx"]
  }
};
