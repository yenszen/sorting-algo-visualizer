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
  animations.push([pivotIndex]);
  // storeIndex is the index of the sorted element we return as partitionIndex in quickSort()
  let storeIndex = startIndex - 1;

  for (let pointer = storeIndex + 1; pointer < endIndex; pointer++) {
    animations.push([pointer, pivotIndex]);
    if (arr[pointer] < arr[pivotIndex]) {
      storeIndex++;
      animations.push([
        storeIndex,
        arr[storeIndex],
        pointer,
        arr[pointer],
        pivotIndex,
      ]);
      const temp = arr[storeIndex];
      arr[storeIndex] = arr[pointer];
      arr[pointer] = temp;
    }
  }
  storeIndex++;
  animations.push([storeIndex, arr[storeIndex], pivotIndex, arr[pivotIndex]]);
  const temp = arr[storeIndex];
  arr[storeIndex] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return storeIndex;
}
