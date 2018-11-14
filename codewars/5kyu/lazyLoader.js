function makeLooper(str) {
    // TODO: return a function that loops through 'str' on successive invocations
    var length = str.length;
    var count = 0;
    return function () {
      var idx;
      count++;
      if (count > length) {
        idx = count % length;
        if (idx === 0) {
          idx = length - 1;
        } else {
          idx -= 1;
        }
      } else {
        idx = count - 1;
      }
      return str[idx];
    };
  }

  var test = makeLooper('hello');
  console.log(test()); // 'h'
  console.log(test()); // 'e'
  console.log(test()); // 'l'
  console.log(test()); // 'l'
  console.log(test()); // 'o'
  console.log(test()); // 'h'