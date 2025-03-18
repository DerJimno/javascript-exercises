const sumAll = function(numA, numB) {
  if (!Number.isInteger(numA) || !Number.isInteger(numB)) return "ERROR";
  if (numA < 0 || numB < 0) return "ERROR";
  if (numA > numB) [numB, numA] = [numA, numB];

  let sum = 0;
  for (let i = numA; i < numB + 1; i++) {
    sum += i 
  };
  return sum
};
// Do not edit below this line
module.exports = sumAll;
