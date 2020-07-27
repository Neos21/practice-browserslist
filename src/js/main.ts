import '../scss/main.scss';

import child from './child';
import * as another from './another';  // JS ファイルを読み込んでみる

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
