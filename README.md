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
  console.log(terbilang(123456789987654321)); // seratus dua puluh tiga kuadriliun empat ratus lima puluh enam triliun tujuh ratus delapan puluh sembilan miliar sembilan ratus delapan puluh tujuh juta enam ratus lima puluh empat ribu tiga ratus dua puluh
```

## Naming Standards
```
1.000.000 (6) = 1 Juta.
1.000.000.000 (9) = 1 Milyar.
1.000.000.000.000 (12) = 1 Triliun.
1.000.000.000.000.000 (15) = 1 Kuadriliun.
1.000.000.000.000.000.000 (18) = 1 Kuantiliun.
1.000.000.000.000.000.000.000 (21) = 1 Sekstiliun.
1.000.000.000.000.000.000.000.000 (24) = 1 Septiliun.
1.000.000.000.000.000.000.000.000.000 (27) = 1 Oktiliun.
1.000.000.000.000.000.000.000.000.000.000 (30) = 1 Noniliun.
1.000.000.000.000.000.000.000.000.000.000.000 (33) = 1 Desiliun.
```

## Limitation
```
Handles up to 'desiliun'
```
