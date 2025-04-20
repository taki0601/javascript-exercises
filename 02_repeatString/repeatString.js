const repeatString = function (x, y) {
  // return x.repeat(y);
  if (y < 0) return "ERROR";
  let str = "";
  for (let i = 0; i < y; i++) {
    str += x;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
