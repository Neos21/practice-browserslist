const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',  // モード指定
  entry: './src/js/main.js',  // エントリポイント
  // 出力先パス・ファイル名
  output: {
    path    : path.resolve(__dirname, 'dist/'),
    filename: 'js/[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/css/[name].css'
    })
  ],
  module: {
    rules: [
      // ECMAScript をトランスパイルする
      {
        test: (/\.js$/u),
        use: [{
          loader: 'babel-loader'
          // オプションは .babelrc で指定する
        }],
        exclude: (/node_modules/u)
      },
      // SCSS を CSS ファイルとして出力する
      {
        test: (/\.s(a|c)ss$/u),
        use: [
          // Loader は最後のモノから順に適用される
          // sass-loader で SCSS から CSS に変換 → postcss-loader (PostCSS) で Autoprefixer を適用し CSS 圧縮 → css-loader で @import などを解決 → mini-css-extract-plugin で CSS ファイルとして書き出す
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',  // Autoprefixer の指定は postcss.config.js で行う
          'sass-loader'
        ]
      }
    ]
  }
};
