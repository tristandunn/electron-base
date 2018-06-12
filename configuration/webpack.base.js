import path from "path";

export default {
  mode : "development",

  module : {
    rules : [
      {
        use     : [{ loader: "babel-loader" }],
        test    : /\.jsx?$/,
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
