console.clear();
console.log("Insertion Sort");

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }

  return arr;
};

const arr = [7, 9, 3, 5, 15, 10, 0];
console.log(insertionSort(arr));
