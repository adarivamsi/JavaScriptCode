console.clear();
console.log("Product of Array Except Self");

// Bruteforce
// Time Complexity: O(n^2)
// Space Complexity: O(n)
// var productExceptSelf = function (nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) product *= nums[j];
//       console.log(
//         i !== j
//           ? `iteration:${i} Pointed:${j}, Product: ${product}, Result: ${result}`
//           : "avoided"
//       );
//     }
//     result.push(Math.abs(product));
//   }

//   return result;
// };

var productExceptSelf = function (nums) {
  let result = new Array(nums.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
    console.log(`Result: ${result}. Prefix: ${prefix}`);
  }
  console.log("PrePostFix");
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
    console.log(`Result: ${result}. Postfix: ${postfix}`);
  }

  return result.map((x) => Math.abs(x));
};

// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
