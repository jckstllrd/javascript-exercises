const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  }

  let fib = [1, 1];

  for (let i = 1; i < n; i++) {
    let nextFib = fib[i - 1] + fib[i];
    fib.push(nextFib);
  }

  console.log(fib);

  return fib[fib.length - 2];
};

// Do not edit below this line
module.exports = fibonacci;
