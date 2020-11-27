export function getMergeSortAnimation(array) {
  const animations = [];
  const arrayClone = array.slice();
  doMergeSort(arrayClone, animations);
  return animations;
}

function doMergeSort(arr, animations) {
  const n = arr.length;

  if (n === 1) {
    return arr;
  }

  const mid = Math.floor(n / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid, n);

  left = doMergeSort(left, animations);
  right = doMergeSort(right, animations);

  merge(left, right, arr, animations);
  return arr;
}

function merge(left, right, arr, animations) {
  const nLeft = left.length;
  const nRight = right.length;
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < nLeft && j < nRight) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      k++;
      i++;
    } else {
      arr[k] = right[j];
      k++;
      j++;
    }
  }

  while (i < nLeft) {
    arr[k] = left[i];
    k++;
    i++;
  }

  while (j < nRight) {
    arr[k] = right[j];
    k++;
    j++;
  }
}
