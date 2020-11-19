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

// const testing = bubbleSort([1, 9, 2, 8, 3, 7, 4, 6, 5, 4, 4]);
// console.log(testing);
