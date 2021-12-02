console.clear();
console.log("Bubble Sort");

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
};

const arr = [7, 9, 3, 5, 15, 10, 0];
console.log(bubbleSort(arr));
