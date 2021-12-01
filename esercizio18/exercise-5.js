function memoize(fn) {
  let cache = {};  

  return num => {
    if (cache[num]) {
      return cache[num];
    }
    console.log('Calcolo in corso di ' + num);
    cache[num] = fn(num);
    return fn(num);
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));