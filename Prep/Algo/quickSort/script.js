console.clear();
console.log("Quick Sort");

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (const x of arr.slice(0, arr.length - 1)) {
    x <= pivot ? left.push(x) : right.push(x);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr = [7, 9, 3, 5, 15, 10, 0];
console.log(quickSort(arr));
