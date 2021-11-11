console.clear();
console.log("Search in Rotated Sorted Array");

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.trunc((l + r) / 2);
    if (target === nums[m]) {
      return m;
    }
    console.log(`First - Left: ${l}, Right: ${r}, Middle: ${m}`);

    // Left sorted portion
    if (nums[l] <= nums[m]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
      console.log(`First Inner - Left: ${l}, Right: ${r}, Middle: ${m}`);
    } else {
      // Right sorted portion
      if (target < nums[m] || target > nums[r]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
      console.log(`Second - Left: ${l}, Right: ${r}, Middle: ${m}`);
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
