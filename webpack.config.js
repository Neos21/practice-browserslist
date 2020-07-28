const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',  // モード指定
  entry: './src/ts/main.ts',  // エントリポイント
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
  resolve: {
    // デフォルトでは拡張子 .ts を取得できないため指定する (import の解決などに使用する)
		extensions: ['.ts', '.js']
	},
  module: {
    rules: [
      // ECMAScript をトランスパイルする
      {
        test: [(/\.ts$/u), (/\.js$/u)],
        use: [
          'babel-loader',  // オプションは .babelrc で指定する
          'ts-loader'      // tsconfig.json も参照
        ],
        exclude: (/node_modules/u)
      },
      // SCSS を CSS ファイルとして出力する
      {
        test: (/\.(sa|sc|c)ss$/u),
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
