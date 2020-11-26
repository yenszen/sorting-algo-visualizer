export function getInsertionSortAnimation(array) {
  const animations = [];
  const arrayClone = array.slice();
  doInsertionSort(arrayClone, animations);
  return animations;
}

function doInsertionSort(arr, animations) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    // [currentIndex]
    animations.push([i]);
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      // [prevIndex, prevHeight, currIndex]
      animations.push([j, arr[j], j + 1]);
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = key;
    // [currentIndex, overwrittenHeight]
    animations.push([j + 1, key]);
  }
}
