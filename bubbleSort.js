let arr = [5, 3, 1, 9, 7, 11, 2, 19, 21, 13];

function bubbleSort(arr) {
  let temp;
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        temp       = arr[j];
        arr[j]     = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
