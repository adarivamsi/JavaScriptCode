console.clear();
console.log("Number of One bits");

// var hammingWeight = function (n) {
//   let result = 0;
//   while (n) {
//     result += n % 2;
//     n = n >> 1;
//   }

//   return result;
// };

// Minimal iterations
var hammingWeight = function (n) {
  let result = 0;
  while (n) {
    n &= n - 1;
    result += 1;
  }

  return result;
};

console.log(hammingWeight(00000000000000000000000000001011));
