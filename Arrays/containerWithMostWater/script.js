console.clear();
console.log("Three Sum");

var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    console.log(`i: ${i}, l: ${l}, r: ${r}, res: ${res}`);
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      console.log(`i: ${i}, l: ${l}, r: ${r}, res: ${res}, sum: ${sum}`);
      if (sum > 0) {
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
          console.log(
            `Added - i: ${i}, l: ${l}, r: ${r}, res: ${res}, sum: ${sum}`
          );
        }
      }
    }
  }

  return res;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([]));
// console.log(threeSum([0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
