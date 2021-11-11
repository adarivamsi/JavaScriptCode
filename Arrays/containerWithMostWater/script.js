console.clear();
console.log("Container With Most Water");

var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let res = 0;
  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);
    console.log(`Left - l: ${l}, r: ${r}, area: ${area}, res: ${res}`);

    if (height[l] < height[r]) {
      l += 1;
      console.log(`Left - l: ${l}, r: ${r}, area: ${area}, res: ${res}`);
    } else {
      r -= 1;
      console.log(`Right - l: ${l}, r: ${r}, area: ${area}, res: ${res}`);
    }
  }

  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
