module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "index.bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0'],
        },
      },
      {
        test: /\.(ttf|eot|svg|woff2?)(\?v=\d\.\d\.\d)?$/,
        loader: "file-loader?name=fonts/[name].[ext]",
      },
    ],
  },
};
