console.clear();
console.log("Two Sum II");

var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum > target) {
      r -= 1;
    } else if (sum < target) {
      l += 1;
    } else {
      return [l + 1, r + 1];
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
