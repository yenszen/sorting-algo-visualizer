export function getQuickSortAnimation(array) {
  const animations = [];
  const arrayClone = array.slice();
  doQuickSort(arrayClone, 0, arrayClone.length - 1, animations);
  return animations;
}

function doQuickSort(arr, startIndex, endIndex, animations) {
  if (startIndex < endIndex) {
    const partitionIndex = partition(arr, startIndex, endIndex, animations);
    doQuickSort(arr, startIndex, partitionIndex - 1, animations);
    doQuickSort(arr, partitionIndex + 1, endIndex, animations);
  }
}

function partition(arr, startIndex, endIndex, animations) {
  let pivotIndex = endIndex;
  // storeIndex is the index of the sorted element we return as partitionIndex in quickSort()
  let storeIndex = startIndex - 1;

  for (let pointer = storeIndex + 1; pointer < endIndex; pointer++) {
    if (arr[pointer] < arr[pivotIndex]) {
      storeIndex++;
      const temp = arr[storeIndex];
      arr[storeIndex] = arr[pointer];
      arr[pointer] = temp;
    }
  }
  storeIndex++;
  const temp = arr[storeIndex];
  arr[storeIndex] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return storeIndex;
}

// function quickSort(arr, startIndex, endIndex) {
//   // recursively call quickSort until left with a single element (which is therefore sorted)
//   if (startIndex < endIndex) {
//     // partitionIndex is the index of the sorted element
//     const partitionIndex = partition(arr, startIndex, endIndex);
//     quickSort(arr, startIndex, partitionIndex - 1);
//     quickSort(arr, partitionIndex + 1, endIndex);
//   }
//   return arr;
// }

// const testing = [10, 80, 30, 80, 90, 40, 50, 70];
// const output = quickSort(testing, 0, testing.length - 1);
// console.log(output);
