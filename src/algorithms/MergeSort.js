export function getMergeSortAnimation(array) {
  const animations = [];
  const auxiliaryArray = array.slice();
  doMergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function doMergeSort(array, startIndex, endIndex, auxiliaryArray, animations) {
  // an array of size one is sorted
  if (startIndex === endIndex) {
    return;
  }

  const middleIndex = Math.floor((startIndex + endIndex) / 2);

  // call left half subarray recursively
  doMergeSort(auxiliaryArray, startIndex, middleIndex, array, animations);
  // call right half subarray recursively
  doMergeSort(auxiliaryArray, middleIndex + 1, endIndex, array, animations);

  merge(array, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}

function merge(
  array,
  startIndex,
  middleIndex,
  endIndex,
  auxiliaryArray,
  animations
) {
  let i = startIndex;
  let j = middleIndex + 1;
  let k = startIndex;

  while (i <= middleIndex && j <= endIndex) {
    // indices for highlighting and de-highlighting
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // [arrayIndex, newHeight]
      animations.push([k, auxiliaryArray[i]]);
      array[k] = auxiliaryArray[i];
      k++;
      i++;
    } else {
      animations.push([k, auxiliaryArray[j]]);
      array[k] = auxiliaryArray[j];
      k++;
      j++;
    }
  }

  while (i <= middleIndex) {
    // indices for highlighting and de-highlighting
    animations.push([i, i]);
    animations.push([i, i]);
    // [arrayIndex, newHeight]
    animations.push([k, auxiliaryArray[i]]);
    array[k] = auxiliaryArray[i];
    k++;
    i++;
  }

  while (j <= endIndex) {
    // indices for highlighting and de-highlighting
    animations.push([j, j]);
    animations.push([j, j]);
    // [arrayIndex, newHeight]
    animations.push([k, auxiliaryArray[j]]);
    array[k] = auxiliaryArray[j];
    k++;
    j++;
  }
}
