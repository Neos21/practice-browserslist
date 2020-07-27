// PostCSS 実行時に Autoprefixer を読み込み、Browserslist の指定を利用させる
module.exports = {
  plugins: [
    require('autoprefixer')({
      // CSS Grid に関する対応を入れる (IE 向け)
      grid: true
    })
  ]
};
