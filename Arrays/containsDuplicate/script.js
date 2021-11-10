console.log("Contains Duplicate");

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// var containsDuplicate = function(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       console.log(`i: ${i}, j: ${j}`);
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// One Liner
var containsDuplicate = function (nums) {
  return nums.length !== [...new Set(nums)].length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
