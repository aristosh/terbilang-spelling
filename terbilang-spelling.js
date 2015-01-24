function terbilang(num) {
  var rev = num.toString().replace(/\.[0-9]+/, '').split('').reverse();

  if(num.toString().search(/\./) >= 0)
    var revDecimal = num.toString().replace(/[0-9]+\./, '').split('').reverse();

  var result = '';
  var thousands = '';

  // handle decimal
  if(revDecimal) {
    for(var i = 0; i < revDecimal.length; i++)
      result = toWords(revDecimal, i, true) + result;
    result = 'koma ' + result;
  }

  // handle non-decimal
  for(var i = 0; i < rev.length; i++) {
    if(i == 3) {
      thousands = 'ribu ';
    } else if(i == 6) { 
      thousands = 'juta ';
    } else if(i == 9) {
      thousands = 'miliar ';
    } else if(i == 12) {
      thousands = 'triliun ';
    } else if(i == 15) {
      thousands = 'billiun ';
    }

    if(rev[i] != '0') {
      if((i % 3) == 0) {
        if(rev[i + 1] == '1') {
          result = toWords(rev, i) + 'belas ' + thousands + result;
          i++;
        } else {
          result = toWords(rev, i) + thousands + result;
        }
        thousands = '';
      } else if((i % 3) == 2) {
        result = toWords(rev, i) + 'ratus ' + thousands + result;
        thousands = '';
      } else if((i % 3) == 1) {
        result = toWords(rev, i) + 'puluh ' + thousands + result;
        thousands = '';
      }
    }
  }

  return result;

  function toWords(arr, index, decimal) {
    var number = arr[index];
    switch(number) {
      case '.':
        if(decimal)
          return 'koma ';
      case '0':
        if(decimal)
          return 'nol ';
        return '';
      case '1':
        if(!decimal && (index == 1 || index == 2 || arr[index + 1]  == '1' || (index % 3) == 1 || (index % 3) == 2))
          return 'se';
        return 'satu ';
      case '2':
        return 'dua ';
      case '3':
        return 'tiga ';
      case '4':
        return 'empat ';
      case '5':
        return 'lima ';
      case '6':
        return 'enam ';
      case '7':
        return 'tujuh ';
      case '8':
        return 'delapan ';
      case '9':
        return 'sembilan ';
    }
  }
}

module.exports = terbilang;
