/*
export const bubbleSort = (arr) => {
  let count = 0;

  while (count === 0) {
    let changes = false;

    for (let i = 0; i < arr.length - 1; i++) {
      const a = arr[i];
      const b = arr[i + 1];

      if (arr[i] > arr[i + 1]) {
        arr[i] = b;
        arr[i + 1] = a;
        changes = true;
      }
    }

    changes ? (changes = false) : (count += 1);
  }

  return arr;
};
*/

export function getBubbleSortAnimations(array) {
  const animations = [];
  const arrayClone = array.slice();
  doBubbleSort(arrayClone, animations);
  return animations;
}

function doBubbleSort(arr, animations) {
  let count = 0;

  while (count === 0) {
    let changes = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const a = arr[i];
      const b = arr[i + 1];
      animations.push([i, i + 1]);

      if (arr[i] > arr[i + 1]) {
        animations.push([i + 1, i]);
        changes = true;
        arr[i] = b;
        arr[i + 1] = a;
      } else {
        animations.push([i, i + 1]);
      }
    }

    changes ? (changes = false) : (count += 1);
  }

  return arr;
}

// const array = [10, 8, 9, 7, 7, 5, 6, 4, 2, 3, 1];
// const jsSort = array.slice().sort((a, b) => a - b);
// const ownSort = doBubbleSort(array);
// console.log(arraysAreEqual(jsSort, ownSort));
// console.log(jsSort, ownSort);

// function arraysAreEqual(arrA, arrB) {
//   if (arrA.length !== arrB.length) {
//     return false;
//   }

//   for (let i = 0; i < arrA.length; i++) {
//     if (arrA[i] !== arrB[i]) {
//       return false;
//     }
//   }

//   return true;
// }

/*

create animations array
loop over each element in original array
store [i, j] from the og array in the animations array to colorize
store [i, j] from og array in the animations array to swap and/or decolorize
move on to next og array element

*/
