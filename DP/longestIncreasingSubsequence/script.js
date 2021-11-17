console.clear();
console.log("Longest Increasing Subsequence");

var lengthOfLIS = function (nums) {
  let lis = Array(nums.length).fill(1);
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // console.log(i, j);
      if (nums[i] > nums[j]) {
        lis[i] = Math.max(lis[i], 1 + lis[j]);
      }
    }
  }

  return Math.max(...lis);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([1, 2, 4, 3]));
