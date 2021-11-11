console.clear();
console.log("Maximum Product Subarray");

var maxProduct = function (nums) {
  let maxGlobal = nums[0]; //2
  let maxCurr = nums[0]; //2
  let min = nums[0]; //2
  for (let i = 1; i < nums.length; i++) {
    const tempMaxCurr = nums[i] * maxCurr;

    maxCurr = Math.max(nums[i], tempMaxCurr, nums[i] * min);
    min = Math.min(nums[i], tempMaxCurr, nums[i] * min);
    maxGlobal = Math.max(maxCurr, maxGlobal);
    console.log(
      `tempMaxCurr: ${tempMaxCurr}, maxGlobal: ${maxGlobal},maxCurr: ${maxCurr}, min: ${min}, num: ${nums[i]}`
    );
  }

  return maxGlobal;
};

console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([-3, -1, -1]));
