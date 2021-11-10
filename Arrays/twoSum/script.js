// Solution #1 - Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (i != j)
//       console.log(`iteration: i:${i}, j:${j}`, nums[i] + nums[j]);
//       if (nums[i] + nums[j] === target && i != j ) {
//         return [i, j];
//       }
//     }
//   }
// };

// Solution #2 - Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const find = target - nums[i];
    console.log("find", find);
    if (map.has(find)) {
      return [map.get(find), i];
    }
    map.set(nums[i], i);
    console.log("map", map);
  }
};

console.log(twoSum([11, 2, 15, 7], 9));
