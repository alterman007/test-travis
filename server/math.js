function zero(flag = true) {
  if (flag) {
    return 0;
  }
  return Math.random();
}

module.exports = {
  add: (...args) => args.reduce((pre, cur) => pre + cur),
  multi: (...args) => args.reduce((pre, cur) => pre * cur),
  complex: (a, b) => {
    if (a > b) {
      return a - b;
    }
    if (a < b) {
      return b - a;
    }
    return zero();
  }
}