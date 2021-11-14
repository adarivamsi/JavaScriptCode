console.clear();
console.log("Dynamic Array");

var dynamicArray = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    console.log(arr);
    arr.push(i);
  }
  return arr;
};

console.log(dynamicArray(100));
