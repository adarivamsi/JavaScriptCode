console.clear();
console.log("Maximum Subarray");

// Time Complexity: O(n)
// Space Complexity: O(1)
var maxSubArray = function (nums) {
  let maxSub = nums[0];
  let currentSum = 0;

  for (let num of nums) {
    if (currentSum < 0) currentSum = 0;
    currentSum += num;
    maxSub = Math.max(maxSub, currentSum);
    console.log(`currentSum: ${currentSum}, num: ${num}, maxSub: ${maxSub}`);
  }

  return maxSub;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
