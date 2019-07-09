module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "production",

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/env']
            }
          }
        }
      ]
    },
  
    // メインのJS
    entry: "./app/scripts.babel/manage.js",
    // 出力ファイル
    output: {
      filename: "bundle.js"
    }
  }