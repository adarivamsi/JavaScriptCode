console.clear();
console.log("Find Minimum in Rotated Sorted Array");

var findMin = function (nums) {
  let res = nums[0];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }
    let m = Math.trunc((l + r) / 2);
    res = Math.min(res, nums[m]);
    if (nums[m] >= nums[l]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
    console.log(`Left: ${l}, Right: ${r}, Result: ${res}, Middle: ${m}`);
  }
  return res;
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
console.log(findMin([2, 1]));
