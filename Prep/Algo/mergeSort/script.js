console.clear();
console.log("Merge Sort");

const sortedArray = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    // console.log("b loop", sorted, left, right);
    if (left[0] < right[0]) {
      sorted.push(left[0]);
      left.shift();
    } else {
      sorted.push(right[0]);
      right.shift();
    }
    // console.log("a loop", sorted, left, right);
  }

  return sorted.concat(left, right);
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  //   console.log("main", left, right);

  return sortedArray(mergeSort(left), mergeSort(right));
};

const arr = [7, 9, 3, 5, 15, 10, 0];
console.log(mergeSort(arr));
