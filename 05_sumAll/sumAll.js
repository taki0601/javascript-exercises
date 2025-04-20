const sumAll = function (intA, intB) {
  if (!Number.isInteger(intA) || !Number.isInteger(intB)) {
    return "ERROR";
  }
  if (intA < 0 || intB < 0) {
    return "ERROR";
  }
  let sum = 0;
  if (intA < intB) {
    for (let i = intA; i <= intB; i++) {
      sum += i;
    }
  } else {
    for (let i = intA; i >= intB; i--) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
