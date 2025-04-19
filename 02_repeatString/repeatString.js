const repeatString = function (x, y) {
  // return x.repeat(y);
  let str = "";
  for (let i = 0; i < y; i++) {
    str += x;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
