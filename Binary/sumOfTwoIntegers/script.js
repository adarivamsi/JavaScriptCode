console.clear();
console.log("Sum of Two Integers");

var getSum = function (a, b) {
  while (b != 0) {
    let temp = (a & b) << 1;
    a = a ^ b;
    b = temp;
  }

  return a;
};

console.log(getSum(1, 2));
console.log(getSum(5, 2));
console.log(getSum(15, 423));
console.log(getSum(10, 25));
