import '../css/other.css';   // CSS
import '../scss/main.scss';  // SCSS

import * as another from '../js/another';  // JS ファイルを読み込んでみる

import child from './child';

// Polyfill が必要そうなコードを入れておく
const wait = (ms: number = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const waitMs: number = 2000;
wait(waitMs)
  .then(() => {
    console.log(child);
    console.log(another);
  });
