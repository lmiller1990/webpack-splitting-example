const webpack = require("webpack")

module.exports = {
  plugins: [
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 100,
      maxSize: 200,
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        }
      }
    }
  }
}
