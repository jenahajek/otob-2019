module.exports={
  context: __dirname + "/src",
  entry: "./js/index",
  output:{
    filename:"app.js",
    path:__dirname+"/docs/js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
