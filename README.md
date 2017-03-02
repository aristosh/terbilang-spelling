# terbilang-spelling
Convert numbers to Indonesian spelling.
Supports floating point

## How to install
```shell
  npm install terbilang-spelling 
```

## How to use
```js
  var terbilang = require('terbilang-spelling');

  console.log(terbilang(123));                // seratus dua puluh tiga
  console.log(terbilang(2312.009170000));     // dua ribu tiga ratus dua belas koma nol nol sembilan satu tujuh
  console.log(terbilang(123456789987654321)); // seratus dua puluh tiga billiun empat ratus lima puluh enam triliun tujuh ratus delapan puluh sembilan miliar sembilan ratus delapan puluh tujuh juta enam ratus lima puluh empat ribu tiga ratus dua puluh
```

## Limitation
```
Only handles up to 'billiun'
```
