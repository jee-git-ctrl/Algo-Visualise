export const mergeSort = (array) => {
  const steps = [];
  let comparisons = 0;
  let swaps = 0;
  const sorted = new Set();

  // Initial state
  steps.push({
    array: [...array],
    comparing: [],
    swapping: [],
    merging: [],
    shifting: [],
    pivot: [],
    minIndex: [],
    sorted: [...sorted],
    currentComparisons: comparisons,
    currentSwaps: swaps
  });

  const mergeSortHelper = (arr, left, right) => {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    mergeSortHelper(arr, left, mid);
    mergeSortHelper(arr, mid + 1, right);
    merge(arr, left, mid, right);
  };

  const merge = (arr, left, mid, right) => {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
      comparisons++;
      // Comparison phase
      steps.push({
        array: [...array],
        comparing: [left + i, mid + 1 + j],
        swapping: [],
        merging: [],
        shifting: [],
        pivot: [],
        minIndex: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });

      // Choose which value to place
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i++];
      } else {
        arr[k] = rightArr[j++];
      }
      swaps++;
      // Merging phase: highlight the written position
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [],
        merging: [k],
        shifting: [],
        pivot: [],
        minIndex: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });

      k++;
    }

    // Handle remaining elements in leftArr
    while (i < leftArr.length) {
      arr[k] = leftArr[i++];
      swaps++;
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [],
        merging: [k],
        shifting: [],
        pivot: [],
        minIndex: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });
      k++;
    }

    // Handle remaining elements in rightArr
    while (j < rightArr.length) {
      arr[k] = rightArr[j++];
      swaps++;
      steps.push({
        array: [...array],
        comparing: [],
        swapping: [],
        merging: [k],
        shifting: [],
        pivot: [],
        minIndex: [],
        sorted: [...sorted],
        currentComparisons: comparisons,
        currentSwaps: swaps
      });
      k++;
    }

    // Mark the merged section as sorted
    for (let x = left; x <= right; x++) {
      sorted.add(x);
    }
    steps.push({
      array: [...array],
      comparing: [],
      swapping: [],
      merging: [],
      shifting: [],
      pivot: [],
      minIndex: [],
      sorted: [...sorted],
      currentComparisons: comparisons,
      currentSwaps: swaps
    });
  };

  mergeSortHelper(array, 0, array.length - 1);

  // Convert the Set to an array for the final step
  const finalStep = steps[steps.length - 1];
  finalStep.sorted = Array.from(sorted);

  return { steps, comparisons, swaps };
};