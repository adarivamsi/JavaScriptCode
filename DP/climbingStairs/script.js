console.clear();
console.log("Climbing Stairs");

var climbStairs = function (n) {
  let one = 1;
  let two = 1;
  for (let i = 0; i < n - 1; i++) {
    // console.log(one, two);
    let temp = one;
    one += two;
    two = temp;
  }
  return one;
};

// console.log(climbStairs(44));
// console.log(climbStairs(2));
console.log(climbStairs(5));
